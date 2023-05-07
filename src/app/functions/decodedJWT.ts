import jwt from "jsonwebtoken"
import { TypeDecodedTokenAuth } from "./types"

type TypeParamDecodedJWT = {
  tokenAuth: string
  tokenSecret: string
}

const decodedJWT = ({
  tokenAuth,
  tokenSecret,
}: TypeParamDecodedJWT): TypeDecodedTokenAuth | null => {
  try {
    const decoded: TypeDecodedTokenAuth = jwt.verify(
      tokenAuth,
      tokenSecret
    ) as TypeDecodedTokenAuth
    return decoded
  } catch (error) {
    return null
  }
}

export default decodedJWT
