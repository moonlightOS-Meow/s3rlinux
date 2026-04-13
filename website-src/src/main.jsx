import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { HashRouter, Routes, Route } from 'react-router-dom'
import './index.css'
import App from './App.jsx'
import Wiki from './Wiki.jsx'
import Devlog from './Devlog.jsx'
import Credo from './Credo.jsx'
import Message from './Message.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <HashRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/wiki" element={<Wiki />} />
        <Route path="/devlog" element={<Devlog />} />
        <Route path="/credo" element={<Credo />} />
        <Route path="/message" element={<Message />} />
      </Routes>
    </HashRouter>
  </StrictMode>,
)
