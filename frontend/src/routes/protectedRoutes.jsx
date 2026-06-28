import { Navigate, Outlet } from 'react-router-dom';
import { useAuthStore } from '@/context/useAuthstore';




export const ProtectedRoute = () => {
    const {isAuthenticated} = useAuthStore()
    console.log(isAuthenticated)
  
  if (!isAuthenticated) {
    return <Navigate to="/" replace />;
  }

  // If authenticated, render the child route component via <Outlet />
  return <Outlet />;
};