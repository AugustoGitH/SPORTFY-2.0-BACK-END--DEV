import { Request, Response } from "express"
import decodedJWT from "../functions/decodedJWT"

export const addProduct = (req: Request, res: Response) => {
  const tokenDecoded = decodedJWT({
    tokenAuth: req.cookies[process.env?.TOKEN_AUTHORIZATION || ""],
    tokenSecret: process.env?.TOKEN_SECRET || "",
  })

  res.send("addProduct")
}

export const getProducts = (req: Request, res: Response) => {
  res.send("getProducts")
}
