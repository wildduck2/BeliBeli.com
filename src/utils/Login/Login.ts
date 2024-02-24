import { supabase } from '../../supabase/supabase'
import { Dispatch } from 'react'
import { toast } from 'sonner'
import {
  RouteHandlerTypes,
  loginWithEmailHandlerTypes,
  signupWithEmailHandlerTypes
} from './index.types'

export const loginWithGoogleHandler = async () => {
  await supabase.auth.signInWithOAuth({
    provider: 'google'
  })
}

export const loginWithDiscordHandler = async () =>
  await supabase.auth.signInWithOAuth({
    provider: 'discord'
  })

export const signupWithEmailHandler = async ({
  email,
  fullName,
  password
}: signupWithEmailHandlerTypes) =>
  await supabase.auth.signUp({
    email: email,
    password: password
  })

export const loginWithEmailHandler = async ({
  email,
  password
}: loginWithEmailHandlerTypes) => {
  await supabase.auth.signInWithPassword({
    email: email,
    password: password
  })
  toast.success('Logged in successfully')
}

export const routeHandler = ({ signUp, router }: RouteHandlerTypes) =>
  router(`${signUp ? '/login' : '/signup'}`)

export const logoutHandler = async ({
  setUser
}: {
  setUser: Dispatch<React.SetStateAction<boolean>>
}) => {
  await supabase.auth.signOut()
  setUser(false)
}
