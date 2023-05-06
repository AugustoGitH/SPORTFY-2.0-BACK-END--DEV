import { NextFunction, Response, Request } from "express"

export type MethodsHTTP = "get" | "post" | "delete" | "put"

export type TypeRouter = {
  pathname: string
  controller: (req?: Request, res?: Response, next?: NextFunction) => void
  method: MethodsHTTP
}
