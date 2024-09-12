import { createBrowserRouter } from 'react-router-dom';
import MainLayout from '../Layout/MainLayout';
import Home from '../Home/Home';
import Login from '../pages/Account/Login';
import Register from '../pages/Account/Register';
import PetListing from '../pages/PetListing';
import PetDetails from '../pages/PetDetails';
import ErrorPage from '../components/ErrorPage';
import Cart from '../pages/Cart';
import SinglePetUpdate from '../pages/SinglePetUpdate';

const router = createBrowserRouter([
  {
    path: '/',
    element: <MainLayout />,
    errorElement: <ErrorPage />,
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
        loader: ({ params }) =>
          fetch(`http://localhost:5000/petlist/${params.id}`),
      },
      {
        path:'/singleupdate/:id',
        element: <SinglePetUpdate/>,
        loader: ({ params }) =>
          fetch(`http://localhost:5000/petlist/${params.id}`)
      },
      {
        path: '/cart',
        element: <Cart />,
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
