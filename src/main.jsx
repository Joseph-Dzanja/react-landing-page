import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Header from './Header.jsx'
import SideMenu from './SideMenu'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <SideMenu />
    <Header />
    
  </StrictMode>,
)
