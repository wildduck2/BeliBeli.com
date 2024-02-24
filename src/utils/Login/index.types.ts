import { NavigateFunction } from 'react-router-dom'

export interface RouteHandlerTypes {
  signUp: boolean
  router: NavigateFunction
}

export interface loginWithEmailHandlerTypes {
  email: string
  password: string
}

export interface signupWithEmailHandlerTypes
  extends loginWithEmailHandlerTypes {
  fullName: string
}
