import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './assets/scss/app.scss'
import AppRoutes from './routes/routes.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <AppRoutes />
  </StrictMode>,
)
