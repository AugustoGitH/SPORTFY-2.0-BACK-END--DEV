import { Request, Response } from "express"

export const addProduct = (req: Request, res: Response) => {
  res.send("addProduct")
}

export const getProducts = (req: Request, res: Response) => {
  res.send("getProducts")
}
