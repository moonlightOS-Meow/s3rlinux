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

function useDevice() {
  const [d, setD] = useState('desktop')
  useEffect(() => {
    const check = () => {
      const w = window.innerWidth
      if (w < 768 || /Android|iPhone|iPad|iPod/i.test(navigator.userAgent)) setD('mobile')
      else setD('desktop')
    }
    check()
    window.addEventListener('resize', check)
    return () => window.removeEventListener('resize', check)
  }, [])
  return d
}

function App() {
  const { i18n } = useTranslation()
  const [showIntro, setShowIntro] = useState(true)
  const [introDone, setIntroDone] = useState(false)
  const device = useDevice()

  useEffect(() => {
    // Longer intro so everything is visible
    const timer = setTimeout(() => { setShowIntro(false); setTimeout(() => setIntroDone(true), 500) }, 3500)
    return () => clearTimeout(timer)
  }, [])

  return (
    <BrowserRouter basename="/s3rlinux">
      <AnimatePresence mode="wait">
        {showIntro && (
          <motion.div key="intro" initial={{opacity:1}} animate={{opacity:1}} exit={{opacity:0}}
            style={{ position: 'fixed', inset: 0, background: '#000', zIndex: 9999, overflow: 'hidden' }}>
            
            {/* SLASH 1 */}
            <motion.div style={{ position: 'absolute', left: -100, right: -100, height: device === 'mobile' ? '4px' : '10px', background: '#00f0ff', top: '33%', margin: '0 auto', boxShadow: '0 0 80px #00f0ff' }}
              animate={{ x: [0, 100], opacity: [1, 1, 0], transition: { duration: 0.25, ease: 'linear' } }}
            />
            {/* SLASH 2 */}
            <motion.div style={{ position: 'absolute', left: -100, right: -100, height: device === 'mobile' ? '3px' : '8px', background: '#ff2d6a', top: '38%', margin: '0 auto', boxShadow: '0 0 60px #ff2d6a' }}
              animate={{ x: [0, -100], opacity: [1, 1, 0], transition: { duration: 0.2, delay: 0.1, ease: 'linear' } }}
            />
            {/* SLASH 3 */}
            <motion.div style={{ position: 'absolute', left: -100, right: -100, height: device === 'mobile' ? '2px' : '6px', background: '#a855f7', top: '43%', margin: '0 auto', boxShadow: '0 0 50px #a855f7' }}
              animate={{ x: [0, 100], opacity: [1, 1, 0], transition: { duration: 0.15, delay: 0.2, ease: 'linear' } }}
            />
            {/* VERTICAL */}
            <motion.div style={{ position: 'absolute', left: '50%', marginLeft: device === 'mobile' ? '-2px' : '-3px', top: 0, bottom: 0, width: device === 'mobile' ? '4px' : '6px', background: '#fff', boxShadow: '0 0 60px #fff, 0 0 100px #00f0ff' }}
              animate={{ y: [0, 50], opacity: [1, 1, 0], transition: { duration: 0.15, delay: 0.15 } }}
            />
            
            {/* TITLE */}
            <motion.div style={{
              position: 'absolute',
              top: device === 'mobile' ? '48%' : '50%',
              left: 0,
              right: 0,
              margin: 'auto',
              transform: 'translateY(-50%)',
              textAlign: 'center',
              zIndex: 10,
              padding: '0 10px'
            }}
              initial={{ scale: 4, opacity: 0, filter: 'blur(30px)' }}
              animate={{ scale: [4, 0.9, 1.1, 1], opacity: 1, filter: 'blur(0px)', transition: { duration: 0.6, delay: 0.25 } }}
            >
              <motion.div animate={{ textShadow: ['0 0 30px #00f0ff', '0 0 50px #00f0ff', '0 0 30px #00f0ff'] }} transition={{ duration: 1.2, repeat: Infinity }}
                style={{ fontSize: device === 'mobile' ? '2rem' : 'clamp(3rem, 14vw, 10rem)', fontWeight: 900, color: '#fff', textAlign: 'center', width: '100%' }}>
                S3RLINUX
              </motion.div>
              <motion.div animate={{ opacity: [0.6, 1, 0.6] }} transition={{ duration: 0.8, repeat: Infinity }}
                style={{ fontSize: device === 'mobile' ? '0.75rem' : 'clamp(1rem, 2.5vw, 1.5rem)', color: '#ff2d6a', letterSpacing: '0.15em', marginTop: '0.2em', textAlign: 'center' }}>
                RAVE ALL NIGHT 🌈💀
              </motion.div>
            </motion.div>
            
            {/* BIGGER MEME IMAGE - centered */}
            <motion.div style={{ position: 'absolute', top: device === 'mobile' ? '8px' : '15px', left: 0, right: 0, margin: '0 auto', display: 'flex', justifyContent: 'center', zIndex: 100, width: 'fit-content' }}
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: [0, 1.1, 1], opacity: 1, transition: { duration: 0.4, delay: 0.5 } }}
            >
              <img src="https://i.imgur.com/T15Te00h.gif" alt="S3RL Meme" 
                style={{ 
                  width: device === 'mobile' ? '140px' : '220px', 
                  borderRadius: '12px',
                  boxShadow: '0 0 30px rgba(255,45,106,0.7), 0 0 50px rgba(168,85,247,0.5)',
                  border: '3px solid #ff2d6a'
                }} 
              />
            </motion.div>
            
            {/* BIGGER JUDGEMENT - SLOWER and more visible */}
            <motion.div 
              style={{ position: 'absolute', inset: 0, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: device === 'mobile' ? '2rem' : 'clamp(4rem, 22vw, 16rem)', fontWeight: 900, color: '#fff', textShadow: '0 0 50px #fff, 0 0 100px #00f0ff', zIndex: 99 }}
              initial={{ opacity: 0, scale: 5 }}
              animate={{ opacity: [0, 1, 1, 1, 0], scale: [5, 1.2], transition: { duration: 1.2, delay: 0.3 } }}
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
