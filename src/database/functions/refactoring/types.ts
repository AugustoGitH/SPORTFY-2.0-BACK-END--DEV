import { TypeProduct } from "../../types/Product"

export type TypeProductRefactoringUser = Omit<
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
>
