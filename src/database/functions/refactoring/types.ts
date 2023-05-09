import { TypeProduct } from "../../types/Product"
import { TypeUser } from "../../types/User"

export type TypeProductRefactoringAdmin = Omit<
  TypeProduct,
  | "articleType"
  | "freight"
  | "previousValue"
  | "value"
  | "installments"
  | "images"
  | "tags"
  | "stock"
  | "options"
  | "specifications"
> & {
  id: string
}

export type TypeProductRefactoringUserPrev = Omit<
  TypeProduct,
  | "images"
  | "tags"
  | "stock"
  | "options"
  | "specifications"
  | "likes"
  | "views"
  | "addedBy"
  | "description"
> & {
  id: string
}

export type TypeProductRefactoringUserComplete = Omit<
  TypeProduct,
  "stock" | "likes" | "views" | "addedBy"
> & {
  id: string
}

export type TypeUserRefactoringPersonalDate = {
  fullName: string
  dateOfBirth: string
  cpf: string
  telephone: string
  email: string
  notifications: string
}
