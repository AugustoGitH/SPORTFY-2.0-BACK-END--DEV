import { Router } from "express"
import createRouters from "../functions/createRouters"
import { product } from "../map"

const router = Router()
createRouters({
  router,
  routersList: product,
})

export default router
