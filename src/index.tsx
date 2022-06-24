import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from 'src/App';

const div = document.createElement('div');
document.body.append(div);

const root = ReactDOM.createRoot(div as HTMLElement);

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
