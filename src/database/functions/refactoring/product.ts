import { TypeProduct } from "../../types/Product"
import { TypeProductRefactoringUser } from "./types"

const refactoringProduct = (product: TypeProduct) => ({
  admin: (): TypeProductRefactoringUser => ({
    cover: product.cover,
    title: product.title,
    description: product.description,
    views: product.views,
    likes: product.likes,
    addedBy: product.addedBy,
    avaliation: product.avaliation,
  }),
})

export default refactoringProduct
