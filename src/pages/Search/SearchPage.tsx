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
import { isEmptyStory, normalizeString } from 'utils'
import { GetPrivateStoryCardQuery, GetStoriesQuery } from 'types/__generated__/graphql'

const queryGetStories = loader('src/graphql/get-stories.graphql')
const queryGetPrivateStoryCard = loader('src/graphql/get-private-story-card.graphql')

export const SearchPage: React.FC = () => {
  const [filteredStories, setFilteredStories] = useState<readonly Story[]>([])
  const [privateStory, setPrivateStory] = useState<Story>(emptyStory)

  // Se obtienen las historias, que son filtradas en tiempo real tras cada cambio en el cuadro de búsqueda
  // Este sistema dejará de ser sostenible conforme crezca la base de datos
  const { data, loading } = useQuery<GetStoriesQuery>(queryGetStories, {
    onCompleted: ({ stories }) => setFilteredStories(stories),
  })

  // Al buscar una historia privada por referncia se hace una lazyQuery
  const [lazilyGetPrivateStoryCard, { data: pData, loading: pLoading }] = useLazyQuery<GetPrivateStoryCardQuery>(
    queryGetPrivateStoryCard,
    {
      fetchPolicy: 'network-only',
      onCompleted: ({ private_stories_by_pk }) => {
        const story = !private_stories_by_pk ? emptyStory : private_stories_by_pk
        setPrivateStory(story as Story)
      }
    }
  )

  // La búsqueda por referencia de historias privadas requiere su propia llamada al backend y no está implementada
  const refPattern = /^#[A-Za-z0-9]{6}$/
  const privateRefPattern = /^#![A-Za-z0-9]{6}$/

  const filterByContent = (query: string): readonly any[] => {
    return !!data?.stories
      ? data.stories.filter(
          ({ title, description }: Story) =>
            normalizeString(title).includes(normalizeString(query)) ||
            normalizeString(description).includes(normalizeString(query))
        )
      : []
  }

  const filterById = (query: string): readonly any[] => {
    const index = !!data?.stories ? data.stories.findIndex(({ id }: Story) => query.slice(1) === id) : -1
    return index === -1 ? [] : [data!.stories[index]]
  }

  const filterStories = (query: string): readonly any[] => {
    setPrivateStory(emptyStory)
    return privateRefPattern.test(query)
      ? requestPrivateStoryWithSideEffects(query.slice(1))
      : refPattern.test(query)
      ? filterById(query)
      : filterByContent(query.toLowerCase())
  }

  const requestPrivateStoryWithSideEffects = (id: String): readonly Story[] => {
    lazilyGetPrivateStoryCard({ variables: { id } })
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
            !!detail.value
              ? setFilteredStories(filterStories(detail.value))
              : setFilteredStories(!!data?.stories ? data.stories : [])
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
