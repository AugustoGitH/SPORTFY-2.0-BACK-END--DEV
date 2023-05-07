import { JwtPayload } from "jsonwebtoken"

export interface TypeDecodedTokenAuth extends JwtPayload {
  email: string
  id: string
  name: string
  admin: boolean
}
