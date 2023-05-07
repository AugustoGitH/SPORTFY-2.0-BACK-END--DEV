import { model, Schema, Document } from "mongoose"
import { TypeAdmin } from "../types/Admin"

const adminSchema = new Schema({
  name: { type: String, required: true },
  surname: { type: String, required: true },
  password: { type: String, required: true },
  email: { type: String, required: true },
  dateOfBirth: { type: String, require: true },
  cpf: { type: String, require: true },
  telephone: { type: String, require: true },
})

export default model<TypeAdmin & Document>("Admin", adminSchema)
