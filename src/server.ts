import express from "express"
import bodyParser from "body-parser"
import cookieParser from "cookie-parser"
import mongoose from "mongoose"
import routers from "./app/routers"
import { config as configDotenv } from "dotenv"
configDotenv()

const app = express()
const baseUrl = "/api"
const PORT = 3000

app.use(bodyParser.json({ limit: "1000mb" }))
app.use(bodyParser.urlencoded({ limit: "1000mb", extended: true }))

app.use(cookieParser())

app.use(baseUrl, routers)

mongoose
  .connect(process.env?.MONGO_CONNECTION_URL || "")
  .then(() => {
    console.log("------------> Banco de dados conectado!")
  })
  .catch((error) => console.log(error))

app.listen(PORT, () => {
  console.log(`------------> Servidor rodando na porta ${PORT}`)
})
