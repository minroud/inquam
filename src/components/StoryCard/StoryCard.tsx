import React, { useEffect, useState } from 'react'
import 'components/StoryCard/StoryCard.scss'
import { IonButton, IonButtons, IonCard, IonCardContent, IonCardHeader, IonCardTitle, IonIcon } from '@ionic/react'
import { Story } from 'types/stories'
import { bookmarkOutline, bookmarkSharp } from 'ionicons/icons'
import { Plugins } from '@capacitor/core'

const { Storage } = Plugins

export const StoryCard: React.FC<Story> = ({ title, description, id }) => {
  const [isInLibrary, setInLibrary] = useState(false)
  // Al iniciar el componente, se comprueba si está guardado en la biblioteca
  useEffect(() => {
    checkInLibrary().then((result) => setInLibrary(result))
  })

  const checkInLibrary = async (): Promise<boolean> => {
    const libraryString = await Storage.get({ key: 'library' })
    const library: readonly Story[] = !!libraryString.value ? JSON.parse(libraryString.value) : []
    return library.findIndex(({ id: storyId }) => storyId === id) !== -1
  }
  // Permite añadir y eliminar la historia de la biblioteca
  const toggleInLibrary = async (): Promise<void> => {
    const libraryString = await Storage.get({ key: 'library' })
    const library: readonly Story[] = !!libraryString.value ? JSON.parse(libraryString.value) : []
    const idx = library.findIndex(({ id: storyId }) => storyId === id)
    const newLibrary =
      idx !== -1 ? library.filter(({ id: storyId }) => storyId !== id) : [...library, { id, title, description }]
    await Storage.set({
      key: 'library',
      value: JSON.stringify(newLibrary),
    })
    setInLibrary(!isInLibrary)
  }

  return (
    <>
      <IonButtons className="bookmark">
        <IonButton
          onClick={() => toggleInLibrary()}
          className={'round-button'}
          fill="clear"
          expand="block"
          shape="round">
          <IonIcon
            className={isInLibrary ? 'in-library' : 'not-in-library'}
            icon={isInLibrary ? bookmarkSharp : bookmarkOutline}
          />
        </IonButton>
      </IonButtons>
      <IonCard routerLink={`/story/${id}`} routerDirection="none">
        <IonCardHeader>
          <IonCardTitle>{title}</IonCardTitle>
        </IonCardHeader>

        <IonCardContent>{description}</IonCardContent>
      </IonCard>
    </>
  )
}
