import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import LoveLetter from './LoveLetter/LoveLetter'

createRoot(document.getElementById('root')).render(
  <StrictMode>
   <LoveLetter />
  </StrictMode>,
)
