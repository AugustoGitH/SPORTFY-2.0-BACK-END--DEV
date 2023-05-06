import { Router } from "express"
import createRouters from "../functions/createRouters"
import { auth } from "../map"

const router = Router()
createRouters({
  router,
  routersList: auth,
})

export default router
