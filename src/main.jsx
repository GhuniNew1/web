import * as ReactDOMClient from 'react-dom/client';
import App from './App';
import './index.css';
import { StrictMode } from 'react';

const container = document.getElementById('root');
const root = ReactDOMClient.createRoot(container);

root.render(<StrictMode><App /></StrictMode>);

// navigator.serviceWorker.register('/sw.js');