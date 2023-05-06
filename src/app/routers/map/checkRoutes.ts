import { TypeRouter } from "../types"
import * as controllers from "../../controllers/checkRoutes"

const routers = [
  {
    pathname: "/admin",
    controller: controllers.admin,
    method: "get",
  },
  {
    pathname: "/token",
    controller: controllers.token,
    method: "get",
  },
  {
    pathname: "/user",
    controller: controllers.user,
    method: "get",
  },
] as TypeRouter[]

export default routers
