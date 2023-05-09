import { Document } from "mongoose"

import { TypeAddressesUser, TypeUser } from "../../../types/User"
import { TypeUserRefactoringPersonalDate } from "../types"

const refactoringUser = (user: TypeUser & Document) => ({
  personalData: (): TypeUserRefactoringPersonalDate => ({
    cpf: user.cpf,
    dateOfBirth: user.dateOfBirth,
    email: user.email,
    fullName: `${user.name} ${user.surname}`,
    notifications: user.notifications,
    telephone: user.telephone,
  }),
})

export default refactoringUser
