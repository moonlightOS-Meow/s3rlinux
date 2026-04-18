import { useState, useEffect } from 'react'
import './index.css'

function App() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <div className="app">
      <div className="grid-bg"></div>
      <div className="glow glow-1"></div>
      <div className="glow glow-2"></div>

      {/* HEADER */}
      <header className={`header ${scrolled ? 'scrolled' : ''}`}>
        <div className="header-content">
          <div className="logo">
            <span className="logo-s3rl">S3RL</span>
            <span className="logo-linux">LINUX</span>
            <span className="logo-badge">v2.0</span>
          </div>
          
          <button className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)}>
            <span></span><span></span><span></span>
          </button>

          <nav className={`nav ${menuOpen ? 'open' : ''}`}>
            <a href="#about" onClick={() => setMenuOpen(false)}>ABOUT</a>
            <a href="#features" onClick={() => setMenuOpen(false)}>FEATURES</a>
            <a href="#download" onClick={() => setMenuOpen(false)}>DOWNLOAD</a>
            <a href="https://github.com/moonlightOS-Meow/s3rlinux" target="_blank" rel="noopener">GITHUB</a>
          </nav>
        </div>
      </header>

      {/* HERO */}
      <section className="hero">
        <div className="hero-content">
          <div className="badge">
            <span className="badge-dot"></span>
            ARCH LINUX BASED • pearOS ERA
          </div>
          
          <h1 className="hero-title">
            <span className="title-main">S3RLINUX</span>
          </h1>
          
          <p className="hero-tagline">RAVE ALL NIGHT 🌈💀</p>
          
          <p className="hero-desc">
            The RAVE-themed Arch Linux distribution. Custom branding, neon aesthetics, 
            pure chaos. No handholding. Just vibes.
          </p>

          <div className="hero-btns">
            <a href="#download" className="btn btn-primary">⬇ DOWNLOAD</a>
            <a href="#features" className="btn btn-secondary">EXPLORE</a>
          </div>

          <div className="hero-stats">
            <div className="stat">
              <span className="stat-value">2.0</span>
              <span className="stat-label">VERSION</span>
            </div>
            <div className="stat-div"></div>
            <div className="stat">
              <span className="stat-value">ARCH</span>
              <span className="stat-label">BASE</span>
            </div>
            <div className="stat-div"></div>
            <div className="stat">
              <span className="stat-value">🌈</span>
              <span className="stat-label">THEME</span>
            </div>
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section id="about" className="section">
        <div className="container">
          <h2><span className="accent">//</span> WHAT IS S3RLINUX?</h2>
          <div className="cards">
            <div className="card">
              <div className="card-icon">🎛️</div>
              <h3>RAVE AESTHETICS</h3>
              <p>Neon colors, cyberpunk vibes, terminal with personality. Your system should feel like a festival.</p>
            </div>
            <div className="card">
              <div className="card-icon">🖥️</div>
              <h3>ARCH POWER</h3>
              <p>Built on Arch Linux. Rolling release, bleeding edge, complete control. No bloat.</p>
            </div>
            <div className="card">
              <div className="card-icon">💀</div>
              <h3>CHAOS MODE</h3>
              <p>For those who break systems to fix them. Custom DE, terminal configs, and memes.</p>
            </div>
          </div>
        </div>
      </section>

      {/* FEATURES */}
      <section id="features" className="section dark">
        <div className="container">
          <h2><span className="accent">//</span> FEATURES</h2>
          <div className="features">
            <div className="feature">
              <span className="feature-num">01</span>
              <div>
                <h3>Custom Desktop Environment</h3>
                <p>Hyprland with S3RL-themed configs, custom bar, animated wallpapers</p>
              </div>
            </div>
            <div className="feature">
              <span className="feature-num">02</span>
              <div>
                <h3>Neon Terminal</h3>
                <p>Zsh with powerlevel10k, S3RL theme, custom aliases and functions</p>
              </div>
            </div>
            <div className="feature">
              <span className="feature-num">03</span>
              <div>
                <h3>pearOS Integration</h3>
                <p>Latest pearOS apps and utilities, seamless system integration</p>
              </div>
            </div>
            <div className="feature">
              <span className="feature-num">04</span>
              <div>
                <h3>AUR Support</h3>
                <p>Full access to AUR with custom S3RL package repository</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* DOWNLOAD */}
      <section id="download" className="section">
        <div className="container">
          <h2><span className="accent">//</span> GET S3RLINUX</h2>
          <div className="download-cards">
            <div className="download-card">
              <div className="version">STABLE</div>
              <h3>S3RLINUX v2.0</h3>
              <p className="info">Arch-based • pearOS Era</p>
              <a href="https://github.com/moonlightOS-Meow/s3rlinux/releases" className="btn btn-primary">
                DOWNLOAD ISO <span className="size">~2.5GB</span>
              </a>
            </div>
            <div className="download-card beta">
              <div className="version">BETA</div>
              <h3>NIGHTLY</h3>
              <p className="info">Latest builds • May break</p>
              <a href="https://github.com/moonlightOS-Meow/s3rlinux/releases" className="btn btn-secondary">
                NIGHTLY <span className="size">~2.6GB</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="footer">
        <div className="footer-logo">
          <span>S3RL</span><span>LINUX</span>
        </div>
        <p className="tagline">RAVE ALL NIGHT 🌈💀</p>
        <div className="footer-links">
          <a href="https://github.com/moonlightOS-Meow/s3rlinux" target="_blank">GITHUB</a>
          <a href="https://github.com/moonlightOS-Meow/s3rlinux/wiki" target="_blank">WIKI</a>
          <a href="#">DISCORD</a>
        </div>
        <p className="copy">© 2026 S3RLINUX PROJECT • S3RLL v2.0</p>
      </footer>
    </div>
  )
}

export default App