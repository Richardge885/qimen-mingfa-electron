import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { MemoryRouter } from 'react-router-dom';
import App from './App.tsx';
import './index.css';

createRoot(document.getElementById('root')!).render(
    <StrictMode>
        <MemoryRouter>
            {/* Only MemoryRouter keeps the app in fullscreen mode */}
            <App />
        </MemoryRouter>
    </StrictMode>,
);
