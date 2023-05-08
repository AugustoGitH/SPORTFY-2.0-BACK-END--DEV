export type TypeOptionsProduct = {
  shoeSizes: string[] // -- MUDAR
  clothingSizes: string[] // -- MUDAR
  colors: string[] // -- MUDAR
}

export type TypeSpecificationsProduct = {
  gender: string
  composition: string
  sewing: string
  obs: string
  guarantee: string
  origin: string
  indicatesTo: string
  name: string
  brand: string
}

export type TypeAddedByProduct = {
  email: string
  id: string
}

export type TypeProduct = {
  cover: string
  title: string
  articleType: string
  freight: string
  previousValue: number
  value: number
  installments: string
  description: string
  images: string[]
  avaliation: string[] // -- MUDAR
  addedBy: TypeAddedByProduct
  stock: number
  views: number
  likes: string[] // -- MUDAR
  tags: string[]
  options: TypeOptionsProduct
  specifications: TypeSpecificationsProduct
}

export type TypeProductSubmitUser = Omit<
  TypeProduct,
  "views" | "likes" | "avaliation" | "addedBy"
>

export type TypeProductCreated = Omit<
  TypeProduct,
  "views" | "likes" | "avaliation"
>
