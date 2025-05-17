import { useRoutes } from 'react-router';
// routes
import { PublicRoutes } from './routes/AppRoutes';
import { AuthRoutes } from './routes/AuthRoutes';
// hooks
import useUser from './hooks/useUser';
// utils
import { SecureStorage } from './utils/SecureStorage';
import { decodeToken } from './utils/jwt.utils';

import './App.css';
import { useEffect } from 'react';

const App = () => {
    const routes = useRoutes(PublicRoutes);
    const authRoutes = useRoutes(AuthRoutes);
    const { userData, userMethods } = useUser();

    const token = SecureStorage.getItem('token');

    useEffect(() => {
        if (token && !userData.data) {
            const authData = decodeToken(token);
            if (authData) userMethods.onUpdate(authData);
        }
    }, [token, userData.data, userMethods]);

    return token ? authRoutes : routes;
};

export default App;
