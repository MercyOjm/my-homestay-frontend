import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-datepicker/dist/css/bootstrap-datepicker.min.css';
import './App.css';
import Navbar from './components/navbar/Navbar';
import { createBrowserRouter, RouterProvider, Outlet } from 'react-router-dom';
import Home from './pages/home/Home';
import Footer from './components/footer/Footer';
import Signin from './pages/signin/Signin';
import Register from './pages/register/Register';
import Profile from './pages/profile/Profile';
import { AuthProvider } from './contexts';
import Reservations from './pages/reservations/Reservations';
import PropertyPage from "./pages/createproperty/PropertyPage";


function App() {
  const Layout = () => {
    return (
      <>
        <Navbar />
        <Outlet />
        <Footer />
      </>
    );
  };

  const router = createBrowserRouter([
    {
      path: '/',
      element: <Layout />,
      children: [
        {
          path: '/',
          element: <Home />,
        },
        {
          path: '/signin',
          element: <Signin />,
        },
        {
          path: '/register',
          element: <Register />,
        },
        {
          path: '/profile',
          element: <Profile />,
        },
        {
          path: '/reservations',
          element: <Reservations />,
        },
        {
          path: '/create-property',
          element: <PropertyPage />,
        },
      ],
    },
  ]);

  return (
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  );
}

export default App;