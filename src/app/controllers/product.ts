import { Request, Response } from "express"

export const getProduct = async (req: Request, res: Response) => {
  res.send("getProduct")
}

export const getProducts = async (req: Request, res: Response) => {
  res.send("getProducts")
}

export const viewProduct = async (req: Request, res: Response) => {
  res.send("viewProduct")
}

export const likeProduct = async (req: Request, res: Response) => {
  res.send("likeProduct")
}
