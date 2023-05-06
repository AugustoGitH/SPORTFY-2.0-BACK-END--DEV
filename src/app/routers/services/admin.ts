import { Router } from "express"
import createRouters from "../functions/createRouters"
import { admin } from "../map"

const router = Router()
createRouters({
  router,
  routersList: admin,
})

export default router
