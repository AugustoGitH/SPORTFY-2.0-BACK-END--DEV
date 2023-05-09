/* eslint-disable @typescript-eslint/no-explicit-any */
import { Document } from "mongoose"

import Admin from "../models/Admin"
import User from "../models/User"
import { TypeAdmin } from "../types/Admin"
import { TypeUser } from "../types/User"

type TypeKeyParamsFind = keyof ((TypeUser & TypeAdmin) & Document)

type ParamsSearchFindUserAndAdmins = {
  [key: TypeKeyParamsFind]: any
}

type findUserAndAdmin = {
  isAdmin: boolean
  entitiesFound: {
    admin: (TypeAdmin & Document) | null
    user: (TypeUser & Document) | null
  }
}

const findUserAndAdmins = async (
  searchQuerie: ParamsSearchFindUserAndAdmins
): Promise<findUserAndAdmin> => {
  if (Object.keys(searchQuerie).length > 3) {
    return {
      isAdmin: false,
      entitiesFound: {
        user: null,
        admin: null,
      },
    }
  }

  try {
    const [user, admin] = await Promise.all([
      User.findOne(searchQuerie),
      Admin.findOne(searchQuerie),
    ])
    return {
      isAdmin: !!admin,
      entitiesFound: {
        admin: admin || null,
        user: user || null,
      },
    }
  } catch (error) {
    console.log(error)
    return {
      isAdmin: false,
      entitiesFound: {
        user: null,
        admin: null,
      },
    }
  }
}

export default findUserAndAdmins
