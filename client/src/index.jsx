import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './components/App.jsx';

const container = document.getElementById('app');
const root = createRoot(container);

const params = new URLSearchParams(window.location.search);

root.render(<App product_id={params.get('pid')} />);
