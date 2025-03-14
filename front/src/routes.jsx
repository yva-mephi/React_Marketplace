import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import MainPage from './pages/main/mainPage';
import DetailsPage from './pages/details/detailsPage';
import CreateItemsPage from './pages/createItems/createItemsPage';
import AuthPage from './pages/auth/authPage';

const router = createBrowserRouter([
    {
        path: '/',
        element: <MainPage />,
    },
    {
        path: '/items/:id',
        element: <DetailsPage />,
    },
    {
        path: '/create',
        element: <CreateItemsPage />,
    },
    {
        path: '/auth',
        element: <AuthPage />,
    },
]);

export const Routes = () => <RouterProvider router={router} />;