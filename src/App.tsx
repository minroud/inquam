import React from 'react'
import { Redirect, Route } from 'react-router-dom'
import { IonApp, IonRouterOutlet } from '@ionic/react'
import { IonReactRouter } from '@ionic/react-router'

import HomePage from './pages/Home/HomePage'
/* Core CSS required for Ionic components to work properly */
import '@ionic/react/css/core.css'
/* Basic CSS for apps built with Ionic */
import '@ionic/react/css/normalize.css'
import '@ionic/react/css/structure.css'
import '@ionic/react/css/typography.css'
/* Optional CSS utils that can be commented out */
import '@ionic/react/css/padding.css'
import '@ionic/react/css/float-elements.css'
import '@ionic/react/css/text-alignment.css'
import '@ionic/react/css/text-transformation.css'
import '@ionic/react/css/flex-utils.css'
import '@ionic/react/css/display.css'
/* Global Styles */
import './theme/global.scss'

import ApolloClient from 'apollo-boost'
import { ApolloProvider } from '@apollo/react-hooks'
import { CreateStoryPage } from 'pages/CreateStory/CreateStoryPage'
import { CreatePrivateStoryPage } from './pages/CreatePrivateStory/CreatePrivateStoryPage'
import { MenuPage } from 'pages/Menu/MenuPage'
import { StoryRouter } from './pages/Story/StoryRouter'
import { NewPrivateStoryPage } from 'pages/NewPrivateStory/NewPrivateStoryPage'
import { SearchPage } from 'pages/Search/SearchPage'
import { LibraryPage } from 'pages/Library/LibraryPage'
import { HelpPage } from 'pages/Help/HelpPage'

const client = new ApolloClient({
  uri: 'https://inquam-alpha.herokuapp.com/v1/graphql',
})

client.writeData({ data: { currentStory: '' } })

// Declaración de rutas de navegación y proveedores de datos de la app

const App: React.FC = () => (
  <ApolloProvider client={client}>
    <IonApp>
      <IonReactRouter>
        <IonRouterOutlet id="main">
          <Route exact path="/home" component={HomePage} />
          <Route exact path="/menu" component={MenuPage} />
          <Route exact path="/search" component={SearchPage} />
          <Route exact path="/library" component={LibraryPage} />
          <Route exact path="/help" component={HelpPage} />
          <Route exact path="/new-story" component={CreateStoryPage} />
          <Route exact path="/new-private-story" component={CreatePrivateStoryPage} />
          <Route exact path="/new-private-story/:id" component={NewPrivateStoryPage} />
          <Route exact path="/story/:id" component={StoryRouter} />
          <Redirect exact from="/" to="/home" />
        </IonRouterOutlet>
      </IonReactRouter>
    </IonApp>
  </ApolloProvider>
)

export default App
