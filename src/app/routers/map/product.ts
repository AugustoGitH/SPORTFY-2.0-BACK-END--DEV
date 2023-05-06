import { TypeRouter } from "../types"
import * as controllers from "../../controllers/product"

const routers = [
  {
    pathname: "/get-product",
    controller: controllers.getProduct,
    method: "get",
  },
  {
    pathname: "/get-products",
    controller: controllers.getProducts,
    method: "get",
  },
  {
    pathname: "/like-product/:id",
    controller: controllers.likeProduct,
    method: "put",
  },
  {
    pathname: "/view-product/:id",
    controller: controllers.viewProduct,
    method: "put",
  },
] as TypeRouter[]

export default routers
