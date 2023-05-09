import { Request, Response } from "express"

import refactoringUser from "../../database/functions/refactoring/entities/user"
import User from "../../database/models/User"
import decodedJWT from "../functions/decodedJWT"

export const getInfosPersonal = async (req: Request, res: Response) => {
  const JSONDecodedAuth = decodedJWT({
    tokenAuth: req.cookies?.TOKEN_AUTHORIZATION || "",
    tokenSecret: process.env?.TOKEN_SECRET || "",
  })
  if (!JSONDecodedAuth) {
    return res.status(401).send({
      message: "Credenciais inválidas",
    })
  }
  try {
    const user = await User.findById(JSONDecodedAuth.id)
    if (!user) {
      return res.status(404).send({
        message: "Usuario não encontrado!",
      })
    }
    res.status(200).send({
      message: "Dados pessoais resgatados com sucesso!",
      data: {
        personal: refactoringUser(user).personalData(),
      },
    })
  } catch (error) {
    console.log(error)
    res.send(401).send({
      message:
        "Ocorreu um erro ao resgatar dados pessoais do usuario. Verifique o erro no console!",
    })
  }
}

export const getInfosAddress = async (req: Request, res: Response) => {
  const JSONDecodedAuth = decodedJWT({
    tokenAuth: req.cookies?.TOKEN_AUTHORIZATION || "",
    tokenSecret: process.env?.TOKEN_SECRET || "",
  })
  if (!JSONDecodedAuth) {
    return res.status(401).send({
      message: "Credenciais inválidas",
    })
  }
  try {
    const user = await User.findById(JSONDecodedAuth.id)
    if (!user) {
      return res.status(404).send({
        message: "Usuario não encontrado!",
      })
    }
    res.status(200).send({
      message: "Dados dos endereços resgatados com sucesso!",
      data: {
        addresses: user.addresses,
      },
    })
  } catch (error) {
    console.log(error)
    res.send(401).send({
      message:
        "Ocorreu um erro ao resgatar dados sobre endereços do usuario. Verifique o erro no console!",
    })
  }
}
