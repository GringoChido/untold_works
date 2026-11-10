import './index.css';
import './analog.css';
import { StrictMode } from 'react';
import { createRoot, hydrateRoot } from 'react-dom/client';
import { App } from './App';
import { preloadRoute } from './pageLoader';

const rootElement = document.getElementById('root');
if (!rootElement) throw new Error('Could not find #root');

const app = (
  <StrictMode>
    <App />
  </StrictMode>
);

void preloadRoute(window.location.pathname).then(() => {
  if (rootElement.hasChildNodes()) hydrateRoot(rootElement, app);
  else createRoot(rootElement).render(app);
}).catch(() => {
  // Keep the readable, linked HTML available if a transient network error stops
  // the interactive layer from loading. A reload can retry the page chunk.
  console.error('The interactive page could not load. Reload to try again.');
});
