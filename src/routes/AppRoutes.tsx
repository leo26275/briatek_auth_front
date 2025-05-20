import { Navigate } from 'react-router';
import LoginPage from '../pages/LoginPage';

const PublicRoutes = [
    { path: '*', element: <Navigate to="/login" replace /> },
    {
        path: '/login',
        element: <LoginPage />,
    },
];

export { PublicRoutes };
