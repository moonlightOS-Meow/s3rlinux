import { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import { motion } from 'framer-motion'

export default function Header() {
  const { t } = useTranslation()
  const [menuOpen, setMenuOpen] = useState(false)
  const location = useLocation()

  const isActive = (path) => location.pathname === path

  return (
    <motion.header 
      className={`header ${menuOpen ? 'open' : ''}`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="header-content">
        <Link to="/" className="logo">
          <span className="logo-s3rl">S3RL</span>
          <span className="logo-linux">LINUX</span>
          <span className="logo-badge">v2.0</span>
        </Link>
        
        <button className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)}>
          <span></span><span></span><span></span>
        </button>

        <nav className={`nav ${menuOpen ? 'open' : ''}`}>
          <Link to="/" className={isActive('/') ? 'active' : ''} onClick={() => setMenuOpen(false)}>{t('nav.about')}</Link>
          <Link to="/#features" className={isActive('/#features') ? 'active' : ''} onClick={() => setMenuOpen(false)}>{t('nav.features')}</Link>
          <Link to="/download" className={isActive('/download') ? 'active' : ''} onClick={() => setMenuOpen(false)}>{t('nav.download')}</Link>
          <a href="https://github.com/moonlightOS-Meow/s3rlinux" target="_blank" rel="noopener">{t('nav.github')}</a>
        </nav>
      </div>
    </motion.header>
  )
}