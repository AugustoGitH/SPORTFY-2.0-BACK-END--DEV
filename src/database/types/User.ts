export type TypeAddressesUser = {
  cep: string
  typeOfAddress: string
  nameOfAddress: string
  number: number
  complement: string
  neighborhood: string
  state: string
  city: string
  referencePoint: string
}

export type TypePreferencesUser = {
  favoriteSports: string[]
  clothesSize: object // --MUDAR
  shoeSize: object // --MUDAR
}

export type TypeNotifications = {
  orderSMS: boolean
  orderWhatsapp: boolean
  offersWhatsapp: boolean
}

export type TypeUser = {
  name: string
  surname: string
  password: string
  email: string
  dateOfBirth: string
  cpf: string
  telephone: string
  savedCards: string[] // --MUDAR
  addresses: TypeAddressesUser
  preferences: TypePreferencesUser
  notifications: TypeNotifications
  orders: string[] // --MUDAR
}
