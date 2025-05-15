import AuthLayout from '@/components/layouts/AuthLayout';
import { Navigate } from 'react-router';

const AuthRoutes = [
    { path: '*', element: <Navigate to="/" replace /> },
    {
        path: '/',
        element: <AuthLayout />,
    },
];

export { AuthRoutes };
