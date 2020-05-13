import React from 'react'
import './HomeHeader.scss'
import { IonButton, IonButtons, IonHeader, IonIcon, IonToolbar } from '@ionic/react'
import { menuSharp } from 'ionicons/icons'
import inquam from 'assets/inquam.svg'

type HomeHeaderProps = {
  readonly title?: string
}

export const HomeHeader: React.FC<HomeHeaderProps> = ({ title }) => {
  return (
    <IonHeader className="expanded-header">
      <IonToolbar>
        <IonButtons slot="end">
          <IonButton
            routerLink={'/menu'}
            routerDirection="none"
            className="round-button"
            fill="clear"
            expand="block"
            shape="round">
            <IonIcon icon={menuSharp} />
          </IonButton>
        </IonButtons>
        <img className="logo" src={ inquam } alt="inquam"/>
      </IonToolbar>
    </IonHeader>
  )
}
