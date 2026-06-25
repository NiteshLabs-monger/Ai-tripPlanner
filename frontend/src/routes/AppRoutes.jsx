import {createBrowserRouter,createRoutesFromElements,Route} from "react-router-dom"
import Signup from "@/pages/auth/signup.jsx"
import SignIn from "@/pages/auth/signin.jsx"
import App from "@/App";

import Dashboard from "@/pages/Dashboard/Dashboard";


export const router = createBrowserRouter(
    createRoutesFromElements(
        <> 
        <Route path="/" element={<App/>}/>
        <Route path="/signup" element={<Signup/>}/>
         <Route path="/signin" element={<SignIn/>}/>
        
        <Route path="/dashboard" element={<Dashboard/>}/>
        
       
         
         
         </>
         
      
))
  