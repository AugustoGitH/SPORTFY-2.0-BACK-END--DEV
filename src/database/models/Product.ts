import { Document, Schema, model } from "mongoose"
import { TypeProduct } from "../types/Product"

const productSchama = new Schema({
  cover: { type: String, require: true },
  title: { type: String, require: true },
  articleType: { type: String, require: true },
  freight: { type: String, require: true },
  previousValue: { type: Number, require: true },
  value: { type: Number, require: true },
  installments: { type: String, require: true },
  description: { type: String, require: true },
  images: { type: Array, default: [] },
  avaliation: { type: Array, default: [] },
  addedBy: { type: Object, require: true },
  stock: { type: Number, require: true },
  views: { type: Number, default: 0 },
  likes: { type: Array, default: [] },
  tags: { type: Array, default: [] },
  options: {
    type: Object,
    default: {
      shoeSizes: { type: Array, default: [] },
      clothingSizes: { type: Array, default: [] },
      colors: { type: Array, default: [] },
    },
  },
  specifications: {
    type: Object,
    default: {
      gender: { type: String, require: true },
      composition: { type: String, default: null },
      sewing: { type: String, default: null },
      obs: { type: String, default: null },
      guarantee: { type: String, default: null },
      origin: { type: String, default: null },
      indicatesTo: { type: String, require: true },
      name: { type: String, require: true },
      brand: { type: String, require: true },
    },
  },
})

export default model<TypeProduct & Document>("Product", productSchama)
