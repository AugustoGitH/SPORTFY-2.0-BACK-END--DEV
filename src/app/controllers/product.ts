import { Request, Response } from "express"

import refactoringProduct from "../../database/functions/refactoring/entities/product"
import Product from "../../database/models/Product"
import decodedJWT from "../functions/decodedJWT"

export const getProduct = async (req: Request, res: Response) => {
  const { id: idProduct } = req.params
  try {
    const product = await Product.findById(idProduct)
    if (!product) {
      return res.status(404).send({
        message: "Produto não foi encontrado em nosso banco de dados!",
      })
    }
    res
      .status(200)
      .status(200)
      .send({
        massage: "Produto resgatado com sucesso!",
        data: {
          product: refactoringProduct(product).user.complete(),
        },
      })
  } catch (error) {
    console.log(error)
    res.status(500).send({
      message:
        "Ocorreu um erro interno no servidor ao buscar produto! Procure o desenvolvedor.",
    })
  }
}

export const getProducts = async (req: Request, res: Response) => {
  try {
    const products = await Product.find({})
    res.status(200).send({
      message: "Produtos resgatados com sucesso",
      data: {
        products: products.map((product) =>
          refactoringProduct(product).user.previous()
        ),
      },
    })
  } catch (error) {
    console.log(error)
    res.status(500).send({
      message: "Ocorreu um erro ao resgatar produtos! Procure o desenvolvedor.",
    })
  }
}

export const viewProduct = async (req: Request, res: Response) => {
  const { id: idProduct } = req.params
  try {
    const statusInUpdate = await Product.findByIdAndUpdate(idProduct, {
      $inc: { views: 1 },
    })
    if (!statusInUpdate)
      return res.status(401).send({ message: "Produto não foi encontrado!" })

    return res
      .status(200)
      .send({ message: "A ação de visualizar o produto foi realizada!" })
  } catch (error) {
    console.log(error)
    return res.status(500).send({
      message:
        "A ação de visualizar o produto não foi realizada! Consulte o console.",
    })
  }
}

export const likeProduct = async (req: Request, res: Response) => {
  const { id: idProduct } = req.params

  const JSONDecoded = decodedJWT({
    tokenAuth: req.cookies.TOKEN_AUTHORIZATION || "",
    tokenSecret: process.env.TOKEN_SECRET || "",
  })

  if (!JSONDecoded) {
    return res.status(404).send({
      message: "Ocorreu um erro ao buscar as suas credenciais!",
    })
  }
  try {
    const statusInUpdate = await Product.findByIdAndUpdate(idProduct, {
      $push: { likes: { idUser: JSONDecoded.id, data: new Date() } },
    })
    if (!statusInUpdate)
      return res.status(401).send({ message: "Produto não foi encontrado!" })
    return res.status(200).send({
      message: "A ação de favoritar o produto foi realizada!",
    })
  } catch (error) {
    console.log(error)
    return res.status(500).send({
      message:
        "A ação de favoritar o produto não foi realizada! Consulte o console.",
    })
  }
}
