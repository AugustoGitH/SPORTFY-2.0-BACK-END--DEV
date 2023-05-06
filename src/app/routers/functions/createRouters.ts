import { NextFunction, Response, Request, Router } from "express"
import { TypeRouter } from "../types"

type PraramsCreateRouters = {
  router: Router
  middleware?: (req: Request, res: Response, next: NextFunction) => void
  routersList: TypeRouter[]
}

export default function createRouters({
  router,
  middleware,
  routersList,
}: PraramsCreateRouters) {
  const Middleware =
    middleware ||
    ((req: Request, res: Response, next: NextFunction) => {
      next()
    })

  routersList.forEach(({ controller, method, pathname }) => {
    router[method](pathname, Middleware, controller)
  })
}
