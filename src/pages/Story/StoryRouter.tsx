import React from 'react'
import { useParams } from 'react-router'
import { StoryPage } from './StoryPage/StoryPage'
import { PrivateStoryPage } from 'pages/Story/PrivateStoryPage/PrivateStoryPage'

export const StoryRouter: React.FC = () => {
  const { id } = useParams()

  // Distingue las historias públicas de las privadas y las envía a su página correspondiente
  return id.startsWith('!') ? <PrivateStoryPage /> : <StoryPage />
}
