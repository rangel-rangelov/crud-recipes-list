import React from 'react';
import ReactDOM from 'react-dom';

import App from './App';
import { RecipesProvider } from 'context/RecipesContext';

ReactDOM.render(
  <React.StrictMode>
    <RecipesProvider>
      <App />
    </RecipesProvider>
  </React.StrictMode>,
  document.getElementById('root'),
);
