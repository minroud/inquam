// Archivo de utilidades comunes empleadas en distintos puntos de la app

import { pbkdf2Callback } from 'types/pbkdf2'
import { emptyStory, Story } from "types/stories"

const crypto = require('crypto')
const pbkdf2 = require('pbkdf2')

//generics
export const scrollToBottom = (): void => {
  const content = document.querySelector('ion-content')
  !!content && content.scrollToBottom()
}

export const isInt = (candidate: string): boolean => /^\d+$/.test(candidate)

export const isEmptyStory = (candidate: Story): boolean => JSON.stringify(candidate) === JSON.stringify(emptyStory)

export const getRandomIndex = (length: number): number => Math.round(Math.random() * length)

//crypto
export const generateSalt = (): string => crypto.randomBytes(64).toString('base64')

export const generateHash = (pass: string, salt: string, callback: pbkdf2Callback): void =>
  pbkdf2.pbkdf2(pass, salt, 1, 64, 'sha512', callback)

export const packHashedPass = (bufferedKey: Buffer, salt: string): string =>
  `${ bufferedKey.toString('hex').slice(0, 40) }${ salt }${ bufferedKey.toString('hex').slice(40) }`

export const unpackHashedPass = (hashedPass: string): readonly [ string, string ] => [
  `${ hashedPass.slice(0, 40) }${ hashedPass.slice(128) }`,
  hashedPass.slice(40, 128),
]
