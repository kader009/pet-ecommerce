import { createBrowserRouter } from 'react-router-dom';
import MainLayout from '../Layout/MainLayout';
import Home from '../Home/Home';

const router = createBrowserRouter([
  {
    path: '/',
    element: <MainLayout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
    ],
  },
]);

export default router;
