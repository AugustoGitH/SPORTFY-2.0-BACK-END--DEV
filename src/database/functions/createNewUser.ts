import bcrypt from "bcryptjs"

import User from "../models/User"
import { TypeUserSubmitRegister } from "../types/User"

const createNewUser = async (userSubmitRegister: TypeUserSubmitRegister) => {
  const newUser = new User({
    ...userSubmitRegister,
    password: bcrypt.hashSync(userSubmitRegister.password),
  })
  try {
    await newUser.save()
  } catch (error) {
    throw new Error(
      "Ocorreu um erro interno no servidor ao registrar novo usuario!"
    )
  }
}

export default createNewUser
