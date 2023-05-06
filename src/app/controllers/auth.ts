import { Request, Response } from "express"

export const register = async (req: Request, res: Response) => {
  res.send("register")
}

export const verifyEmail = async (req: Request, res: Response) => {
  res.send("verifyEmail")
}

export const login = async (req: Request, res: Response) => {
  res.send("login")
}

export const logout = async (req: Request, res: Response) => {
  res.send("logout")
}
