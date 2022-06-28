import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { App } from 'src/App';
import { store } from 'store';

const div = document.createElement('div');
document.body.append(div);

const root = ReactDOM.createRoot(div as HTMLElement);

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
);
