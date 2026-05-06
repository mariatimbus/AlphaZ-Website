import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import PressPage from './PressPage.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <PressPage />
  </StrictMode>,
)
