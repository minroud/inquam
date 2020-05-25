import React, { useState } from 'react'
import { IonContent, IonList, IonPage, IonSearchbar } from '@ionic/react'
import 'pages/Search/SearchPage.scss'
import { useLazyQuery, useQuery } from '@apollo/react-hooks'
import { loader } from 'graphql.macro'
import { NavigationHeader } from 'components/NavigationHeader/NavigationHeader'
import { StoryCard } from 'components/StoryCard/StoryCard'
import StateContainer from 'components/StateContainer/StateContainer'
import { State } from 'assets/state'
import { emptyStory, Story } from 'types/stories'
import { isEmptyStory } from 'utils'

const queryGetStories = loader('src/graphql/get-stories.graphql')
const queryGetPrivateStoryCard = loader('src/graphql/get-private-story-card.graphql')

export const SearchPage: React.FC = () => {
  const [filteredStories, setFilteredStories] = useState<readonly Story[]>([])
  const [privateStory, setPrivateStory] = useState<Story>(emptyStory)

  // Se obtienen las historias, que son filtradas en tiempo real tras cada cambio en el cuadro de búsqueda
  // Este sistema dejará de ser sostenible conforme crezca la base de datos
  const { data, loading } = useQuery(queryGetStories, {
    onCompleted: (data) => setFilteredStories(data.stories),
  })

  // Al buscar una historia privada por referncia se hace una lazyQuery
  const [lazilyGetPrivateStoryCard, { data: pData, loading: pLoading }] = useLazyQuery(queryGetPrivateStoryCard, {
    fetchPolicy: "network-only",
    onCompleted: (data) => {
      console.log('got ', data)
      setPrivateStory(data.private_stories_by_pk)
    },
    onError: (error) => console.log('este error ', error),
  })

  // La búsqueda por referencia de historias privadas requiere su propia llamada al backend y no está implementada
  const refPattern = /^#[A-Za-z0-9]{6}$/
  const privateRefPattern = /^#![A-Za-z0-9]{6}$/

  const filterByContent = (query: string): readonly any[] => {
    return data.stories.filter(
      ({ title, description }: Story) =>
        title.toLowerCase().includes(query) || description.toLowerCase().includes(query)
    )
  }

  const filterById = (query: string): readonly any[] => {
    const index = data.stories.findIndex(({ id }: Story) => query.slice(1) === id)
    return index === -1 ? [] : [data.stories[index]]
  }

  const filterStories = (query: string): readonly any[] => {
    setPrivateStory(emptyStory)
    console.log('pdata', pData)
    return privateRefPattern.test(query)
      ? requestPrivateStoryWithSideEffects(query.slice(1))
      : refPattern.test(query)
      ? filterById(query)
      : filterByContent(query.toLowerCase())
  }

  const requestPrivateStoryWithSideEffects = (id: String): readonly Story[] => {
    lazilyGetPrivateStoryCard({variables: { id }})
    return []
  }

  const isError = (): boolean => !data && !pData && !loading && !pLoading
  const isLoading = (): boolean => loading || pLoading
  const notFound = (): boolean => !isLoading() && !filteredStories.length && isEmptyStory(privateStory)

  return (
    <IonPage>
      <NavigationHeader title="BUSCAR" />
      <IonContent>
        <IonSearchbar
          onIonChange={({ detail }) =>
            !!detail.value ? setFilteredStories(filterStories(detail.value)) : setFilteredStories(data.stories)
          }
          animated={true}
          inputmode="text"
          placeholder="Puedes buscar por título, referencia o descripción"
        />
        {isLoading() || isError() || notFound() ? (
          <StateContainer state={isLoading() ? State.LOADING : isError() ? State.ALERT : State.NOT_FOUND} />
        ) : !filteredStories.length && !isEmptyStory(privateStory) ? (
          <StoryCard {...privateStory} />
        ) : (
          filteredStories.map((story, idx) => (
            <IonList key={idx}>
              <StoryCard {...story} />
            </IonList>
          ))
        )}
      </IonContent>
    </IonPage>
  )
}
