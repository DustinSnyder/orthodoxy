import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { ReloadPrompt } from './components/ReloadPrompt.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ReloadPrompt />
    <App />
  </StrictMode>,
)
