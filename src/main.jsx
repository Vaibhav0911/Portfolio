import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import "./index.css"
import PortfolioPage from './page/PortfolioPage.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <PortfolioPage />
  </StrictMode>,
)
