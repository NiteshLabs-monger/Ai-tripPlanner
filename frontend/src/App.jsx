

import useEffect from "react"
import { userService } from './api/authapi.js'
import { useAuthStore } from './context/useAuthstore.js'
import { Outlet, useNavigate } from "react-router-dom"


function App() {
  const {setAuth, isAuthenticated,clearAuth} = useAuthStore()
  const navigate = useNavigate()
  useEffect(() => {
     userService.checkauth()
    .then(setAuth(user))
    .catch(clearAuth())
    if(isAuthenticated){
      navigate('/dashboard')
    }else{
      navigate('signin')
    }

})
  

  return(

   <Outlet/>
   )}

   export default App