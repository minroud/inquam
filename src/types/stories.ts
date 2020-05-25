export type Story = {
  id: string
  title: string
  description: string
  charLimit?: string
}

export const emptyStory = {
  id: "",
  title: "",
  description: ""
}
