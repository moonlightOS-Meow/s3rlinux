import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import { AnimatePresence, motion } from 'framer-motion'
import { useState, useEffect } from 'react'
import Home from './pages/Home'
import Download from './pages/Download'

const languages = [
  { code: 'en', flag: '🇺🇸' },
  { code: 'ja', flag: '🇯🇵' },
  { code: 'de', flag: '🇩🇪' },
  { code: 'fr', flag: '🇫🇷' },
  { code: 'au', flag: '🇦🇺' },
  { code: 'pl', flag: '🇵🇱' },
]

// Judgement Cut style intro
const introVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.5 } },
  exit: { opacity: 0, scale: 1.1, transition: { duration: 0.3 } }
}

const slashVariants = {
  hidden: { scaleX: 0, opacity: 1 },
  visible: { 
    scaleX: [0, 1.2, 1.2],
    opacity: [1, 1, 0],
    transition: { duration: 0.8, ease: "easeOut" }
  }
}

const titleVariants = {
  hidden: { opacity: 0, y: 80, filter: "blur(30px)" },
  visible: { 
    opacity: 1, 
    y: 0,
    filter: "blur(0px)",
    transition: { duration: 0.6, delay: 0.3, ease: "easeOut" }
  }
}

function App() {
  const { i18n } = useTranslation()
  const [showIntro, setShowIntro] = useState(true)
  const [introDone, setIntroDone] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowIntro(false)
      setTimeout(() => setIntroDone(true), 400)
    }, 1800)
    return () => clearTimeout(timer)
  }, [])

  return (
    <BrowserRouter basename="/s3rlinux">
      <AnimatePresence mode="wait">
        {showIntro && (
          <motion.div
            key="intro"
            variants={introVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            style={{
              position: 'fixed', inset: 0, background: '#06060a', zIndex: 9999,
              display: 'flex', alignItems: 'center', justifyContent: 'center'
            }}
          >
            {/* Main slash - Judgement Cut style */}
            <motion.div
              variants={slashVariants}
              style={{
                position: 'absolute', width: '150%', height: '3px',
                background: 'linear-gradient(90deg, transparent, #00f0ff, #ff2d6a, #a855f7, transparent)',
                boxShadow: '0 0 50px #00f0ff, 0 0 100px #ff2d6a',
                rotate: '-12deg'
              }}
            />
            {/* Slower slash */}
            <motion.div
              variants={slashVariants}
              transition={{ delay: 0.15 }}
              style={{
                position: 'absolute', top: '52%', width: '150%', height: '2px',
                background: 'linear-gradient(90deg, transparent, #a855f7, transparent)',
                rotate: '-12deg'
              }}
            />
            {/* Title */}
            <motion.div variants={titleVariants} style={{
              fontSize: 'clamp(2.5rem, 10vw, 6rem)', fontWeight: 900,
              background: 'linear-gradient(135deg, #00f0ff, #a855f7, #ff2d6a)',
              WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent',
              fontFamily: 'Outfit, sans-serif'
            }}>
              S3RLINUX
              <motion.span
                animate={{ opacity: [0.3, 1, 0.3] }}
                transition={{ duration: 0.8, repeat: Infinity }}
                style={{
                  display: 'block', fontSize: 'clamp(0.8rem, 2vw, 1.2rem)',
                  color: '#ff2d6a', letterSpacing: '0.3em', marginTop: '0.5em',
                  WebkitTextFillColor: '#ff2d6a'
                }}
              >
                RAVE ALL NIGHT 🌈💀
              </motion.span>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {introDone && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.4 }}
          className="app"
        >
          <div className="grid-bg"></div>
          <div className="glow glow-1"></div>
          <div className="glow glow-2"></div>

          <div className="lang-switcher">
            {languages.map((lang) => (
              <motion.button
                key={lang.code}
                className={`lang-btn ${i18n.language === lang.code ? 'active' : ''}`}
                onClick={() => i18n.changeLanguage(lang.code)}
                whileHover={{ scale: 1.15 }}
                whileTap={{ scale: 0.95 }}
              >
                {lang.flag}
              </motion.button>
            ))}
          </div>

          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/download" element={<Download />} />
          </Routes>
        </motion.div>
      )}
    </BrowserRouter>
  )
}

export default App
