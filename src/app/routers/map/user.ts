import { TypeRouter } from "../types"
import * as controllers from "../../controllers/user"

const routers = [
  {
    pathname: "/get-project",
    controller: controllers.getInfosAddress,
    method: "get",
  },
  {
    pathname: "/get-projects",
    controller: controllers.getInfosPersonal,
    method: "get",
  },
] as TypeRouter[]

export default routers
