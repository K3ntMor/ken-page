import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

import './assets/css/headers.css'
import './assets/css/heroes.css'
import './assets/css/estructura.css'

import './assets/js/color-modes.js'

import Conocimientos from './components/Conocimientos.jsx';
 

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
    
  </StrictMode>,
)
