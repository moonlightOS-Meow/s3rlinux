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

// INTENSE JUDGEMENT CUT
const slash1 = {
  hidden: { x: '-110%' },
  visible: { x: ['-110%', '110%', '110%'], opacity: [0, 1, 0], transition: { duration: 0.25, times: [0, 0.3, 1] } }
}

const slash2 = {
  hidden: { x: '110%' },
  visible: { x: ['110%', '-110%', '-110%'], opacity: [0, 1, 0], transition: { duration: 0.2, delay: 0.08, times: [0, 0.35, 1] } }
}

const slashV = {
  hidden: { scaleY: 0 },
  visible: { scaleY: [0, 2, 2], opacity: [0, 1, 0], transition: { duration: 0.15, delay: 0.15, times: [0, 0.4, 1] } }
}

const slashDiag1 = {
  hidden: { scaleX: 0 },
  visible: { scaleX: [0, 1.8, 1.8], opacity: [0, 1, 0], transition: { duration: 0.2, delay: 0.03 }, rotate: '28deg' } 
}

const slashDiag2 = {
  hidden: { scaleX: 0 },
  visible: { scaleX: [0, 1.8, 1.8], opacity: [0, 1, 0], transition: { duration: 0.18, delay: 0.12 }, rotate: '-28deg' }
}

const titleSlam = {
  hidden: { scale: 4, opacity: 0, filter: 'blur(40px)', y: -150 },
  visible: { scale: [4, 0.8, 1.15, 1], opacity: 1, filter: ['blur(40px)', 'blur(8px)', 'blur(2px)', 'blur(0px)'], y: 0, transition: { duration: 0.5, delay: 0.25, times: [0, 0.4, 0.7, 1] } }
}

const subtitleSlam = {
  hidden: { opacity: 0, y: 40, scale: 0.6 },
  visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.3, delay: 0.55 } }
}

const introExit = {
  exit: { opacity: 0, scale: 1.05, transition: { duration: 0.25 } }
}

function App() {
  const { i18n } = useTranslation()
  const [showIntro, setShowIntro] = useState(true)
  const [introDone, setIntroDone] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => { setShowIntro(false); setTimeout(() => setIntroDone(true), 400) }, 2500)
    return () => clearTimeout(timer)
  }, [])

  return (
    <BrowserRouter basename="/s3rlinux">
      <AnimatePresence mode="wait">
        {showIntro && (
          <motion.div key="intro" variants={introExit} initial="hidden" animate="visible" exit="exit"
            style={{ position: 'fixed', inset: 0, background: '#000', zIndex: 9999, display: 'flex', alignItems: 'center', justifyContent: 'center', overflow: 'hidden' }}>
            
            <motion.div variants={slash1} style={{ position: 'absolute', width: '100%', height: '6px', background: 'linear-gradient(90deg, transparent, #00f0ff, #fff, #00f0ff)', boxShadow: '0 0 40px #00f0ff, 0 0 80px #00f0ff, 0 0 120px #ff2d6a', top: '43%' }} />
            <motion.div variants={slash2} style={{ position: 'absolute', width: '100%', height: '4px', background: 'linear-gradient(90deg, #ff2d6a, #fff, #a855f7)', boxShadow: '0 0 30px #ff2d6a, 0 0 60px #a855f7', top: '50%' }} />
            <motion.div variants={slashDiag1} style={{ position: 'absolute', width: '160%', height: '3px', background: 'linear-gradient(90deg, transparent, #00f0ff, #fff)', boxShadow: '0 0 25px #00f0ff', rotate: '28deg' }} />
            <motion.div variants={slashDiag2} style={{ position: 'absolute', width: '160%', height: '2px', background: 'linear-gradient(90deg, #a855f7, #fff)', boxShadow: '0 0 25px #a855f7', rotate: '-28deg' }} />
            <motion.div variants={slashV} style={{ position: 'absolute', width: '4px', height: '160%', background: 'linear-gradient(180deg, transparent, #ff2d6a, #fff, #ff2d6a)', boxShadow: '0 0 40px #ff2d6a', left: '48%' }} />
            
            <motion.div variants={titleSlam} style={{ position: 'relative', zIndex: 10 }}>
              <motion.div style={{ fontSize: 'clamp(3rem, 16vw, 12rem)', fontWeight: 900, fontFamily: 'Outfit, sans-serif', textShadow: '4px 0 0 #00f0ff, -4px 0 0 #ff2d6a, 8px 0 0 #00f0ff, -8px 0 0 #ff2d6a, 0 0 50px #00f0ff, 0 0 100px #00f0ff', color: '#fff' }}>
                S3RLINUX
              </motion.div>
              <motion.div variants={subtitleSlam} style={{ fontSize: 'clamp(1rem, 3vw, 1.8rem)', fontWeight: 700, color: '#ff2d6a', letterSpacing: '0.3em', textAlign: 'center', marginTop: '0.3em', textShadow: '0 0 25px #ff2d6a, 0 0 50px #ff2d6a' }}>
                RAVE ALL NIGHT 🌈💀
              </motion.div>
            </motion.div>
            
            <motion.div initial={{ opacity: 0, scale: 6 }} animate={{ opacity: [0, 1, 1, 0], scale: [6, 1], transition: { duration: 0.7, delay: 0.2 } }}
              style={{ position: 'absolute', fontSize: 'clamp(5rem, 25vw, 18rem)', fontWeight: 900, color: '#fff', textShadow: '0 0 60px #fff, 0 0 120px #00f0ff', zIndex: 100 }}>
              JUDGEMENT
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {introDone && (
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.3 }} className="app">
          <div className="grid-bg"></div>
          <div className="glow glow-1"></div>
          <div className="glow glow-2"></div>
          <div className="lang-switcher">
            {languages.map((lang) => (
              <motion.button key={lang.code} className={`lang-btn ${i18n.language === lang.code ? 'active' : ''}`} onClick={() => i18n.changeLanguage(lang.code)}
                whileHover={{ scale: 1.25, rotate: 8 }} whileTap={{ scale: 0.85 }}>
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
