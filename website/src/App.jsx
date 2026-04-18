import { Routes, Route } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import { AnimatePresence } from 'framer-motion'
import Home from './pages/Home'
import Download from './pages/Download'

const languages = [
  { code: 'en', flag: '🇺🇸' },
  { code: 'ja', flag: '🇯🇵' },
  { code: 'de', flag: '🇩🇪' },
  { code: 'fr', flag: '🇫🇷' },
]

function App() {
  const { i18n } = useTranslation()

  return (
    <div className="app">
      <div className="grid-bg"></div>
      <div className="glow glow-1"></div>
      <div className="glow glow-2"></div>

      <div className="lang-switcher">
        {languages.map((lang) => (
          <button
            key={lang.code}
            className={`lang-btn ${i18n.language === lang.code ? 'active' : ''}`}
            onClick={() => i18n.changeLanguage(lang.code)}
          >
            {lang.flag}
          </button>
        ))}
      </div>

      <AnimatePresence mode="wait">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/download" element={<Download />} />
        </Routes>
      </AnimatePresence>
    </div>
  )
}

export default App