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
    const timer = setTimeout(() => { setShowIntro(false); setTimeout(() => setIntroDone(true), 400) }, 2200)
    return () => clearTimeout(timer)
  }, [])

  return (
    <BrowserRouter basename="/s3rlinux">
      <AnimatePresence mode="wait">
        {showIntro && (
          <motion.div key="intro" initial={{opacity:1}} animate={{opacity:1}} exit={{opacity:0}}
            style={{ position: 'fixed', inset: 0, background: '#000', zIndex: 9999, overflow: 'hidden' }}>
            
            {/* SLASH 1 */}
            <motion.div style={{ position: 'absolute', width: '200%', height: device === 'mobile' ? '4px' : '10px', background: '#00f0ff', top: '42%', boxShadow: '0 0 80px #00f0ff' }}
              animate={{ x: ['-50%', '50%'], opacity: [1, 1, 0], transition: { duration: 0.18, ease: 'linear' } }}
            />
            {/* SLASH 2 */}
            <motion.div style={{ position: 'absolute', width: '200%', height: device === 'mobile' ? '3px' : '8px', background: '#ff2d6a', top: '49%', boxShadow: '0 0 60px #ff2d6a' }}
              animate={{ x: ['50%', '-50%'], opacity: [1, 1, 0], transition: { duration: 0.15, delay: 0.06, ease: 'linear' } }}
            />
            {/* SLASH 3 */}
            <motion.div style={{ position: 'absolute', width: '200%', height: device === 'mobile' ? '2px' : '6px', background: '#a855f7', top: '55%', boxShadow: '0 0 50px #a855f7' }}
              animate={{ x: ['-50%', '50%'], opacity: [1, 1, 0], transition: { duration: 0.12, delay: 0.12, ease: 'linear' } }}
            />
            {/* VERTICAL */}
            <motion.div style={{ position: 'absolute', width: device === 'mobile' ? '3px' : '6px', height: '200%', background: '#fff', left: '50%', transform: 'translateX(-50%)', boxShadow: '0 0 60px #fff, 0 0 100px #00f0ff' }}
              animate={{ y: ['-50%', '50%'], opacity: [1, 1, 0], transition: { duration: 0.1, delay: 0.1 } }}
            />
            
            {/* TITLE - CENTERED */}
            <motion.div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', textAlign: 'center', zIndex: 10, width: '90%' }}
              initial={{ scale: 4, opacity: 0, filter: 'blur(30px)' }}
              animate={{ scale: [4, 0.9, 1.1, 1], opacity: 1, filter: 'blur(0px)', transition: { duration: 0.5, delay: 0.2 } }}
            >
              <motion.div animate={{ textShadow: ['0 0 30px #00f0ff', '0 0 50px #00f0ff', '0 0 30px #00f0ff'] }} transition={{ duration: 1.2, repeat: Infinity }}
                style={{ fontSize: device === 'mobile' ? 'clamp(2rem, 10vw, 4rem)' : 'clamp(3rem, 14vw, 10rem)', fontWeight: 900, color: '#fff' }}>
                S3RLINUX
              </motion.div>
              <motion.div animate={{ opacity: [0.6, 1, 0.6] }} transition={{ duration: 0.8, repeat: Infinity }}
                style={{ fontSize: device === 'mobile' ? 'clamp(0.7rem, 2vw, 1rem)' : 'clamp(1rem, 2.5vw, 1.5rem)', color: '#ff2d6a', letterSpacing: '0.15em', marginTop: '0.3em' }}>
                RAVE ALL NIGHT 🌈💀
              </motion.div>
            </motion.div>
            
            {/* S3RL MEME IMAGE - centered */}
            <motion.div style={{ position: 'absolute', top: device === 'mobile' ? '3%' : '5%', left: '50%', transform: 'translateX(-50%)', zIndex: 100 }}
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: [0, 1.1, 1], opacity: 1, transition: { duration: 0.35, delay: 0.45 } }}
            >
              <img src="https://i.imgur.com/T15Te00h.gif" alt="S3RL Meme" 
                style={{ 
                  maxWidth: device === 'mobile' ? '150px' : '220px', 
                  borderRadius: '15px',
                  boxShadow: '0 0 20px rgba(255,45,106,0.5), 0 0 40px rgba(168,85,247,0.3)',
                  border: '3px solid #ff2d6a'
                }} 
              />
            </motion.div>
            
            {/* JUDGEMENT */}
            <motion.div style={{ position: 'absolute', inset: 0, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: device === 'mobile' ? '2rem' : 'clamp(4rem, 22vw, 16rem)', fontWeight: 900, color: '#fff', textShadow: '0 0 40px #fff, 0 0 80px #00f0ff', zIndex: 99 }}
              initial={{ opacity: 0, scale: 6 }}
              animate={{ opacity: [0, 1, 1, 0], scale: [6, 1.1], transition: { duration: 0.6, delay: 0.18 } }}
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
