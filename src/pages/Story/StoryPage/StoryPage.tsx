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
import { useApolloClient, useMutation, useQuery } from '@apollo/react-hooks'
import './StoryPage.scss'
import { caretForwardSharp } from 'ionicons/icons'

import Story from 'components/Story/Story'
import StateContainer from 'components/StateContainer/StateContainer'

import { loader } from 'graphql.macro'
import { HomeHeader } from 'components/HomeHeader/HomeHeader'
import { State } from 'assets/state'
import { scrollToBottom } from 'utils'

// Queries
const queryGetStory = loader('src/graphql/get-story.graphql')
const mutationAddFragment = loader('src/graphql/add-fragment.graphql')
const mutationLinkFragment = loader('src/graphql/link-fragment-to-story.graphql')

export const StoryPage: React.FC = () => {
  const client = useApolloClient()
  const { id } = useParams()
  // Query encargada de obtener la historia en base a su id
  const { loading, error, data } = useQuery(queryGetStory, {
    variables: { story_id: id },
    // Una vez obtenida la historia, se almacena su id en la store local para tener una referncia a la historia actual
    onCompleted: () => client.writeData({ data: { currentStory: id } }),
  })

  const [text, setText] = useState('')
  const [isButtonDisabled, setButtonDisabled] = useState(false)
  const [addFragment] = useMutation(mutationAddFragment)
  const [linkFragment] = useMutation(mutationLinkFragment)

  // Envía un nuevo fragmento usando mutaciones de GraphQl y actualiza el caché de Apollo con los cambios
  const sendFragmentWithSideEffects = async (): Promise<void> => {
    setButtonDisabled(true)

    const fragmentId = `${id}#${data!.stories_by_pk!.fragments.length + 1}`

    // eslint-disable-next-line
    try {
      await addFragment({
        variables: { object: { id: fragmentId, content: text } },
      })

      await linkFragment({
        variables: { object: { story_id: id, fragment_id: fragmentId } },
        update: function (cache, { data }) {
          const story: any = cache.readQuery({ query: queryGetStory, variables: { story_id: id } })
          const updatedStory = {
            stories_by_pk: {
              ...story.stories_by_pk,
              fragments: data.insert_stories_fragments_one.story.fragments,
            },
          }
          cache.writeQuery({ query: queryGetStory, variables: { story_id: id }, data: updatedStory })
        },
      })

      setText('')
      setButtonDisabled(false)
    } catch (e) {
      console.error('error: ', e)
    } finally {
    }
  }

  return (
    <IonPage>
      <HomeHeader />
      { loading || error || !data ? (
        <IonContent>
          <StateContainer state={error ? State.ALERT : State.LOADING} />
        </IonContent>
      ) : (
        <>
          <IonContent>
            <IonGrid>
              <Story
                title={data.stories_by_pk.title}
                fragments={data.stories_by_pk.fragments.map((fragment: any) => fragment.fragment)}
              />
            </IonGrid>
          </IonContent>
          <IonFooter>
            <IonGrid className="ion-padding">
              <IonRow className="input-container">
                <IonCol className="ion-no-padding" size="10">
                  <IonTextarea
                    value={text}
                    inputmode="text"
                    rows={1}
                    maxlength={data?.stories_by_pk?.char_limit > 0 ? data?.stories_by_pk?.char_limit : undefined}
                    autoGrow={true}
                    onIonInput={scrollToBottom}
                    className="lighter-placeholder"
                    onIonChange={({ detail }) => setText(!!detail.value ? detail.value : '')}
                    placeholder={data?.stories_by_pk?.fragments > 0 ? 'Continuar...' : 'Comenzar...'}
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
        </>
      )}
    </IonPage>
  )
}
