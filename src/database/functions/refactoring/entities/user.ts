import { Document } from "mongoose"

import { TypeUser } from "../../types/User"
import { TypeUserRefactoringPersonalDate } from "./types"

const refactoringUser = (user: TypeUser & Document) => ({
  personalData: (): TypeUserRefactoringPersonalDate => ({
    cpf: user.cpf,
    dateOfBirth: user.dateOfBirth,
    email: user.email,
    fullName: `${user.name} ${user.surname}`,
  }),
})

export default refactoringUser
