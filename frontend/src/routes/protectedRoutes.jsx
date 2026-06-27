import { Navigate, Outlet } from 'react-router-dom';
import { useAuthStore } from '@/context/useAuthstore';




export const ProtectedRoute = () => {
    const {isAuthenticated} =useAuthStore()
  
  if (!isAuthenticated) {
    return <Navigate to="/signin" replace />;
  }

  // If authenticated, render the child route component via <Outlet />
  return <Outlet />;
};