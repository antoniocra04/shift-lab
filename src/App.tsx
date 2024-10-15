import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import { LoginPage } from './pages/Login';

const router = createBrowserRouter([
  {
    path: '/',
    element: <LoginPage />
  }
]);

export const App = () => <RouterProvider router={router} />;
