import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import MainPage from './pages/main/mainPage';
import DetailsPage from './pages/details/detailsPage';
import CreateItemPage from './pages/createItems/createItemPage';
import AuthPage from './pages/auth/authPage';

const router = createBrowserRouter([
    {
        path: '/',
        element: <MainPage />,
    },
    {
        path: '/details/:id',
        element: <DetailsPage />,
    },
    {
        path: '/create',
        element: <CreateItemPage />,
    },
    {
        path: '/auth',
        element: <AuthPage />,
    },
]);

export const Routes = () => <RouterProvider router={router} />;