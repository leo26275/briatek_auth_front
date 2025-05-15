import { useRoutes } from 'react-router';
import './App.css';
import { Routes } from './routes/AppRoutes';

function App() {
    const routes = useRoutes(Routes);
    return routes;
}

export default App;
