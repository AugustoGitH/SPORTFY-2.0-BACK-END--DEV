import { Router } from "express"
import createRouters from "../functions/createRouters"
import { checkRoutes } from "../map"

const router = Router()
createRouters({
  router,
  routersList: checkRoutes,
})

export default router
