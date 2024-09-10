import { createBrowserRouter } from 'react-router-dom';
import MainLayout from '../Layout/MainLayout';
import Home from '../Home/Home';
import Login from '../pages/Account/Login';
import Register from '../pages/Account/Register';
import PetListing from '../pages/PetListing';
import PetDetails from '../pages/PetDetails';

const router = createBrowserRouter([
  {
    path: '/',
    element: <MainLayout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: '/pet-listing',
        element: <PetListing />,
      },
      {
        path: '/petDetail/:id',
        element: <PetDetails />,
        loader: ({params}) => fetch(`http://localhost:5000/petlist/${params.id}`)
      },
      {
        path: '/login',
        element: <Login />,
      },
      {
        path: '/register',
        element: <Register />,
      },
    ],
  },
]);

export default router;
