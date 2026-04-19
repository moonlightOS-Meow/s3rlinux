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
            
            {/* MASSIVE SLASHES */}
            <motion.div style={{ position: 'absolute', width: '200%', height: '10px', background: '#00f0ff', top: '40%', boxShadow: '0 0 80px #00f0ff, 0 0 150px #fff' }}
              animate={{ x: ['-50%', '50%'], opacity: [1, 1, 0], transition: { duration: 0.15, ease: 'linear' } }}
            />
            <motion.div style={{ position: 'absolute', width: '200%', height: '8px', background: '#ff2d6a', top: '47%', boxShadow: '0 0 60px #ff2d6a' }}
              animate={{ x: ['50%', '-50%'], opacity: [1, 1, 0], transition: { duration: 0.12, delay: 0.05, ease: 'linear' } }}
            />
            <motion.div style={{ position: 'absolute', width: '200%', height: '6px', background: '#a855f7', top: '54%', boxShadow: '0 0 50px #a855f7' }}
              animate={{ x: ['-50%', '50%'], opacity: [1, 1, 0], transition: { duration: 0.1, delay: 0.1, ease: 'linear' } }}
            />
            <motion.div style={{ position: 'absolute', width: '200%', height: '4px', background: '#fff', top: '61%', boxShadow: '0 0 40px #fff' }}
              animate={{ x: ['50%', '-50%'], opacity: [1, 1, 0], transition: { duration: 0.08, delay: 0.15, ease: 'linear' } }}
            />
            <motion.div style={{ position: 'absolute', width: '8px', height: '200%', background: '#fff', left: '48%', boxShadow: '0 0 60px #fff, 0 0 100px #00f0ff' }}
              animate={{ y: ['-50%', '50%'], opacity: [1, 1, 0], transition: { duration: 0.1, delay: 0.08 } }}
            />
            
            {/* TITLE */}
            <motion.div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', textAlign: 'center', zIndex: 10 }}
              initial={{ scale: 4, opacity: 0, filter: 'blur(30px)' }}
              animate={{ scale: [4, 0.9, 1.1, 1], opacity: 1, filter: 'blur(0px)', transition: { duration: 0.4, delay: 0.15 } }}
            >
              <div style={{ fontSize: 'clamp(3rem, 14vw, 10rem)', fontWeight: 900, color: '#fff', textShadow: '0 0 30px #00f0ff, 0 0 60px #00f0ff, 0 0 100px #ff2d6a' }}>
                S3RLINUX
              </div>
              <div style={{ fontSize: 'clamp(1rem, 2.5vw, 1.5rem)', color: '#ff2d6a', letterSpacing: '0.15em', marginTop: '0.2em', textShadow: '0 0 20px #ff2d6a' }}>
                RAVE ALL NIGHT 🌈💀
              </div>
            </motion.div>
            
            {/* MEME BUBBLE WITH IMAGE */}
            <motion.div style={{ position: 'absolute', top: '8%', right: '5%', zIndex: 100 }}
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: [0, 1.15, 1], opacity: 1, transition: { duration: 0.3, delay: 0.5 } }}
            >
              <img 
                src="/meme.jpg" 
                alt="DMC Meme" 
                style={{ 
                  width: 'clamp(150px, 25vw, 280px)', 
                  borderRadius: '15px',
                  boxShadow: '0 0 30px rgba(255,255,255,0.4)',
                  border: '3px solid #fff'
                }} 
              />
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
