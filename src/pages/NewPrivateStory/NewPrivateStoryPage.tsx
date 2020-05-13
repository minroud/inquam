import React from 'react'
import { IonButton, IonCol, IonContent, IonGrid, IonPage, IonRow } from '@ionic/react'
import 'pages/NewPrivateStory/NewPrivateStoryPage.scss'
import { NavigationHeader } from 'components/NavigationHeader/NavigationHeader'
import { useParams } from 'react-router'
import StateContainer from 'components/StateContainer/StateContainer'
import { State } from 'assets/state'

// Vista informativa que redirige a la historia privada recién creada

export const NewPrivateStoryPage: React.FC = () => {
  const { id } = useParams()

  return (
    <IonPage>
      <NavigationHeader title="NUEVA HISTORIA PRIVADA" />
      <IonContent>
        <IonGrid className="ion-no-padding new-story">
          <StateContainer
            state={State.SUCCESS}
            text={['¡Hemos creado tu nueva historia privada!']}
            justifyText={true}
          />
          <IonRow>
            <IonCol>
              <p className="section-title">
                Podrás encontrarla en tu biblioteca, o buscando la referencia <span className="ref">{`#${id}`}</span>
              </p>
            </IonCol>
          </IonRow>
          <IonRow>
            <IonCol>
              <p className="section-title">
                Recuerda que, al ser una historia anónima, si olvidas la contraseña o la referencia podrías perder el
                acceso a ella
              </p>
            </IonCol>
          </IonRow>
          <IonRow>
            <IonCol>
              <p className="section-title">¡Así que apúntalas bien en un lugar seguro!</p>
            </IonCol>
          </IonRow>
          <IonRow className="button-row">
            <IonCol>
              <IonButton
                routerLink={`/story/${id}`}
                routerDirection="none"
                className="menu-button"
                fill="solid"
                color="palette-1"
                expand="full">
                IR A LA HISTORIA
              </IonButton>
            </IonCol>
          </IonRow>
        </IonGrid>
      </IonContent>
    </IonPage>
  )
}
