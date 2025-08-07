import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import {BrowserRouter} from 'react-router-dom'
import ApppContectProvider from './context/AppContext.jsx'

createRoot(document.getElementById('root')).render(
<BrowserRouter>
<ApppContectProvider>
 <App />
</ApppContectProvider>
 </BrowserRouter>,
)
