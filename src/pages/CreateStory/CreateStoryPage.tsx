import React, { useState } from 'react'
import {
  IonButton,
  IonCol,
  IonContent,
  IonGrid,
  IonInput,
  IonItem,
  IonPage,
  IonRow,
  IonTextarea,
  IonToggle,
} from '@ionic/react'
import 'pages/CreateStory/CreateStoryPage.scss'
import { FieldDecoration } from 'components/FieldDecoration/FieldDecoration'
import { useMutation } from '@apollo/react-hooks'
import { loader } from 'graphql.macro'
import ShortUniqueId from 'short-unique-id'
import { NavigationHeader } from 'components/NavigationHeader/NavigationHeader'
import { useHistory } from 'react-router'
import { Story } from 'types/stories'
import { Plugins } from '@capacitor/core'
import { AddStoryMutation } from 'types/__generated__/graphql'

const { Storage } = Plugins

const mutationAddStory = loader('src/graphql/add-story.graphql')

export const CreateStoryPage: React.FC = () => {
  const history = useHistory()

  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')
  const [charLimit, setCharLimit] = useState('')
  const [isCharLimitEnabled, setCharLimitEnabled] = useState(false)
  const [isProcessingRequest, setProcessingRequest] = useState(false)

  const [addStory] = useMutation<AddStoryMutation>(mutationAddStory)

  const isInt = (candidate: string): boolean => {
    return /^\d+$/.test(candidate)
  }

  const isButtonDisabled = (): boolean =>
    isProcessingRequest || !title || !description || (isCharLimitEnabled && !charLimit)

  const createStoryWithSideEffects = (): void => {
    setProcessingRequest(true)

    const storyCharLimit = isCharLimitEnabled && isInt(charLimit) ? parseInt(charLimit) : 0
    const storyId = new ShortUniqueId().randomUUID(6)

    addStory({
      variables: { object: { id: storyId, title: title, description: description, char_limit: storyCharLimit } },
    })
      .then(({ data }) => {
        //Tras crear la nueva historia, se resetea el estado, se guarda en la biblioteca y se navega a ella
        resetState()
        storeInLibrary(
          data!.insert_stories_one!.id,
          data!.insert_stories_one!.title,
          data!.insert_stories_one!.description
        )
        history.push(`/story/${data!.insert_stories_one!.id}`)
      })
      .catch((e) => console.error('error: ', e))
      .finally(() => setProcessingRequest(false))
  }

  const storeInLibrary = async (id: string, title: string, description: string): Promise<void> => {
    const libraryString = await Storage.get({ key: 'library' })
    const library: readonly Story[] = !!libraryString.value ? JSON.parse(libraryString.value) : []
    const newLibrary = [...library, { id, title, description }]
    await Storage.set({
      key: 'library',
      value: JSON.stringify(newLibrary),
    })
  }

  const resetState = (): void => {
    setTitle('')
    setDescription('')
    setCharLimit('')
    setCharLimitEnabled(false)
    setProcessingRequest(false)
  }

  return (
    <IonPage>
      <NavigationHeader title="CREAR HISTORIA" />
      <IonContent>
        <IonGrid className="ion-no-padding">
          <IonRow>
            <IonCol>
              <FieldDecoration title="Título">
                <IonTextarea
                  name="title"
                  className="lighter-placeholder title-input"
                  value={title}
                  inputmode="text"
                  rows={1}
                  maxlength={150}
                  onIonChange={({ detail }) => setTitle(!!detail.value ? detail.value : '')}
                  placeholder="Dale un título a tu historia"
                  enterkeyhint="next"
                />
              </FieldDecoration>
            </IonCol>
          </IonRow>
          <IonRow>
            <IonCol>
              <FieldDecoration title="Descripción">
                <IonTextarea
                  name="description"
                  className="lighter-placeholder description-input"
                  value={description}
                  inputmode="text"
                  rows={4}
                  maxlength={500}
                  onIonChange={({ detail }) => setDescription(!!detail.value ? detail.value : '')}
                  placeholder="Explica en qué consiste"
                  enterkeyhint="done"
                />
              </FieldDecoration>
            </IonCol>
          </IonRow>
          <IonRow className={isCharLimitEnabled ? '' : 'last-row'}>
            <IonCol>
              <IonItem lines="none">
                <label htmlFor="toggleCharLimit" className="section-title">
                  Limitar Caracteres
                </label>
                <IonToggle name="toggleCharLimit" onIonChange={() => setCharLimitEnabled(!isCharLimitEnabled)} />
              </IonItem>
            </IonCol>
          </IonRow>
          <IonRow className={isCharLimitEnabled ? 'last-row' : 'ion-hide'}>
            <IonCol>
              <IonItem className="toggle-child" lines="none">
                <label htmlFor="charLimit">Cada contribución tendrá como máximo</label>
                {/* Controlled inputs are wonky with Ionic. You need to set the value with IonInput before controlling it on IonChange */}
                <IonInput
                  name="charLimit"
                  className="char-limit"
                  value={charLimit}
                  inputmode="numeric"
                  maxlength={4}
                  enterkeyhint="go"
                  onIonInput={(e: CustomEvent) => setCharLimit(!!e.detail.data ? charLimit + e.detail.data : charLimit)}
                  onIonChange={({ detail }) =>
                    setCharLimit(!!detail.value && detail.value !== '0' && isInt(detail.value) ? detail.value : '')
                  }
                />
                <label>caracteres</label>
              </IonItem>
            </IonCol>
          </IonRow>
          <IonRow className="button-row">
            <IonCol>
              <IonButton
                onClick={() => createStoryWithSideEffects()}
                disabled={isButtonDisabled()}
                className="menu-button"
                fill="solid"
                color="palette-1"
                expand="full">
                CREAR
              </IonButton>
            </IonCol>
          </IonRow>
        </IonGrid>
      </IonContent>
    </IonPage>
  )
}
