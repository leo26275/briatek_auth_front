import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router';

import ToastProvider from './providers/ToastProvider.tsx';
import { ThemeProvider } from './providers/ThemeProvider.tsx';
import { UserProvider } from './providers/UserProvider.tsx';

import App from './App.tsx';

import './index.css';

createRoot(document.getElementById('root')!).render(
    <StrictMode>
        <BrowserRouter>
            <ToastProvider />
            <ThemeProvider>
                <UserProvider>
                    <App />
                </UserProvider>
            </ThemeProvider>
        </BrowserRouter>
    </StrictMode>,
);
