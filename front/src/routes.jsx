import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import MainPage from './pages/main/mainPage';
import ItemsPage from './pages/items/itemsPage';
import DetailsPage from './pages/details/detailsPage';
import CreateItemsPage from './pages/createItems/createItemsPage';
import AuthPage from './pages/auth/authPage';

const router = createBrowserRouter([
    {
        path: '/',
        element: <MainPage />,
    },
    {
        path: '/items',
        element: <ItemsPage />,
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
        loader: ({ request }) => {
            const url = new URL(request.url);
            return { mode: url.searchParams.get('mode') };
        }
    },
]);

export const Routes = () => <RouterProvider router={router} />;