import Admin from "../models/Admin"
import User from "../models/User"
import { TypeAdmin } from "../types/Admin"
import { TypeUser } from "../types/User"
import { Document } from "mongoose"

type ParamsSearchFindUserAndAdmins = TypeUser & TypeAdmin & Document

type findUserAndAdmin = {
  admin: boolean
  entitiesFound: (TypeUser & Document) | (TypeAdmin & Document) | null
}

const findUserAndAdmins = async ({
  ...searchQuerie
}: ParamsSearchFindUserAndAdmins): Promise<findUserAndAdmin> => {
  if (Object.keys(searchQuerie).length > 3) {
    return {
      admin: false,
      entitiesFound: null,
    }
  }

  try {
    const [user, admin] = await Promise.all([
      User.findOne({ searchQuerie }),
      Admin.findOne({ searchQuerie }),
    ])
    return {
      admin: !!admin,
      entitiesFound: user || admin,
    }
  } catch (error) {
    console.log(error)
    return {
      admin: false,
      entitiesFound: null,
    }
  }
}

export default findUserAndAdmins
