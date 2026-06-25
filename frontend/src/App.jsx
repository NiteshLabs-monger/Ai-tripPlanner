
import { userService } from './api/authapi.js';
import { useNavigate } from 'react-router-dom';
import { useState,useEffect } from 'react';

function App() {
 const [isLoading, setIsLoading] = useState(true);
 const [user, setUser] = useState(null);
 const navigate = useNavigate()

 useEffect(() => {
  userService.checkauth('auth/checksession')
    .then(res => {
      setUser(res.data.user);
      console.log(res);
    })
    .catch(error => {
      setUser(null); // <-- Safe! If auth fails, user is null
      console.error("Authentication failed: ", error);
    })
    .finally(() => setIsLoading(false));
}, []);

  useEffect(() => {
    if (!isLoading) {
      if (user) {
        navigate('/dashboard');
      } else {
        navigate('/signin');
      }
    }
  }, [isLoading, user, navigate]);

  if (isLoading) {
    return <div>Loading your session...</div>; // Shows while checking the cookie
  }
  
  return null
}

  


export default App;