import { Document } from "mongoose"

import { TypeProduct } from "../../../types/Product"
import {
  TypeProductRefactoringAdmin,
  TypeProductRefactoringUserComplete,
  TypeProductRefactoringUserPrev,
} from "../types"

const refactoringProduct = (product: TypeProduct & Document) => ({
  admin: (): TypeProductRefactoringAdmin => ({
    cover: product.cover,
    title: product.title,
    description: product.description,
    views: product.views,
    likes: product.likes,
    addedBy: product.addedBy,
    avaliation: product.avaliation,
    id: product._id,
  }),
  user: {
    previous: (): TypeProductRefactoringUserPrev => ({
      cover: product.cover,
      articleType: product.articleType,
      avaliation: product.avaliation,
      freight: product.freight,
      installments: product.installments,
      previousValue: product.previousValue,
      title: product.title,
      value: product.value,
      id: product._id,
    }),
    complete: (): TypeProductRefactoringUserComplete => ({
      cover: product.cover,
      articleType: product.articleType,
      avaliation: product.avaliation,
      freight: product.freight,
      installments: product.installments,
      previousValue: product.previousValue,
      title: product.title,
      value: product.value,
      id: product._id,
      description: product.description,
      images: product.images,
      options: product.options,
      specifications: product.specifications,
      tags: product.tags,
    }),
  },
})

export default refactoringProduct
