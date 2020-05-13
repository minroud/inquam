import React, { useState } from 'react'
import {
  IonButton,
  IonButtons,
  IonCol,
  IonContent,
  IonFooter,
  IonGrid,
  IonIcon,
  IonPage,
  IonRow,
  IonTextarea,
} from '@ionic/react'
import { useParams } from 'react-router'
import { useLazyQuery, useMutation } from '@apollo/react-hooks'
import './PrivateStoryPage.scss'
import { caretForwardSharp } from 'ionicons/icons'

import Story from 'components/Story/Story'
import StateContainer from 'components/StateContainer/StateContainer'

import { loader } from 'graphql.macro'
import { HomeHeader } from 'components/HomeHeader/HomeHeader'
import { AccessPrivateStory } from 'pages/Story/PrivateStoryPage/AccessPrivateStory/AccessPrivateStory'
import { State } from 'assets/state'
import { scrollToBottom } from 'utils'

//Queries
const queryGetPrivateStory = loader('src/graphql/get-private-story.graphql')
const mutationAddPrivateFragment = loader('src/graphql/add-private-fragment.graphql')

export const PrivateStoryPage: React.FC = () => {
  const { id } = useParams()

  const [hasAccess, setAccess] = useState(false)
  const [text, setText] = useState('')
  const [isButtonDisabled, setButtonDisabled] = useState(false)
  const [hashedPass, setHashedPass] = useState('')

  const [addPrivateFragment] = useMutation(mutationAddPrivateFragment)
  // La historia privada solo se obtiene una vez se ha concedido acceso al introducir una contraseña correcta
  const [lazilyGetPrivateStory, { data, loading, error }] = useLazyQuery(queryGetPrivateStory, {
    pollInterval: 500,
    onCompleted: () => setAccess(true),
  })

  // Al igual que pasa con las historias privadas, al insertar un nuevo fragmento en la base de datos se actualiza la caché de Apollo
  const sendFragmentWithSideEffects = async (): Promise<void> => {
    setButtonDisabled(true)

    const fragmentId = `${id}#${data.private_stories[0].fragments.length + 1}`

    // eslint-disable-next-line
    try {
      await addPrivateFragment({
        variables: { object: { id: fragmentId, content: text, story_id: id } },
        update: function (cache, { data }) {
          const story: any = cache.readQuery({ query: queryGetPrivateStory, variables: { id, hash: hashedPass } })
          const updatedStory = {
            private_stories: [
              {
                ...story.private_stories[0],
                fragments: [...story.private_stories[0].fragments, data.insert_private_fragments_one],
              },
            ],
          }
          cache.writeQuery({ query: queryGetPrivateStory, variables: { id, hash: hashedPass }, data: updatedStory })
        },
      })

      setText('')
      setButtonDisabled(false)
    } catch (e) {
      console.error('error: ', e)
    } finally {
    }
  }

  // La historia privada se obtiene por una doble coincidencia de hash e id
  const showStoryWithSideEffects = (hash: string): void => {
    setHashedPass(hash)
    lazilyGetPrivateStory({ variables: { id, hash } })
  }

  return !hasAccess ? (
    <IonPage>
      <HomeHeader />
      <IonContent>
        <IonGrid className="ion-no-padding">
          <AccessPrivateStory id={id} onAccessGranted={(data) => showStoryWithSideEffects(data)} />
        </IonGrid>
      </IonContent>
    </IonPage>
  ) : (
    <IonPage>
      <HomeHeader />
      <IonContent>
        <IonGrid>
          {loading || error || !data ? (
            <StateContainer state={error ? State.ALERT : State.LOADING} />
          ) : (
            <Story title={data.private_stories[0].title} fragments={data.private_stories[0].fragments} />
          )}
        </IonGrid>
      </IonContent>
      <IonFooter className={loading || error || !data ? 'ion-hide' : ''}>
        <IonGrid className="ion-padding">
          <IonRow className="input-container">
            <IonCol className="ion-no-padding" size="10">
              <IonTextarea
                value={text}
                inputmode="text"
                rows={1}
                maxlength={data?.private_stories[0]?.char_limit > 0 ? data?.private_stories[0]?.char_limit : undefined}
                autoGrow={true}
                onIonInput={scrollToBottom}
                className="lighter-placeholder"
                onIonChange={({ detail }) => setText(!!detail.value ? detail.value : '')}
                placeholder={data.private_stories[0].fragments.length > 0 ? 'Continuar...' : 'Comenzar...'}
              />
            </IonCol>
            <IonCol className="ion-no-padding">
              <IonButtons>
                <IonButton
                  className="round-button"
                  onClick={() => sendFragmentWithSideEffects()}
                  disabled={isButtonDisabled || !text}
                  color="primary"
                  fill="solid"
                  expand="block"
                  shape="round">
                  <IonIcon icon={caretForwardSharp} />
                </IonButton>
              </IonButtons>
            </IonCol>
          </IonRow>
        </IonGrid>
      </IonFooter>
    </IonPage>
  )
}
