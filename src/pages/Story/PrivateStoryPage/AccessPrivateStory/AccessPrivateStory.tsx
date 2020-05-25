import React, { useState } from 'react'
import 'pages/Story/PrivateStoryPage/AccessPrivateStory/AccessPrivateStory.scss'
import { IonButton, IonCol, IonRow } from '@ionic/react'
import { PasswordInput } from 'components/PasswordInput/PasswordInput'
import { generateHash, packHashedPass } from 'utils'
import { loader } from 'graphql.macro'
import { useLazyQuery, useQuery } from '@apollo/react-hooks'
import StateContainer from 'components/StateContainer/StateContainer'
import { State } from 'assets/state'

//Queries
const queryGetSalt = loader('src/graphql/get-private-story-salt.graphql')
const queryGetPrivateStory = loader('src/graphql/get-private-story.graphql')

type PrivateStoryProps = {
  readonly onAccessGranted: (hash: any) => void
  readonly id: string
}

export const AccessPrivateStory: React.FC<PrivateStoryProps> = ({ onAccessGranted, id }) => {
  const [password, setPassword] = useState('')
  const [showError, setError] = useState(false)
  const [unexpectedError, setUnexpectedError] = useState(false)
  const [processingRequest, setProcessingRequest] = useState(false)
  const [hashedPass, setHashedPass] = useState('')

  // Se utilizará la sal, una suerte de llave pública, para generar el hash de la contraseña introducida y compararlo con el de la historia
  const { data, error, loading } = useQuery(queryGetSalt, { variables: { id } })
  const [lazilyGetPrivateStory] = useLazyQuery(queryGetPrivateStory, {
    onCompleted: (data) => {
      // Si se encuentra coincidencia del par id/hash se concede acceso a la historia
      data?.private_stories?.length > 0 ? onAccessGranted(hashedPass) : setError(true)
      setProcessingRequest(data?.private_stories?.length > 0)
    },
    onError: (error) => {
      setHashedPass('')
      setProcessingRequest(false)
      setUnexpectedError(true)
      console.log('error ', error)
    }
  })

  const attemptAccess = (): void => {
    setProcessingRequest(true)
    const callback = (err: Error | null, result: Buffer): any => {
      const hash = packHashedPass(result, data.private_stories_by_pk.salt)
      setHashedPass(hash)
      lazilyGetPrivateStory({ variables: { id, hash } })
    }

    generateHash(password, data.private_stories_by_pk.salt, callback)
  }

  return !data || error || loading || unexpectedError ? (
    <StateContainer state={error || unexpectedError ? State.ALERT : State.LOADING} />) : (
    <>
      <StateContainer state={State.LOCKED} />
      <IonRow>
        <IonCol>
          <PasswordInput
            onIonFocus={() => setError(false)}
            onIonChange={(password: string) => setPassword(password)}
            label="Contraseña"
          />
          <span className={showError ? 'input-error' : 'ion-hide'}>La contraseña introducida es incorrecta</span>
        </IonCol>
      </IonRow>
      <IonRow className="button-row">
        <IonCol>
          <IonButton
            onClick={() => attemptAccess()}
            disabled={processingRequest || !password}
            className="menu-button"
            fill="solid"
            color="palette-1"
            expand="full">
            IR A LA HISTORIA
          </IonButton>
        </IonCol>
      </IonRow>
    </>
  )
}
