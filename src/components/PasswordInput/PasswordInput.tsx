import React, { useState } from 'react'
import './PasswordInput.scss'
import { IonButton, IonButtons, IonIcon, IonInput, IonItem, IonLabel } from '@ionic/react'
import { eyeOffSharp, eyeSharp } from 'ionicons/icons'

type PasswordInputProps = {
  readonly onIonChange?: (value: string) => void
  readonly onIonFocus?: () => void
  readonly label?: string
  readonly name?: string
}

export const PasswordInput: React.FC<PasswordInputProps> = ({ onIonChange, onIonFocus, label, name }) => {
  const [isVisible, setVisible] = useState(false)

  return (
    <IonItem lines="none" className="input ion-no-padding">
      {!!label && (
        <IonLabel className="section-title" position="floating">
          {label}
        </IonLabel>
      )}
      <IonInput
        onIonFocus={() => !!onIonFocus && onIonFocus()}
        onIonChange={({ detail }) => !!onIonChange && onIonChange(!!detail.value ? detail.value : '')}
        type={isVisible ? 'text' : 'password'}
        name={name}
        clearOnEdit={true}
      />
      <IonButtons slot="end">
        <IonButton
          onClick={() => setVisible(!isVisible)}
          className="round-button"
          fill="clear"
          expand="block"
          shape="round">
          <IonIcon icon={isVisible ? eyeOffSharp : eyeSharp} />
        </IonButton>
      </IonButtons>
    </IonItem>
  )
}
