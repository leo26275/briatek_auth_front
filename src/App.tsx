import { useRoutes } from 'react-router';
// routes
import { PublicRoutes } from './routes/AppRoutes';
import { AuthRoutes } from './routes/AuthRoutes';
// utils
import { SecureStorage } from './utils/SecureStorage';

import './App.css';

const App = () => {
    const routes = useRoutes(PublicRoutes);
    const authRoutes = useRoutes(AuthRoutes);
    const token = SecureStorage.getItem('token');

    if (token) return authRoutes;

    return routes;
};

export default App;
