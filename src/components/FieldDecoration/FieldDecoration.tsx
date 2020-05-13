import React from 'react'
import './FieldDecoration.scss'

type FieldDecorationProps = {
  readonly title?: string
}

export const FieldDecoration: React.FC<FieldDecorationProps> = ({ children, title }) => (
  <fieldset className="frame-decoration">
    {!!title && <legend className="section-title">{title}</legend>}
    {children}
  </fieldset>
)
