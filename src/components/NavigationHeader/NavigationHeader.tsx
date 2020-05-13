import React from 'react'
import './NavigationHeader.scss'
import { IonButton, IonButtons, IonHeader, IonIcon, IonTitle, IonToolbar } from '@ionic/react'
import { chevronBackSharp, closeSharp } from 'ionicons/icons'
import { useHistory } from 'react-router'
import { loader } from 'graphql.macro'
import { useQuery } from '@apollo/react-hooks'

const getCurrentStory = loader('src/graphql/get-current-story.graphql')

type NavigationHeaderProps = {
  readonly title?: string
}

export const NavigationHeader: React.FC<NavigationHeaderProps> = ({ title }) => {
  const history = useHistory()
  const { data } = useQuery(getCurrentStory)

  const go2Story = (id: string): void => history.replace(`/story/${id}`)

  return (
    <IonHeader className="expanded-header">
      <IonToolbar>
        <IonTitle className="ion-text-center page-title">{title}</IonTitle>
        <IonButtons slot="start">
          <IonButton
            onClick={() => history.goBack()}
            className="round-button"
            fill="clear"
            expand="block"
            shape="round">
            <IonIcon icon={chevronBackSharp} />
          </IonButton>
        </IonButtons>
        <IonButtons slot="end">
          <IonButton
            onClick={() => (data.currentStory ? go2Story(data.currentStory) : history.replace('/'))}
            className="round-button"
            fill="clear"
            expand="block"
            shape="round">
            <IonIcon icon={closeSharp} />
          </IonButton>
        </IonButtons>
      </IonToolbar>
    </IonHeader>
  )
}
