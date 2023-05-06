import { Request, Response } from "express"

export const token = async (req: Request, res: Response) => {
  res.send("token")
}

export const user = async (req: Request, res: Response) => {
  res.send("user")
}

export const admin = async (req: Request, res: Response) => {
  res.send("admin")
}
