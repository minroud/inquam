import React, { useEffect, useState } from 'react'
import { IonContent, IonList, IonPage } from '@ionic/react'
import 'pages/Search/SearchPage.scss'
import { NavigationHeader } from 'components/NavigationHeader/NavigationHeader'
import { StoryCard } from 'components/StoryCard/StoryCard'
import { Story } from 'types/stories'

import { Plugins } from '@capacitor/core'
import StateContainer from 'components/StateContainer/StateContainer'
import { State } from 'assets/state'

const { Storage } = Plugins
//Los datos mínimos de las historias guardadas se almacenan en la memoria interna del dispositivo
export const LibraryPage: React.FC = () => {
  const [library, setLibrary] = useState<readonly Story[]>([])

  useEffect(() => {
    getLibrary().then((result) => setLibrary(result))
  }, [])

  const getLibrary = async (): Promise<readonly Story[]> => {
    const libraryString = await Storage.get({ key: 'library' })
    return !!libraryString.value ? JSON.parse(libraryString.value) : []
  }

  return (
    <IonPage>
      <NavigationHeader title="BIBLIOTECA" />
      <IonContent>
        {!!library.length ? (
          library.map((story, idx) => (
            <IonList key={idx}>
              <StoryCard {...story} />
            </IonList>
          ))
        ) : (
          <StateContainer state={State.EMPTY} />
        )}
      </IonContent>
    </IonPage>
  )
}
