import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './assets/styles/index.css'
import App from './content/App.tsx'
import Cursor from './components/Cursor.tsx'
import NavigationDock from './components/Navdock.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Cursor/>
    <App />
    <NavigationDock/>
  </StrictMode>,
)
