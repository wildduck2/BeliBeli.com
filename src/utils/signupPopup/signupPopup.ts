import { toast } from 'sonner'
import { SignupPopupProps } from './signupPopup.types'
import { supabase } from '@/supabase'

const signupPopup = async ({
  url,
  provider
}: SignupPopupProps): Promise<boolean> => {
  const promise = new Promise((resolve, reject) => {
    const width = 600
    const height = 600
    const left = (screen.width - width) / 2
    const top = (screen.height - height) / 2
    const popupWindow: Window | null = window.open(
      url,
      '_blank',
      `width=${width},height=${height}, left=${left}, top=${top}`
    )

    const checkPopup = setInterval(() => {
      try {
        if (!popupWindow || popupWindow.closed) {
          clearInterval(checkPopup)
          reject(new Error('Popup window is closed'))
        }

        const popupLocation = popupWindow?.location

        if (popupLocation?.href.includes('access_token')) {
          console.log('this is not working')

          popupWindow?.close()
          clearInterval(checkPopup)
          resolve(true)
        } else if (popupLocation?.href.includes('error')) {
          console.error('Authentication error')
          popupWindow?.close()
          clearInterval(checkPopup)
          resolve(false)
        }
      } catch (error) {
        console.error(error)
      }
    }, 100)
  })

  toast.promise(promise, {
    loading: `Waiting for ${provider.toUpperCase()} login...`,
    success: 'Access granted, authentication successful.',
    error: "Credentials didn't pass authentication check."
  })

  return promise as Promise<boolean>
}

export { signupPopup }

//
// http://localhost:5173/#access_token=eyJhbGciOiJIUzI1NiIsImtpZCI6IlBNMWhsVUwyQmNKSHF1Y0EiLCJ0eXAiOiJKV1QifQ.eyJhdWQiOiJhdXRoZW50aWNhdGVkIiwiZXhwIjoxNzA5NDg3OTI5LCJpYXQiOjE3MDk0ODQzMjksImlzcyI6Imh0dHBzOi8venBncWhvZ29ldmJncHh1c3R2bW8uc3VwYWJhc2UuY28vYXV0aC92MSIsInN1YiI6ImIxYTU2Nzc5LWEyNWYtNDcwZi05N2Q2LTIwODE4ODBiZDIyYiIsImVtYWlsIjoid2V6b25hc2VyNTBAZ21haWwuY29tIiwicGhvbmUiOiIiLCJhcHBfbWV0YWRhdGEiOnsicHJvdmlkZXIiOiJnb29nbGUiLCJwcm92aWRlcnMiOlsiZ29vZ2xlIl19LCJ1c2VyX21ldGFkYXRhIjp7ImF2YXRhcl91cmwiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLUElsOW5oSktYYTRCbXN4UHZldW80Rld4ME8zYW5aclB5RS1LOFZ0ZElSUk09czk2LWMiLCJlbWFpbCI6Indlem9uYXNlcjUwQGdtYWlsLmNvbSIsImVtYWlsX3ZlcmlmaWVkIjp0cnVlLCJmdWxsX25hbWUiOiJBaG1lZCBheW9iIEFiZG8iLCJpc3MiOiJodHRwczovL2FjY291bnRzLmdvb2dsZS5jb20iLCJuYW1lIjoiQWhtZWQgYXlvYiBBYmRvIiwicGhvbmVfdmVyaWZpZWQiOmZhbHNlLCJwaWN0dXJlIjoiaHR0cHM6Ly9saDMuZ29vZ2xldXNlcmNvbnRlbnQuY29tL2EvQUNnOG9jS1BJbDluaEpLWGE0Qm1zeFB2ZXVvNEZXeDBPM2FuWnJQeUUtSzhWdGRJUlJNPXM5Ni1jIiwicHJvdmlkZXJfaWQiOiIxMDQyNDI4MDgyMTg1MDU3NDQ1MDYiLCJzdWIiOiIxMDQyNDI4MDgyMTg1MDU3NDQ1MDYifSwicm9sZSI6ImF1dGhlbnRpY2F0ZWQiLCJhYWwiOiJhYWwxIiwiYW1yIjpbeyJtZXRob2QiOiJvYXV0aCIsInRpbWVzdGFtcCI6MTcwOTQ4NDMyOX1dLCJzZXNzaW9uX2lkIjoiYjE1OWVjYzgtZGRhNy00ZDhiLWJlYTMtOWZiNjViY2VlZTgzIn0.qzelm8k4u4j_hYhV0t7eyu8GGGZpiYVPND-csrKgIBQ&expires_at=1709487929&expires_in=3600&provider_token=ya29.a0AfB_byA3WLlff3yGb7wxbfFJ-Aakrp2ZJOc9ENYHvF2Mpaczry0o5wonLJYnL3oPyeSVGdUgHXqCcbukSop7QPHmbfdwVVan68M0RX8EY3B7ar6YaVdlRS2pwT-B_kUPj-dXVIY8GQ6U48f8m8ypg1-KQcHKkaMaTgEkaCgYKARUSARISFQHGX2MiJMuaknDVFswdRKdnV6SZBQ0171&refresh_token=pBkrjkEBII4nC2sB6ipIWQ&token_type=bearer
