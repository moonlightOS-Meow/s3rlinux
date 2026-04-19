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

function App() {
  const { i18n } = useTranslation()
  const [showIntro, setShowIntro] = useState(true)
  const [introDone, setIntroDone] = useState(false)
  
  // Device detection
  const [isMobile, setIsMobile] = useState(false)
  
  useEffect(() => {
    const checkDevice = () => {
      setIsMobile(window.innerWidth < 768 || /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent))
    }
    checkDevice()
    window.addEventListener('resize', checkDevice)
    return () => window.removeEventListener('resize', checkDevice)
  }, [])

  useEffect(() => {
    const timer = setTimeout(() => { setShowIntro(false); setTimeout(() => setIntroDone(true), 400) }, 2000)
    return () => clearTimeout(timer)
  }, [])

  return (
    <BrowserRouter basename="/s3rlinux">
      <AnimatePresence mode="wait">
        {showIntro && (
          <motion.div key="intro" initial={{opacity:1}} animate={{opacity:1}} exit={{opacity:0}}
            style={{ position: 'fixed', inset: 0, background: '#000', zIndex: 9999, overflow: 'hidden' }}>
            
            {/* MASSIVE SLASHES - MOBILE FRIENDLY */}
            {/* SLASH 1 - BIG - responsive height */}
            <motion.div style={{ position: 'absolute', width: '200%', height: isMobile ? '6px' : '10px', background: '#00f0ff', top: '40%', boxShadow: '0 0 80px #00f0ff, 0 0 150px #fff' }}
              animate={{ x: ['-50%', '50%'], opacity: [1, 1, 0], transition: { duration: 0.15, ease: 'linear' } }}
            />
            {/* More slashes with stagger */}
            <motion.div style={{ position: 'absolute', width: '200%', height: isMobile ? '5px' : '8px', background: '#ff2d6a', top: '47%', boxShadow: '0 0 60px #ff2d6a' }}
              animate={{ x: ['50%', '-50%'], opacity: [1, 1, 0], transition: { duration: 0.12, delay: 0.05, ease: 'linear' } }}
            />
            <motion.div style={{ position: 'absolute', width: '200%', height: isMobile ? '4px' : '6px', background: '#a855f7', top: '54%', boxShadow: '0 0 50px #a855f7' }}
              animate={{ x: ['-50%', '50%'], opacity: [1, 1, 0], transition: { duration: 0.1, delay: 0.1, ease: 'linear' } }}
            />
            {/* Vertical slash */}
            <motion.div style={{ position: 'absolute', width: isMobile ? '5px' : '8px', height: '200%', background: '#fff', left: '48%', boxShadow: '0 0 60px #fff, 0 0 100px #00f0ff' }}
              animate={{ y: ['-50%', '50%'], opacity: [1, 1, 0], transition: { duration: 0.1, delay: 0.08 } }}
            />
            
            {/* TITLE - responsive with pulse glow */}
            <motion.div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', textAlign: 'center', zIndex: 10 }}
              initial={{ scale: 4, opacity: 0, filter: 'blur(30px)' }}
              animate={{ scale: [4, 0.9, 1.1, 1], opacity: 1, filter: 'blur(0px)', transition: { duration: 0.4, delay: 0.15 } }}
            >
              <motion.div 
                animate={{ textShadow: ['0 0 30px #00f0ff, 0 0 60px #00f0ff, 0 0 100px #ff2d6a', '0 0 50px #00f0ff, 0 0 80px #00f0ff, 0 0 120px #ff2d6a', '0 0 30px #00f0ff, 0 0 60px #00f0ff, 0 0 100px #ff2d6a'] }}
                transition={{ duration: 1, repeat: Infinity }}
                style={{ fontSize: 'clamp(2.5rem, 12vw, 10rem)', fontWeight: 900, color: '#fff' }}
              >
                S3RLINUX
              </motion.div>
              <motion.div 
                animate={{ opacity: [0.7, 1, 0.7] }}
                transition={{ duration: 0.8, repeat: Infinity }}
                style={{ fontSize: 'clamp(0.9rem, 2.5vw, 1.5rem)', color: '#ff2d6a', letterSpacing: '0.15em', marginTop: '0.2em', textShadow: '0 0 20px #ff2d6a' }}
              >
                RAVE ALL NIGHT 🌈💀
              </motion.div>
            </motion.div>
            
            {/* MEME BUBBLE - S3RL STYLE */}
            <motion.div 
              style={{ 
                position: 'absolute', 
                top: '8%', 
                left: '50%',
                transform: 'translateX(-50%)',
                zIndex: 100,
                textAlign: 'center'
              }}
              initial={{ scale: 0, opacity: 0, y: -50 }}
              animate={{ scale: [0, 1.15, 1], opacity: 1, y: 0, transition: { duration: 0.4, delay: 0.5, type: 'spring' } }}
            >
              <div style={{
                background: '#ff2d6a',
                color: '#fff',
                padding: '12px 20px',
                borderRadius: '20px',
                fontSize: 'clamp(0.7rem, 2vw, 1rem)',
                fontWeight: 700,
                boxShadow: '0 0 30px #ff2d6a, 0 0 50px #ff2d6a',
                border: '2px solid #fff'
              }}>
                S3RL IN MY SOUL XDDDDD
                <div style={{ position: 'absolute', bottom: '-10px', left: '50%', transform: 'translateX(-50%)', width: '0', height: '0', borderLeft: '10px solid transparent', borderRight: '10px solid transparent', borderTop: '10px solid #ff2d6a' }} />
              </div>
            </motion.div>
            
            {/* JUDGEMENT TEXT */}
            <motion.div style={{ position: 'absolute', inset: 0, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 'clamp(5rem, 22vw, 18rem)', fontWeight: 900, color: '#fff', textShadow: '0 0 50px #fff, 0 0 100px #00f0ff', zIndex: 99 }}
              initial={{ opacity: 0, scale: 6 }}
              animate={{ opacity: [0, 1, 1, 0], scale: [6, 1.1], transition: { duration: 0.5, delay: 0.12 } }}
            >
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
