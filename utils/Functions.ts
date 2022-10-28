
import countries from '../constants/country.json'

export const ValidateEmail = (email: any) => {
  const regx = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
  return regx.test(String(email).toLowerCase())
}

export const SanitizeEmail = (email: string): string => {
  return email.trim().toLowerCase()
}

export const simpleKeyGenerator = (lenght = 5): string => {
  let text = ''
  const possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'

  for (let i = 0; i < lenght; i += 1) text += possible.charAt(Math.floor(Math.random() * possible.length))

  return text
}

export const GetCountryName = (code: string): string => {
  const country = countries.find((item) => {
    return item.value === code
  })

  return country?.name || ''
}

