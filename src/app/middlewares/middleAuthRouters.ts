import { NextFunction, Request, Response } from "express"
import decodedJWT from "../functions/decodedJWT"

const authRouters = (
  req: Request,
  res: Response,
  next: NextFunction,
  { entitie }: { entitie: "user" | "admin" }
) => {
  const decodedJWTAuth = decodedJWT({
    tokenAuth: req.cookies[process.env?.TOKEN_AUTHORIZATION || ""],
    tokenSecret: process.env?.TOKEN_SECRET || "",
  })
  if (!decodedJWTAuth) {
    return res
      .status(202)
      .send({ message: "Visitante não possui um token de acesso!" })
  }
  if (
    (decodedJWTAuth.admin && entitie === "admin") ||
    (!decodedJWTAuth.admin && entitie === "user")
  ) {
    return next()
  }
  res.status(202).send({
    message: "Visitante possui um token de acesso inválido!",
  })
}

export default authRouters
