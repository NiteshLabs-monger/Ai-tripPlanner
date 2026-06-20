import { ApiError } from "../utils/ApiError";
import { asyncHandler } from "../utils/AsyncHandler";
import {User,} from  "../models/user.model"
import { ApiResponse } from "../utils/ApiResponse";

const generateAccessandRefreshToken = async (userId) => {
    try {
        const user = User.findById(userId)
        const accessToken = user.generateAccessToken()
        const refreshToken = user.generateRefreshToken()

        user.refreshToken = refreshToken
        user.save({validateBeforeSave:false})

        return {accessToken,refreshToken}
        
    }catch{
        throw new ApiError(405,"something went wrong while generating access and refresh tokens")
    }

}


const registerUser = asyncHandler((req,res) => {
    const {FullName , Email , password} = req.body

    if(
        [FullName,Email,password].some((field) => {
            field?.trim() === ""
        })
    )
        {
            throw new ApiError(400,"all fields are required")
        }
    
    const existedUser = await User.findone(
        "email"
    )

    if(existedUser){
        throw new ApiError(400, "user already exists with this email")
    }

    const user = await User.create(
        fullName,
        Email,
        Password,
        refreshToken,
        )

    const createduser = await User.findById(user._id).select(
        "-password -refreshToken"
    )

    if(!createduser){
        return new ApiError(401,"error registering user!!! please try again")
    }

    return res.status(201).json(
        new ApiResponse(200, createdUser, "User registered Successfully"))


})

const loginUser = asyncHandler((req,res) => {
    
    const {email,password} = req.body 

    if(!email) {
        throw new ApiError(400,"email is required")

    }

    const user = await User.findone({email})

    if(!user){
        throw ApiError(401,"user is not registered with this email")
    }


    const isPasswordValid = await user.isPasswordCorrect(password)

    if(!isPasswordValid){
        throw new ApiError(400,"please enter correct password")
    }

    const {accessToken, refreshToken} = generateAccessandRefreshToken()

    const loggedinUser = await User.findById(user._id).select("-password -refreshToken")

   return res
    .status(200)
    .cookie("accessToken", accessToken, options)
    .cookie("refreshToken", refreshToken, options)
    .json(
        new ApiResponse(
            200, 
            {
                user: loggedInUser, accessToken, refreshToken
            },
            "User logged In Successfully"
        )
    )


})


const logoutUser = asyncHandler((req,res) => {
    await User.findByIdAndUpdate(
        req.user._id,
        {
            $unset: {
                refreshToken: 1 
            }
        },
        {
            new: true
        }
    )
const options = {
        httpOnly: true,
        secure: true
    }

    return res
    .status(200)
    .clearCookie("accessToken", options)
    .clearCookie("refreshToken", options)
    .json(new ApiResponse(200, {}, "User logged Out"))})



export {registerUser,
    loginUser,
    logoutUser}
    