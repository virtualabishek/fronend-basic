import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

export function getImageUrl(person, size='s') {
  return(
    'https://i.imgur.com/' + 
    'person.imageId' + 
    size+
    '.jpg'
  );
}