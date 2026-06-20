import { Router } from "express";
import {registerUser,loginUser,logoutUser} from "../Controllers/User.controller"
import verifyjwt from "../middlewares/auth.middleware"

const router = Router()

router.route("/register").post(
    registerUser
)

router.route('/login').post(
    loginUser
)

router.route("/logout").post(verifyjwt,
    logoutUser
)