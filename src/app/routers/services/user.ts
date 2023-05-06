import { Router } from "express"
import createRouters from "../functions/createRouters"
import { user } from "../map"

const router = Router()
createRouters({
  router,
  routersList: user,
})

export default router
