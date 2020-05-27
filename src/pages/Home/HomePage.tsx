import { IonContent, IonPage } from '@ionic/react'
import React from 'react'
import StateContainer from 'components/StateContainer/StateContainer'
import './HomePage.scss'
import { loader } from 'graphql.macro'
import { useLazyQuery, useQuery } from '@apollo/react-hooks'
import { useHistory } from 'react-router'
import { HomeHeader } from 'components/HomeHeader/HomeHeader'
import { GetRefQuery } from 'types/__generated__/graphql'
import { State } from 'assets/state'
import { getRandomIndex } from 'utils'
// Queries
const getRefs = loader('src/graphql/get-refs.graphql')
const getCurrentStory = loader('src/graphql/get-current-story.graphql')

const HomePage: React.FC = () => {
  const history = useHistory()
  // La página inicial se encarga de recuperar la historia actual de la caché, o de generar un id random para cargar una nueva historia
  const [lazilyGetRefs, { error }] = useLazyQuery<GetRefQuery>(getRefs, {
    onCompleted: ({ stories }) => go2Story(stories[getRandomIndex(stories.length)].id),
  })

  useQuery(getCurrentStory, {
    onCompleted: (data) => (!!data.currentStory ? go2Story(data.currentStory) : lazilyGetRefs()),
  })

  const go2Story = (id: string): void => history.replace(`/story/${ id }`)

  return (
    <IonPage>
      <HomeHeader/>
      <IonContent>
        <StateContainer state={ error ? State.ALERT : State.LOADING }/>
      </IonContent>
    </IonPage>
  )
}

export default HomePage
