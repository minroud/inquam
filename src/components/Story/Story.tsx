import React, { useEffect, useMemo } from 'react'
import './Story.scss'

import { IonCol, IonRow } from '@ionic/react'
import { scrollToBottom } from 'utils'

type StoryProps = {
  readonly title: String
  readonly fragments: ReadonlyArray<any>
}

// Renderiza los fragmentos que componen la historia. Se utiliza memo para que no se rerendericen aunque lo haga el componente padre
// salvo cuando alguno de sus props haya cambiado

const Story: React.FC<StoryProps> = ({ title, fragments }) => {
  return useMemo(() => <Storyb title={title} fragments={fragments} />, [title, fragments])
}

const Storyb: React.FC<StoryProps> = ({ title, fragments }) => {
  useEffect(() => {
    setTimeout(() => scrollToBottom(), 200)
  }, [fragments])

  return (
    <>
      <IonRow>
        <IonCol className="ion-text-center">
          <h1>{title}</h1>
        </IonCol>
      </IonRow>
      {fragments.map(({ content }, key) => (
        <IonRow key={key}>
          <IonCol>
            <p>{content}</p>
          </IonCol>
        </IonRow>
      ))}
    </>
  )
}

export default Story
