import { Navigate } from 'react-router';
import LoginPage from '../pages/LoginPage';

const Routes = [
    { path: '*', element: <Navigate to="/login" replace /> },
    {
        path: '/',
        element: <LoginPage />,
    },
];

export { Routes };
