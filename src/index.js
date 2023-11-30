import React from 'react';
import ReactDOM from 'react-dom/client';

import App from './App';

import { CounterProvider } from './contexts/CounterContext';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
    <CounterProvider>
        <App />
    </CounterProvider>
);
