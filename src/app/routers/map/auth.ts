import { TypeRouter } from "../types"
import * as controllers from "../../controllers/auth"

const routers = [
  {
    pathname: "/login",
    controller: controllers.login,
    method: "post",
  },
  {
    pathname: "/logout",
    controller: controllers.logout,
    method: "put",
  },
  {
    pathname: "/register",
    controller: controllers.register,
    method: "post",
  },
  {
    pathname: "/verify-email",
    controller: controllers.verifyEmail,
    method: "get",
  },
] as TypeRouter[]

export default routers
