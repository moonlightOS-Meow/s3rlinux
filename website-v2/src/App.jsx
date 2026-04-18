import { useState, useEffect } from 'react'
import './App.css'

function App() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <div className="app">
      {/* GRID BACKGROUND */}
      <div className="grid-bg"></div>
      <div className="glow-orb glow-1"></div>
      <div className="glow-orb glow-2"></div>

      {/* HEADER */}
      <header className={`header ${scrolled ? 'header-scrolled' : ''}`}>
        <div className="header-content">
          <div className="logo">
            <span className="logo-s3rl">S3RL</span>
            <span className="logo-linux">LINUX</span>
            <span className="logo-badge">v2.0</span>
          </div>
          
          <button className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)}>
            <span></span>
            <span></span>
            <span></span>
          </button>

          <nav className={`nav ${menuOpen ? 'nav-open' : ''}`}>
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
          <div className="hero-badge">
            <span className="badge-dot"></span>
            ARCH LINUX BASED • pearOS ERA
          </div>
          
          <h1 className="hero-title">
            <span className="title-main">S3RLINUX</span>
            <span className="title-sub">v2.0</span>
          </h1>
          
          <p className="hero-tagline">RAVE ALL NIGHT 🌈💀</p>
          
          <p className="hero-desc">
            The RAVE-themed Arch Linux distribution. Custom branding, neon aesthetics, 
            pure chaos. No handholding. Just vibes.
          </p>

          <div className="hero-buttons">
            <a href="#download" className="btn btn-primary">
              <span className="btn-icon">⬇</span>
              DOWNLOAD ISO
            </a>
            <a href="#features" className="btn btn-secondary">
              EXPLORE
            </a>
          </div>

          <div className="hero-stats">
            <div className="stat">
              <span className="stat-value">2.0</span>
              <span className="stat-label">VERSION</span>
            </div>
            <div className="stat-divider"></div>
            <div className="stat">
              <span className="stat-value">ARCH</span>
              <span className="stat-label">BASE</span>
            </div>
            <div className="stat-divider"></div>
            <div className="stat">
              <span className="stat-value">🌈</span>
              <span className="stat-label">THEME</span>
            </div>
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section id="about" className="section">
        <div className="section-content">
          <h2 className="section-title">
            <span className="title-accent">//</span> WHAT IS S3RLINUX?
          </h2>
          <div className="about-grid">
            <div className="about-card">
              <div className="card-icon">🎛️</div>
              <h3>RAVE AESTHETICS</h3>
              <p>Neon colors, cyberpunk vibes, terminal with personality. Your system should feel like a festival.</p>
            </div>
            <div className="about-card">
              <div className="card-icon">🖥️</div>
              <h3>ARCH POWER</h3>
              <p>Built on Arch Linux. Rolling release, bleeding edge, complete control. No bloat.</p>
            </div>
            <div className="about-card">
              <div className="card-icon">💀</div>
              <h3>CHAOS MODE</h3>
              <p>For those who break systems to fix them. Custom DE, terminal configs, and memes.</p>
            </div>
          </div>
        </div>
      </section>

      {/* FEATURES */}
      <section id="features" className="section section-dark">
        <div className="section-content">
          <h2 className="section-title">
            <span className="title-accent">//</span> FEATURES
          </h2>
          <div className="features-list">
            <div className="feature-item">
              <span className="feature-num">01</span>
              <div className="feature-content">
                <h3>Custom Desktop Environment</h3>
                <p>Hyprland with S3RL-themed configs, custom bar, animated wallpapers</p>
              </div>
            </div>
            <div className="feature-item">
              <span className="feature-num">02</span>
              <div className="feature-content">
                <h3>Neon Terminal</h3>
                <p>Zsh with powerlevel10k, S3RL theme, custom aliases and functions</p>
              </div>
            </div>
            <div className="feature-item">
              <span className="feature-num">03</span>
              <div className="feature-content">
                <h3>pearOS Integration</h3>
                <p>Latest pearOS apps and utilities, seamless system integration</p>
              </div>
            </div>
            <div className="feature-item">
              <span className="feature-num">04</span>
              <div className="feature-content">
                <h3>AUR Support</h3>
                <p>Full access to AUR with custom S3RL package repository</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* DOWNLOAD */}
      <section id="download" className="section">
        <div className="section-content">
          <h2 className="section-title">
            <span className="title-accent">//</span> GET S3RLINUX
          </h2>
          <div className="download-cards">
            <div className="download-card">
              <div className="download-version">STABLE</div>
              <h3 className="download-title">S3RLINUX v2.0</h3>
              <p className="download-info">Arch-based • pearOS Era</p>
              <a href="#" className="btn btn-primary btn-download">
                DOWNLOAD ISO
                <span className="download-size">~2.5GB</span>
              </a>
            </div>
            <div className="download-card download-card-beta">
              <div className="download-version">BETA</div>
              <h3 className="download-title">NIGHTLY</h3>
              <p className="download-info">Latest builds • May break</p>
              <a href="#" className="btn btn-secondary btn-download">
                NIGHTLY
                <span className="download-size">~2.6GB</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="footer">
        <div className="footer-content">
          <div className="footer-logo">
            <span className="logo-s3rl">S3RL</span>
            <span className="logo-linux">LINUX</span>
          </div>
          <p className="footer-tagline">RAVE ALL NIGHT 🌈💀</p>
          <div className="footer-links">
            <a href="https://github.com/moonlightOS-Meow/s3rlinux" target="_blank" rel="noopener">GITHUB</a>
            <a href="https://github.com/moonlightOS-Meow/s3rlinux/wiki" target="_blank" rel="noopener">WIKI</a>
            <a href="#">DISCORD</a>
          </div>
          <p className="footer-copy">© 2026 S3RLINUX PROJECT • S3RLL v2.0</p>
        </div>
      </footer>
    </div>
  )
}

export default App
