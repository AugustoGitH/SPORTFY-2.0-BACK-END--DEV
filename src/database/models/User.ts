import { Document, Schema, model } from "mongoose"
import { TypeUser } from "../types/User"

const userSchema = new Schema({
  name: { type: String, required: true },
  surname: { type: String, required: true },
  password: { type: String, required: true },
  email: { type: String, required: true },
  dateOfBirth: { type: String, require: true },
  cpf: { type: String, require: true },
  telephone: { type: String, require: true },
  savedCards: { type: Array, default: [] },
  addresses: {
    type: Array,
    required: true,
    default: [
      {
        cep: { type: String, require: true },
        typeOfAddress: { type: String, require: true },
        nameOfStreet: { type: String, require: true },
        number: { type: Number, require: true },
        complement: { type: String, require: false },
        neighborhood: { type: String, require: true },
        state: { type: String, require: true },
        city: { type: String, require: true },
        referencePoint: { type: String, require: false },
      },
    ],
  },
  preferences: {
    type: Object,
    default: {
      favoriteSports: { type: Array, default: [] },
      clothesSize: { type: Object, default: {} },
      shoeSize: { type: Object, default: {} },
    },
  },
  notifications: {
    type: Object,
    default: {
      orderSMS: { type: Boolean, default: false },
      orderWhatsapp: { type: Boolean, default: false },
      offersWhatsapp: { type: Boolean, default: false },
    },
  },
  orders: { type: Array, default: [] },
})

export default model<TypeUser & Document>("User", userSchema)
