import React, { useState } from 'react'
import './MenuButton.scss'

import { IonButton } from '@ionic/react'
import { isParentButton, MenuButtonProps, NavigationButton } from './MenuButton.types'

// Menu de navegación personalizado que puede contener hijos desplegables

export const MenuButton: React.FC<MenuButtonProps> = ({ button }) => {
  const [isParentCollapsed, setParentCollapsed] = useState(true)
  const getChildClass = (isParentCollapsed: boolean, isFirstChild: boolean, isLastChild: boolean): string => {
    return isParentCollapsed
      ? 'ion-hide'
      : `${isFirstChild ? 'first-child-expanded' : ''} ${isLastChild ? 'last-child-expanded' : ''}`
  }

  const renderNavigationButton = (
    button: NavigationButton,
    isChild = false,
    isFirstChild = false,
    isLastChild = false
  ): any => (
    <IonButton
      key={button.title}
      className={isChild ? getChildClass(isParentCollapsed, isFirstChild, isLastChild) : ''}
      fill="solid"
      color={button.color}
      expand="full"
      routerLink={button.path}
      routerDirection="none">
      {button.title}
    </IonButton>
  )

  return isParentButton(button) ? (
    <>
      <IonButton
        className="menu-button"
        fill="solid"
        color={button.color}
        expand="full"
        onClick={() => setParentCollapsed(!isParentCollapsed)}>
        {button.title}
      </IonButton>
      {button.children.map((child, i) => renderNavigationButton(child, true, i === 0, i === button.children.length - 1))}
    </>
  ) : (
    renderNavigationButton(button)
  )
}
