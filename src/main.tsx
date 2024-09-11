import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import AppComponent from './App.tsx'
import './index.css'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <AppComponent />
  </StrictMode>,
)
