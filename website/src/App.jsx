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
  const [shatter, setShatter] = useState(false)
  const device = useDevice()

  useEffect(() => {
    const timer = setTimeout(() => { 
      setShatter(true)
      setTimeout(() => { setShowIntro(false); setTimeout(() => setIntroDone(true), 700) }, 1200) 
    }, 3000)
    return () => clearTimeout(timer)
  }, [])

  // Triangular glass shard pieces - realistic glass breaks
  const shards = [
    { id: 1, points: '0,0 80,20 60,80', x: '10%', y: '10%', rotate: -25, vx: -200, vy: 50 },
    { id: 2, points: '80,20 100,0 100,60 60,80', x: '25%', y: '5%', rotate: 15, vx: -150, vy: 80 },
    { id: 3, points: '0,0 60,80 0,100', x: '5%', y: '30%', rotate: -40, vx: -180, vy: 120 },
    { id: 4, points: '60,80 100,60 100,100 40,100', x: '30%', y: '25%', rotate: 30, vx: -100, vy: 100 },
    { id: 5, points: '0,100 40,100 60,160', x: '15%', y: '50%', rotate: -20, vx: -220, vy: 180 },
    { id: 6, points: '100,0 100,60 160,20', x: '60%', y: '10%', rotate: 45, vx: 200, vy: 60 },
    { id: 7, points: '100,60 160,20 180,80 100,100', x: '65%', y: '25%', rotate: -35, vx: 180, vy: 90 },
    { id: 8, points: '100,60 100,100 180,80', x: '55%', y: '35%', rotate: 25, vx: 150, vy: 110 },
    { id: 9, points: '40,100 100,100 80,160', x: '35%', y: '55%', rotate: -30, vx: -80, vy: 150 },
    { id: 10, points: '100,100 180,80 180,140 80,160', x: '60%', y: '50%', rotate: 40, vx: 200, vy: 170 },
    { id: 11, points: '80,160 180,140 160,200', x: '50%', y: '70%', rotate: -15, vx: 100, vy: 200 },
    { id: 12, points: '0,100 0,160 40,200', x: '10%', y: '80%', rotate: -50, vx: -250, vy: 250 },
    { id: 13, points: '180,80 180,140 220,100', x: '80%', y: '40%', rotate: 55, vx: 280, vy: 130 },
    { id: 14, points: '180,140 220,100 200,180 160,200', x: '75%', y: '65%', rotate: -45, vx: 220, vy: 220 },
    { id: 15, points: '0,160 40,200 20,250', x: '5%', y: '90%', rotate: -60, vx: -180, vy: 300 },
    { id: 16, points: '80,160 160,200 100,250', x: '45%', y: '85%', rotate: 20, vx: 50, vy: 280 },
  ]

  return (
    <BrowserRouter basename="/s3rlinux">
      <AnimatePresence mode="wait">
        {showIntro && (
          <motion.div key="intro" initial={{opacity:1}} animate={{opacity:1}} exit={{opacity:0}}
            style={{ position: 'fixed', inset: 0, background: '#000', zIndex: 9999, overflow: 'hidden' }}>
            
            {/* GLASS CRACK LINES - appear before shatter */}
            <svg style={{ position: 'absolute', inset: 0, zIndex: 45, width: '100%', height: '100%', pointerEvents: 'none' }}>
              <motion.path d="M0,0 L300,400" stroke="rgba(255,255,255,0.5)" strokeWidth="2" initial={{ opacity: 0 }} animate={{ opacity: [0, 0.8, 0] }} transition={{ duration: 0.3 }} />
              <motion.path d="M400,0 L100,300" stroke="rgba(255,255,255,0.5)" strokeWidth="2" initial={{ opacity: 0 }} animate={{ opacity: [0, 0.8, 0] }} transition={{ duration: 0.3, delay: 0.1 }} />
              <motion.path d="M100,100 L300,200 L200,400" stroke="rgba(255,255,255,0.4)" strokeWidth="1.5" fill="none" initial={{ opacity: 0 }} animate={{ opacity: [0, 0.7, 0] }} transition={{ duration: 0.4, delay: 0.15 }} />
            </svg>
            
            {/* REAL GLASS SHARDS - triangular, like real broken glass */}
            {shards.map((shard) => (
              <motion.div
                key={shard.id}
                style={{
                  position: 'absolute',
                  left: shard.x,
                  top: shard.y,
                  zIndex: 50,
                  width: device === 'mobile' ? '50px' : '80px',
                  height: device === 'mobile' ? '60px' : '100px',
                }}
                initial={{ 
                  opacity: 0.9,
                  rotate: 0,
                  scale: 1
                }}
                animate={shatter ? {
                  x: shard.vx * (device === 'mobile' ? 1.2 : 1.5),
                  y: shard.vy * (device === 'mobile' ? 1.5 : 2),
                  rotate: shard.rotate * 4,
                  opacity: [0.9, 0],
                  scale: [1, 0.5],
                  transition: { duration: 0.5 + Math.random() * 0.3, ease: 'easeIn' }
                } : {
                  rotate: shard.rotate,
                  transition: { duration: 0.2 }
                }}
              >
                <svg width="100%" height="100%" viewBox="0 0 100 100">
                  <polygon 
                    points={shard.points} 
                    fill="rgba(255,255,255,0.15)" 
                    stroke="rgba(255,255,255,0.4)" 
                    strokeWidth="1"
                  />
                </svg>
              </motion.div>
            ))}
            
            {/* GLASS SHINE REFLECTION */}
            <motion.div style={{ position: 'absolute', left: '20%', top: '20%', width: '30%', height: '60%', background: 'linear-gradient(135deg, rgba(255,255,255,0.2) 0%, transparent 50%)', zIndex: 46 }}
              animate={shatter ? { opacity: [0.5, 0], x: [0, -50], y: [0, 100], transition: { duration: 0.4 } } : { opacity: 0.5 }}
            />
            
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
              left: 0, right: 0, margin: 'auto',
              transform: 'translateY(-50%)',
              textAlign: 'center',
              zIndex: 10,
              padding: '0 10px'
            }}
              initial={{ scale: 4, opacity: 0, filter: 'blur(30px)' }}
              animate={{ scale: [4, 0.9, 1.1, 1], opacity: 1, filter: 'blur(0px)', transition: { duration: 0.6, delay: 0.25 } }}
            >
              <motion.div animate={{ textShadow: ['0 0 30px #00f0ff', '0 0 50px #00f0ff', '0 0 30px #00f0ff'] }} transition={{ duration: 1.2, repeat: Infinity }}
                style={{ fontSize: device === 'mobile' ? '2rem' : 'clamp(3rem, 14vw, 10rem)', fontWeight: 900, color: '#fff', textAlign: 'center' }}>
                S3RLINUX
              </motion.div>
              <motion.div animate={{ opacity: [0.6, 1, 0.6] }} transition={{ duration: 0.8, repeat: Infinity }}
                style={{ fontSize: device === 'mobile' ? '0.75rem' : 'clamp(1rem, 2.5vw, 1.5rem)', color: '#ff2d6a', letterSpacing: '0.15em', marginTop: '0.2em' }}>
                RAVE ALL NIGHT 🌈💀
              </motion.div>
            </motion.div>
            
            {/* MEME */}
            <motion.div style={{ position: 'absolute', top: device === 'mobile' ? '8px' : '15px', left: 0, right: 0, margin: '0 auto', display: 'flex', justifyContent: 'center', zIndex: 100 }}
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: [0, 1.1, 1], opacity: 1, transition: { duration: 0.4, delay: 0.5 } }}
            >
              <img src="https://i.imgur.com/T15Te00h.gif" alt="S3RL Meme" 
                style={{ width: device === 'mobile' ? '140px' : '220px', borderRadius: '12px', boxShadow: '0 0 30px rgba(255,45,106,0.7)', border: '3px solid #ff2d6a' }} 
              />
            </motion.div>
            
            {/* JUDGEMENT */}
            <motion.div 
              style={{ position: 'absolute', inset: 0, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: device === 'mobile' ? '2rem' : 'clamp(4rem, 22vw, 16rem)', fontWeight: 900, color: '#fff', textShadow: '0 0 50px #fff, 0 0 100px #00f0ff', zIndex: 99 }}
              initial={{ opacity: 0, scale: 5 }}
              animate={{ opacity: [0, 1, 1, 1, 0], scale: [5, 1.2], transition: { duration: 1.0, delay: 0.3 } }}
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
