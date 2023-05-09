import { Request, Response } from "express"

import decodedJWT from "../functions/decodedJWT"

export const token = async (req: Request, res: Response) => {
  const JSONJWT = decodedJWT({
    tokenAuth: req.cookies?.TOKEN_AUTHORIZATION || "",
    tokenSecret: req.cookies?.TOKEN_SECRET || "",
  })
  if (JSONJWT) {
    return res.status(202).send({
      message: "O visitante está logado!",
      admin: JSONJWT.admin,
      data: { name: JSONJWT.name },
    })
  }
  res.status(202).send({ message: "O visitante possui um token inválido!" })
}

export const user = async (req: Request, res: Response) => {
  const JSONJWT = decodedJWT({
    tokenAuth: req.cookies?.TOKEN_AUTHORIZATION || "",
    tokenSecret: req.cookies?.TOKEN_SECRET || "",
  })
  if (JSONJWT && !JSONJWT.admin) {
    return res.status(202).send({
      message: "O visitante está logado!",
      admin: JSONJWT.admin,
      data: { name: JSONJWT.name },
    })
  }
  res.status(202).send({ message: "O visitante possui um token inválido!" })
}

export const admin = async (req: Request, res: Response) => {
  const JSONJWT = decodedJWT({
    tokenAuth: req.cookies?.TOKEN_AUTHORIZATION || "",
    tokenSecret: req.cookies?.TOKEN_SECRET || "",
  })
  if (JSONJWT && JSONJWT.admin) {
    return res.status(202).send({
      message: "O visitante está logado!",
      admin: JSONJWT.admin,
      data: { name: JSONJWT.name },
    })
  }
  res.status(202).send({ message: "O visitante possui um token inválido!" })
}
