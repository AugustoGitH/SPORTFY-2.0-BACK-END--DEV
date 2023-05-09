import { Request, Response } from "express"
import decodedJWT from "../functions/decodedJWT"
import { TypeProductSubmitUser } from "../../database/types/Product"
import createProductNewProduct from "../../database/functions/createNewProduct"
import Product from "../../database/models/Product"
import refactoringProduct from "../../database/functions/refactoring/product"

export const addProduct = (req: Request, res: Response) => {
  const tokenDecodedAuth = decodedJWT({
    tokenAuth: req.cookies[process.env?.TOKEN_AUTHORIZATION || ""],
    tokenSecret: process.env?.TOKEN_SECRET || "",
  })

  if (!tokenDecodedAuth) {
    return res.send(401).send({
      message:
        "Ocorreu um erro ao resgatar dados pessoais do usuario. Verifique o erro no console!",
    })
  }

  const userSubmittedProduct: TypeProductSubmitUser = req.body

  try {
    createProductNewProduct({
      ...userSubmittedProduct,
      addedBy: {
        email: tokenDecodedAuth.email,
        id: tokenDecodedAuth.id,
      },
    })
    res
      .status(200)
      .send({ message: "Produto adicionado no banco de dados com sucesso!" })
  } catch (error) {
    console.log(error)
    res.status(500).send({
      message:
        "Ocorreu um erro ao adicionar o produto no banco de dados! Verifique o console.",
    })
  }
}

export const getProducts = async (req: Request, res: Response) => {
  try {
    const products = await Product.find({})
    const productsRefactoring = products.map((product) =>
      refactoringProduct(product).admin()
    )

    res.status(200).send({
      message: "Produtos resgatados com sucesso!",
      data: { products: productsRefactoring },
    })
  } catch (error) {
    console.log(error)

    res.status(200).send({
      message: "Ocorreu um erro ao resgatar os produtos! Consulte o console.",
    })
  }
}
