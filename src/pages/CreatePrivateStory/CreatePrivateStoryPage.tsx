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
import './CreatePrivateStoryPage.scss'
import { FieldDecoration } from 'components/FieldDecoration/FieldDecoration'
import { useMutation } from '@apollo/react-hooks'
import { loader } from 'graphql.macro'
import ShortUniqueId from 'short-unique-id'
import { PasswordInput } from 'components/PasswordInput/PasswordInput'
import { NavigationHeader } from 'components/NavigationHeader/NavigationHeader'
import { generateHash, generateSalt, isInt, packHashedPass } from 'utils'
import { useHistory } from 'react-router'
import { Story } from 'types/stories'
import { Plugins } from '@capacitor/core'
import { AddPrivateStoryMutation } from 'types/__generated__/graphql'

const { Storage } = Plugins

const mutationAddPrivateStory = loader('src/graphql/add-private-story.graphql')

export const CreatePrivateStoryPage: React.FC = () => {
  const history = useHistory()

  const [title, setTitle] = useState('')
  const [isDescriptionEnabled, setDescriptionEnabled] = useState(false)
  const [description, setDescription] = useState('')
  const [charLimit, setCharLimit] = useState('')
  const [isCharLimitEnabled, setCharLimitEnabled] = useState(false)
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const [isValidPassword, setIsValidPassword] = useState(false)
  const [isProcessingRequest, setProcessingRequest] = useState(false)

  const [addPrivateStory] = useMutation<AddPrivateStoryMutation>(mutationAddPrivateStory)

  const isButtonDisabled = (): boolean =>
    isProcessingRequest ||
    !title ||
    (isDescriptionEnabled && !description) ||
    (isCharLimitEnabled && !charLimit) ||
    !isValidPassword

  const validatePassword = (password: string, confirmPassword: string): readonly [string, string] => {
    setIsValidPassword(!!password && password === confirmPassword)
    return [password, confirmPassword]
  }

  const createPrivateStoryWithSideEffects = (): void => {
    setProcessingRequest(true)
    // Para crear una historia privada, se genera una sal y se codifica la contraseña con el algoritmo pbkdf2
    const salt = generateSalt()
    const callback = (err: Error | null, result: Buffer): any => {
      const hashedPass = packHashedPass(result, salt)
      const storyCharLimit = isCharLimitEnabled && isInt(charLimit) ? parseInt(charLimit) : 0
      const storyDescription = isDescriptionEnabled ? description : ''
      const storyId = `!${new ShortUniqueId().randomUUID(6)}`

      addPrivateStory({
        variables: {
          object: {
            id: storyId,
            title: title,
            description: storyDescription,
            hash: hashedPass,
            salt: salt,
            char_limit: storyCharLimit,
          },
        },
      })
        .then((result: any) => {
          resetState()
          storeInLibrary(
            result.data.insert_private_stories_one?.id,
            result.data.insert_private_stories_one?.title,
            result.data.insert_private_stories_one?.description
          )
          history.push(`/new-private-story/${result.data.insert_private_stories_one.id}`)
        })
        .catch((e) => console.error('error: ', e))
        .finally(() => setProcessingRequest(false))
    }

    generateHash(password, salt, callback)
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
    setDescriptionEnabled(false)
    setDescription('')
    setCharLimit('')
    setCharLimitEnabled(false)
    setPassword('')
    setConfirmPassword('')
    setIsValidPassword(false)
    setProcessingRequest(false)
  }

  return (
    <IonPage>
      <NavigationHeader title="CREAR HISTORIA PRIVADA" />
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
              <IonItem lines="none">
                <label htmlFor="toggleDescription" className="section-title">
                  Añadir descripción
                </label>
                <IonToggle name="toggleDescription" onIonChange={() => setDescriptionEnabled(!isDescriptionEnabled)} />
              </IonItem>
            </IonCol>
          </IonRow>
          <IonRow className={isDescriptionEnabled ? '' : 'ion-hide'}>
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
          <IonRow>
            <IonCol>
              <IonItem lines="none">
                <label htmlFor="toggleCharLimit" className="section-title">
                  Limitar Caracteres
                </label>
                <IonToggle name="toggleCharLimit" onIonChange={() => setCharLimitEnabled(!isCharLimitEnabled)} />
              </IonItem>
            </IonCol>
          </IonRow>
          <IonRow className={isCharLimitEnabled ? '' : 'ion-hide'}>
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
          <IonRow>
            <IonCol>
              <PasswordInput
                onIonChange={(password: string) => setPassword(validatePassword(password, confirmPassword)[0])}
                label="Contraseña"
              />
            </IonCol>
          </IonRow>
          <IonRow className="last-row">
            <IonCol>
              <PasswordInput
                onIonChange={(confirmPassword: string) =>
                  setConfirmPassword(validatePassword(password, confirmPassword)[1])
                }
                label="Repetir contraseña"
              />
              <span className={!!password && !!confirmPassword && !isValidPassword ? 'input-error' : 'ion-hide'}>
                ¡Las contraseñas no coinciden!
              </span>
            </IonCol>
          </IonRow>
          <IonRow className="button-row">
            <IonCol>
              <IonButton
                onClick={() => createPrivateStoryWithSideEffects()}
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
