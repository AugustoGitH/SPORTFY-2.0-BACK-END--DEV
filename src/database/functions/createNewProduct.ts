import Product from "../models/Product"
import { TypeProductCreated } from "../types/Product"

const createProductNewProduct = async (product: TypeProductCreated) => {
  const newProduct = new Product(product)
  try {
    await newProduct.save()
  } catch (error) {
    throw new Error(
      "Ocorreu um erro interno no servidor ao criar um novo produto"
    )
  }
}

export default createProductNewProduct
