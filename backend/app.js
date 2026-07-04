import "dotenv/config"
import cors from "cors"
import cookieParser from "cookie-parser"
import express from "express"


const app = express()

app.use(cors(
    {
        origin:"http://localhost:5173",
        credentials:true    }
))

app.use(express.json({limit: "16kb"}))
app.use(express.urlencoded({extended: true, limit: "16kb"}))
app.use(express.static("public"))
app.use(cookieParser())

import userRouter from "./Routes/User.routes.js"
import itenaryRouter from "./Routes/itenaryRoutes.js"

app.use("/itenary",itenaryRouter)
app.use("/auth",userRouter)

export default app