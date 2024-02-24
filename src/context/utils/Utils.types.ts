import { review } from '..'

export interface InitStateTypes {
  mobileMenuActive: boolean
  inputsValid: Record<string, boolean>
  emailisnotvalid: boolean

  userReveiws: review[]
}
