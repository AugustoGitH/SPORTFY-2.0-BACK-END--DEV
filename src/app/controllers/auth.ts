import bcrypt from "bcryptjs"
import { Request, Response } from "express"
import jwt from "jsonwebtoken"

import createNewUser from "../../database/functions/createNewUser"
import findUserAndAdmins from "../../database/functions/findUsersAndAdmins"
import User from "../../database/models/User"
import { TypeUserSubmitRegister } from "../../database/types/User"
import { TypeDecodedTokenAuth } from "../functions/types"

export const register = async (req: Request, res: Response) => {
  const registerSubmittedUser: TypeUserSubmitRegister = req.body

  try {
    const [insideUserEmail, insideUserCPF] = await Promise.all([
      User.findOne({ email: registerSubmittedUser.email }),
      User.findOne({ email: registerSubmittedUser.cpf }),
    ])

    if (insideUserEmail || insideUserCPF) {
      const message = insideUserEmail
        ? "Seu e-mail já está registrado em nosso sistema."
        : "Seu cpf já está registrado em nosso sistema."

      return res.status(428).send({ message })
    }

    await createNewUser(registerSubmittedUser)

    res.status(201).send({
      message: `Usuario {${registerSubmittedUser.email}} foi registrado em nosso sistema!`,
    })
  } catch (error) {
    console.log(error)
    res.status(500).send({
      message: `Ocorreu um erro interno na tentativa de registrar o usuario. Contate o console!`,
    })
  }
}

export const verifyEmail = async (req: Request, res: Response) => {
  const { email } = req.params
  try {
    const { entitiesFound } = await findUserAndAdmins({ email })
    if (entitiesFound.admin || entitiesFound.user) {
      return res.status(226).send({
        message: "Este email já está registrado em nosso sistema!",
      })
    }
    res
      .status(226)
      .send({ message: "Este email não está registrado em nosso sistema!" })
  } catch (error) {
    console.log(error)
    console.log(error)
    res.status(500).send({
      message: `Ocorreu um erro interno na tentativa de verificar email. Contate o console!`,
    })
  }
}

type TypeLogin = {
  email: string
  password: string
}

export const login = async (req: Request, res: Response) => {
  const { email, password }: TypeLogin = req.body

  const { entitiesFound, isAdmin } = await findUserAndAdmins({ email })

  if (!entitiesFound.admin && !entitiesFound.user) {
    return res.status(401).send({ message: "Email ou senha incorretos!" })
  }

  const passAndUserMatch = bcrypt.compareSync(
    password,
    entitiesFound.admin?.password || entitiesFound.user?.password || ""
  )
  if (!passAndUserMatch) {
    return res.status(401).send({ message: "Email ou senha incorretos!" })
  }

  const JSONDecoded: TypeDecodedTokenAuth = {
    email: entitiesFound.user?.email || entitiesFound.admin?.email || "",
    id: entitiesFound.user?._id || entitiesFound.admin?._id || "",
    name: entitiesFound.user?.name || entitiesFound.admin?.name || "",
    admin: isAdmin,
  }
  try {
    const tokenJWT = jwt.sign(JSONDecoded, process.env?.TOKEN_SECRET || "")

    res.cookie(
      process.env?.TOKEN_AUTHORIZATION || "tokenAuthorization",
      tokenJWT,
      {
        secure: true,
        httpOnly: true,
      }
    )
    res.status(200).send({
      message: "Login realizado com sucesso!",
      data:
        !isAdmin && entitiesFound.user
          ? {
              infosUser: {
                email: entitiesFound.user.email,
                cep: entitiesFound.user.addresses[0].cep,
              },
            }
          : null,
    })
  } catch (error) {
    console.log(error)
    res.status(200).send({
      message:
        "Ocorreu um erro ao realizar o login. Verifique o erro no console.",
    })
  }

  res.send("login")
}

export const logout = async (req: Request, res: Response) => {
  try {
    res.clearCookie(process.env?.TOKEN_AUTHORIZATION || "tokenAuthorization")
    res.status(200).send({ message: "Logout concluido!" })
  } catch (error) {
    console.log(error)
    res.status(500).send({
      message: "Ocorreu um erro ao fazer o logout. Verifique o console!",
    })
  }
}
