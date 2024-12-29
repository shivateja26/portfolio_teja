// node modules
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
// css styles link
import './index.css';
// components
import App from './App.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
