import { createRoot } from 'react-dom/client'
import App from './App.jsx'
// import './index.css'
import { ThemeProvider } from './Context/ThemeContext.jsx'

createRoot(document.getElementById('root')).render(
  <ThemeProvider>
    <SidebarProvider>
    <App />
    </SidebarProvider>
  </ThemeProvider>,
)
