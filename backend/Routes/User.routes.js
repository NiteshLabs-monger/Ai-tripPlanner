import { Router } from "express";
import {registerUser,loginUser,logoutUser} from "../Controllers/User.controller.js"
import verifyjwt from "../middlewares/auth.middleware.js"

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

router.route("/checksession").get(verifyjwt,(req,res) => {
    res.status(200).json({
    authenticated: true,
    user: req.user
  });
})
export default router;