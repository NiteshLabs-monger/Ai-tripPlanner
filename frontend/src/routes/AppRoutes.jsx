import { Suspense } from 'react';
import { createBrowserRouter, Navigate } from 'react-router-dom';
import { ProtectedRoute } from './protectedRoutes.jsx';
import DashboardLayout from '../layouts/applayout.jsx';
import SignIn from '@/pages/auth/signin.jsx';
import Signup from '@/pages/auth/signup.jsx';
import Dashboard from '@/pages/Dashboard/Dashboard.jsx';
import App from "../App.jsx"
import AskAi from '@/pages/askAI/itenaryGeneration.jsx';


// Loading fallback component
const PageLoader = () => <div style={{ padding: '20px' }}>Loading...</div>;

export const router = 
  createBrowserRouter([
    
    {
      path: '/',
      element: <App/>,
    },
    {
      path: '/signin',
      element: (
        <Suspense fallback={<PageLoader />}><SignIn /></Suspense>
      ),
    },
    {
      path: '/signup',
      element: (
        <Suspense fallback={<PageLoader />}><Signup /></Suspense>
      ),
    },

  
        {
          path: '/dashboard',
          element: <DashboardLayout />,
          children: [
            {
              index: true, 
              element: <Suspense fallback={<PageLoader />}><Dashboard /></Suspense>,
            },
            
          ],
        },
        {
          path: "/askai",
          element: <Suspense fallback={<PageLoader />}><AskAi /></Suspense>,
        },
    


    {
      path: '*',
      element: <div style={{ padding: '40px', textAlign: 'center' }}><h2>404 - Page Not Found</h2></div>,
    },
  ]);