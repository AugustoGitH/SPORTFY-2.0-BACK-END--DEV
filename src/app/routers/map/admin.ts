import { TypeRouter } from "../types"
import * as controllers from "../../controllers/admin"

const routers = [
  {
    pathname: "/add-product",
    controller: controllers.addProduct,
    method: "post",
  },
  {
    pathname: "/get-products",
    controller: controllers.getProducts,
    method: "get",
  },
] as TypeRouter[]

export default routers
