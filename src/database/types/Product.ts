export type TypeOptionsProduct = {
  shoeSizes: string[] // -- MUDAR
  clothingSizes: string[] // -- MUDAR
  colors: string[] // -- MUDAR
}

export type TypeSpecificationsProduct = {
  gender: string
  composition: string | null
  sewing: string | null
  obs: string | null
  guarantee: string | null
  origin: string | null
  indicatesTo: string
  name: string
  brand: string
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
  addedBy: object // -- MUDAR
  stock: number
  views: number
  likes: string[] // -- MUDAR
  tags: string[]
  options: TypeOptionsProduct
  specifications: TypeSpecificationsProduct
}
