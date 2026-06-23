import "dotenv/config"
import cors from "cors"
import cookieParser from "cookie-parser"
import express from "express"


const app = express()

app.use(cors())

app.use(express.json({limit: "16kb"}))
app.use(express.urlencoded({extended: true, limit: "16kb"}))
app.use(express.static("public"))
app.use(cookieParser())

import userRouter from "./Routes/User.routes.js"
app.get("/",(req,res)=> {
    return res.json("hello world")
})
app.use("/auth",userRouter)

export default app