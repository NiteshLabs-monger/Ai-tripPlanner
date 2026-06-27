import jwt from "jsonwebtoken"
import { asyncHandler } from "../utils/AsyncHandler.js"
import { ApiError } from "../utils/ApiError.js"
import User from "../models/user.model.js"


const verifyjwt = asyncHandler(async (req,_,next) => {
    try {
        const Token = req.cookies?.accessToken 
        if(!Token){
            throw new ApiError(400, "unauthorized request")

        }
        const decodedToken = jwt.verify(Token,process.env.ACCESS_TOKEN_SECRET)
        const user = await User.findById(decodedToken?._id).select("-password -refreshToken")
    
        if (!user) {
            
            throw new ApiError(401, "Invalid Access Token")
        }
    
        req.user = user;
        next()
    } catch (error) {
        throw new ApiError(401, error?.message || "Invalid access token")
    }
    
    
})

export default verifyjwt