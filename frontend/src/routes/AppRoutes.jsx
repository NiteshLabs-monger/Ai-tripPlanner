import {createBrowserRouter,createRoutesFromElements,Route} from "react-router-dom"
import Signup from "@/pages/auth/signup.jsx"
import SignIn from "@/pages/auth/signin.jsx"

export const router = createBrowserRouter(
    createRoutesFromElements(
        <> 
        <Route path='/signup' element={<Signup/>}/>
         <Route path="/signin" element={<SignIn/>}/>
         
         </>
         
      
))
  