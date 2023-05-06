import express from "express"
import bodyParser from "body-parser"
import cookieParser from "cookie-parser"

import routers from "./app/routers"

const app = express()
const baseUrl = "/api"
const PORT = 3000

app.use(bodyParser.json({ limit: "1000mb" }))
app.use(bodyParser.urlencoded({ limit: "1000mb", extended: true }))

app.use(cookieParser())

app.use(baseUrl, routers)

app.listen(PORT, () => {
  console.log(`------------> Servidor rodando na porta ${PORT}`)
})
