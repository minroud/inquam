export type NavigationButton = {
  readonly title: string
  readonly color: string
  readonly path: string
}

export type ParentButton = NavigationButton & {
  readonly children: readonly NavigationButton[]
}

export type MenuButton = NavigationButton | ParentButton

export const isParentButton = (button: MenuButton): button is ParentButton =>
  !!(button as ParentButton).children && !!(button as ParentButton).children.length

export type MenuButtonProps = {
  readonly button: MenuButton
}
