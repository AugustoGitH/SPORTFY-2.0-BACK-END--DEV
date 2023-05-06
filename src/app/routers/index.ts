import { Router } from "express"
import {
  authRouters,
  productRouters,
  checkRoutesRouters,
  userRouters,
  adminRouters,
} from "./services"

const router = Router()

router.use("/auth", authRouters)
router.use("/check-routes", checkRoutesRouters)
router.use("/product", productRouters)
router.use("/user", userRouters)
router.use("/admin", adminRouters)

export default router
