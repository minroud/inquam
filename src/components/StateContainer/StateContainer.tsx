import React from 'react'
import './StateContainer.scss'
import { getState, State } from 'assets/state'
import { IonCol, IonRow } from '@ionic/react'

type ContainerProps = {
  readonly state: State
  readonly text?: readonly string[]
  readonly justifyText?: boolean
}

// Componente encargado de presentar los distintos estados de la app

const StateContainer: React.FC<ContainerProps> = ({ state, text, justifyText }) => {
  const getDefaultText = (): readonly string[] => {
    switch (state) {
      case State.ALERT:
        return ['¡Vaya!', 'Algo ha ido mal.', 'Por favor, vuelve a intentarlo pasados unos instantes.']
      case State.EMPTY:
        return ['Aún no hay ninguna historia guardada']
      case State.LOCKED:
        return ['Introduce las credenciales de acceso']
      case State.NOT_FOUND:
        return ['¡Lo siento!', 'No he Encontrado lo que buscabas']
      default:
        return []
    }
  }

  const renderRow = (row: string, id: number): any => {
    return (
      <IonRow key={id}>
        <IonCol className={justifyText ? '' : 'ion-text-center'}>
          <p className="section-title">{row}</p>
        </IonCol>
      </IonRow>
    )
  }

  return (
    <>
      <IonRow>
        <IonCol className="ion-text-center">
          <img
            className={(!!text && text.length > 0) || getDefaultText().length > 0 ? 'image-with-text' : 'only-image'}
            src={getState(state)}
          />
        </IonCol>
      </IonRow>
      {!!text && text.length > 0
        ? text?.map((row, id) => renderRow(row, id))
        : getDefaultText().map((row, id) => renderRow(row, id))}
    </>
  )
}

export default StateContainer
