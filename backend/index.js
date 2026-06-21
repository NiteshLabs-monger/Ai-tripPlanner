
import express from "express"
import DBconnect from './db/dbconnect.js';
import "dotenv/config"
import app from "./app.js"



DBconnect().
then( 
  () => {
    app.listen(process.env.PORT || 3000, () => {
  console.log(`Example app listening on port ${process.env.PORT}`);
});

  }
).catch(
  () => {
    console.log("MONGODB connection failed !!!",
    )
  }
)


import userRouter from "./Routes/User.routes.js"

app.use("/register",userRouter)