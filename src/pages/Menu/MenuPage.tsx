import React from 'react'

import { IonButton, IonButtons, IonContent, IonHeader, IonIcon, IonList, IonPage, IonToolbar } from '@ionic/react'

import 'pages/Menu/MenuPage.scss'

import { closeSharp } from 'ionicons/icons'
import inquam from 'assets/inquam.svg'
import { MenuButton } from 'components/MenuButton/MenuButton'
import { useHistory } from 'react-router'

// La presentación del menú como su propia página pretendía ser minimalista y poco intrusiva, y estaba pensada para una aplicación independiente
// pero su integración con los estándares de los navegadores es problemática

const menuItems = [
  { title: 'BUSCAR', path: '/search', color: 'primary' },
  {
    title: 'CREAR',
    path: '',
    color: 'palette-1',
    children: [
      { title: 'UNA HISTORIA PÚBLICA', path: '/new-story', color: 'palette-1-variation-1' },
      { title: 'UNA HISTORIA PRIVADA', path: '/new-private-story', color: 'palette-1-variation-2' },
    ],
  },
  { title: 'BIBLIOTECA', path: '/library', color: 'palette-2' },
  { title: 'AYUDA', path: '/help', color: 'palette-3' },
]

export const MenuPage: React.FC = () => {
  const history = useHistory()

  return (
    <IonPage>
      <IonHeader className="expanded-header">
        <IonToolbar>
          <img className="ion-a menu-logo" src={inquam} alt="inquam" />
          <IonButtons slot="end">
            <IonButton
              onClick={() => history.goBack()}
              className="round-button"
              fill="clear"
              expand="block"
              shape="round">
              <IonIcon icon={closeSharp} />
            </IonButton>
          </IonButtons>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <IonList className="ion-margin-top" lines="none">
          {menuItems.map((item, id) => (
            <MenuButton key={id} button={item} />
          ))}
        </IonList>
      </IonContent>
    </IonPage>
  )
}
