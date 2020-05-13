import React, { useState } from 'react'
import { IonContent, IonList, IonPage, IonSearchbar } from '@ionic/react'
import 'pages/Search/SearchPage.scss'
import { useQuery } from '@apollo/react-hooks'
import { loader } from 'graphql.macro'
import { NavigationHeader } from 'components/NavigationHeader/NavigationHeader'
import { StoryCard } from 'components/StoryCard/StoryCard'
import StateContainer from 'components/StateContainer/StateContainer'
import { State } from 'assets/state'
import { Story } from 'types/stories'

const queryGetStories = loader('src/graphql/get-stories.graphql')

export const SearchPage: React.FC = () => {
  const [filteredStories, setFilteredStories] = useState<readonly Story[]>([])
  // Se obtienen las historias, que son filtradas en tiempo real tras cada cambio en el cuadro de búsqueda
  // Este sistema dejará de ser sostenible conforme crezca la base de datos
  const { data, error, loading } = useQuery(queryGetStories, {
    onCompleted: (data) => setFilteredStories(data.stories),
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
    console.log('i', index, data.stories[index])
    return index === -1 ? [] : [data.stories[index]]
  }

  const filterStories = (query: string): readonly any[] => {
    return refPattern.test(query) ? filterById(query) : filterByContent(query)
  }

  return (
    <IonPage>
      <NavigationHeader title="BUSCAR" />
      <IonContent>
        <IonSearchbar
          onIonChange={({ detail }) =>
            !!detail.value ? setFilteredStories(filterStories(detail.value)) : setFilteredStories(data.stories)
          }
          animated={true}
          placeholder="Puedes buscar por título, referencia o descripción"
        />
        {loading || error || !data || !filteredStories.length ? (
          <StateContainer state={loading || !data ? State.LOADING : error ? State.ALERT : State.NOT_FOUND} />
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
