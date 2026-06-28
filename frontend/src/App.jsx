import { useEffect } from "react";
import { userService } from './api/authapi.js';
import { useAuthStore } from './context/useAuthstore.js';
import { Outlet, useNavigate } from "react-router-dom";

function App() {
  const { setAuth, clearAuth, isCheckingAuth ,isAuthenticated} = useAuthStore();
  const navigate = useNavigate();
  
  useEffect(() => {
    userService.checkauth()
      .then((res) => {
        setAuth(res.data?.user);
        console.log("Logged in user:", res.data?.user); // Log the response directly
        navigate('/dashboard');
        console.log(isAuthenticated)
      })
      .catch(() => {
        clearAuth();
        navigate('/signin');
      });
      
  }, []); // <-- FIX 1: Added empty dependency array to run only once on mount

  if (isCheckingAuth) {
    return <div>Loading...</div>; 
  }
  
  // <-- FIX 2: Added the return statement so your routes actually render
  return (
    <>
      <Outlet />
    </>
  );
}

export default App;