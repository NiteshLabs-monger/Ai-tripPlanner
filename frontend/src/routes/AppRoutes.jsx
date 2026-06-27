import { lazy, Suspense } from 'react';
import { createBrowserRouter, Navigate } from 'react-router-dom';
import { ProtectedRoute } from './protectedRoutes.jsx';
import DashboardLayout from '../layouts/dashboardLayout.jsx';
import SignIn from '@/pages/auth/signin.jsx';
import Signup from '@/pages/auth/signup.jsx';
import Dashboard from '@/pages/Dashboard/Dashboard.jsx';




// Loading fallback component
const PageLoader = () => <div style={{ padding: '20px' }}>Loading...</div>;

export const router = 
  createBrowserRouter([
    
    {
      path: '/',
      element: <Navigate to="/dashboard" replace />,
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

    // Protected Routes Layout
    {
      element: <ProtectedRoute  />,
      children: [
        {
          path: '/dashboard',
          element: <DashboardLayout />,
          children: [
            {
              index: true, // Matches /dashboard exactly
              element: <Suspense fallback={<PageLoader />}><Dashboard /></Suspense>,
            },
            
          ],
        },
      ],
    },

    // Global Catch-all / 404
    {
      path: '*',
      element: <div style={{ padding: '40px', textAlign: 'center' }}><h2>404 - Page Not Found</h2></div>,
    },
  ]);