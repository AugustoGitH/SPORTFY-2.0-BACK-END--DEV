import { Request, Response } from "express"

export const getInfosPersonal = async (req: Request, res: Response) => {
  res.send("getInfosPersonal")
}

export const getInfosAddress = async (req: Request, res: Response) => {
  res.send("getInfosAddress")
}
