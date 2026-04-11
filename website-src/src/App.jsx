import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import './App.css'
import s3rlDj from './assets/s3rl/s3rl-dj.jpg'
import s3rlStudio from './assets/s3rl/s3rl-studio.jpg'
import planetRave from './assets/s3rl/planet-rave.jpg'
import s3rlinuxLogo from './assets/s3rlinux_logo_transparent.png'

function App() {
  const [isRaving, setIsRaving] = useState(false)

  useEffect(() => {
    setIsRaving(true)
  }, [])

  return (
    <div className="app">
      <div className="rave-background"></div>

      <header className="header">
        <div className="header-content">
          <div className="logo-section">
            <img src={s3rlinuxLogo} alt="S3RLINUX Logo" className="logo-image" />
            <p className="subtitle">🌈 RAVE ALL NIGHT 💀</p>
          </div>
          <nav className="nav">
            <a href="#about" className="nav-link">ABOUT</a>
            <a href="#features" className="nav-link">FEATURES</a>
            <a href="#s3rl" className="nav-link">S3RL</a>
            <a href="#download" className="nav-link">DOWNLOAD</a>
            <Link to="/wiki" className="nav-link">WIKI</Link>
            <Link to="/devlog" className="nav-link">DEVLOG</Link>
            <a href="https://github.com/moonlightOS-Meow/s3rlinux" className="nav-link">GITHUB</a>
          </nav>
        </div>
      </header>

      <section className="hero">
        <div className="hero-content">
          <div className="ascii-art">
            {`███████╗██████╗ ██████╗ ██╗     ██╗███╗   ██╗██╗   ██╗██╗  ██╗
██╔════╝╚════██╗██╔══██╗██║     ██║████╗  ██║██║   ██║╚██╗██╔╝
███████╗ █████╔╝██████╔╝██║     ██║██╔██╗ ██║██║   ██║ ╚███╔╝ 
╚════██║ ╚═══██╗██╔══██╗██║     ██║██║╚██╗██║██║   ██║ ██╔██╗ 
███████║██████╔╝██║  ██║███████╗██║██║ ╚████║╚██████╔╝██╔╝ ██╗
╚══════╝╚═════╝ ╚═╝  ╚═╝╚══════╝╚═╝╚═╝  ╚═══╝ ╚═════╝ ╚═╝  ╚═╝`}
          </div>
          <h2 className="hero-title">Gentoo Stage 4 Distribution</h2>
          <p className="hero-description">
            S3RL-themed, rave-styled terminal environment with custom kernel, configs, and pure optimization obsession.
          </p>
          <div className="cta-buttons">
            <button className="btn btn-primary">GET S3RLINUX</button>
            <Link to="/devlog" className="btn btn-secondary">DEVLOG</Link>
            <Link to="/wiki" className="btn btn-secondary">WIKI</Link>
          </div>
          <div className="stage4-hero-note">
            ⚙️ <strong>What's a Stage 4?</strong> Gentoo officially ships Stage 1–3. A Stage 4 is a community extension — a fully pre-configured Stage 3 with compiled kernel, packages, and configs baked in. Extract it, install a bootloader, and you're raving. No USE flag hell. No 8-hour LLVM compile. Just chaos. 🌈
          </div>
        </div>
      </section>

      <section id="about" className="about">
        <h2>WHAT IS S3RLINUX?</h2>
        <div className="about-grid">
          <div className="about-card">
            <h3>🎵 S3RL INSPIRED</h3>
            <p>Built on the chaotic energy of S3RL's electronic music and the "RAVE ALL NIGHT" mentality.</p>
          </div>
          <div className="about-card">
            <h3>⚙️ GENTOO BASED</h3>
            <p>Stage 4 pre-compiled system snapshot with custom kernel and optimizations.</p>
          </div>
          <div className="about-card">
            <h3>🌈 RAVE STYLED</h3>
            <p>Neon colors, custom MOTD, custom shell, and pure terminal chaos.</p>
          </div>
          <div className="about-card">
            <h3>💪 OPTIMIZED</h3>
            <p>Custom CFLAGS, kernel tuning, and performance-first configuration.</p>
          </div>
        </div>
      </section>

      <section id="features" className="features">
        <h2>FEATURES</h2>
        <div className="features-list">
          <div className="feature-item">
            <span className="feature-icon">✅</span>
            <h4>Gentoo Stage 4</h4>
            <p>Pre-compiled, pre-optimized system snapshot</p>
          </div>
          <div className="feature-item">
            <span className="feature-icon">✅</span>
            <h4>Custom Kernel</h4>
            <p>Optimized for modern hardware (Ryzen 5000+)</p>
          </div>
          <div className="feature-item">
            <span className="feature-icon">✅</span>
            <h4>S3RL Branding</h4>
            <p>Custom colors, MOTD, shell, and /etc/os-release</p>
          </div>
          <div className="feature-item">
            <span className="feature-icon">✅</span>
            <h4>Terminal Only</h4>
            <p>No desktop environment - pure performance</p>
          </div>
          <div className="feature-item">
            <span className="feature-icon">✅</span>
            <h4>Rave Environment</h4>
            <p>Boot straight into neon-styled terminal chaos</p>
          </div>
          <div className="feature-item">
            <span className="feature-icon">✅</span>
            <h4>Open Source</h4>
            <p>S3RL License - free to use, modify, distribute</p>
          </div>
        </div>
      </section>

      <section id="s3rl" className="s3rl-tribute">
        <h2>INSPIRED BY S3RL 🎵</h2>
        <div className="s3rl-gallery">
          <img src={s3rlDj} alt="S3RL DJ" className="s3rl-image" />
          <img src={s3rlStudio} alt="S3RL in the Studio" className="s3rl-image" />
          <img src={planetRave} alt="Planet Rave" className="s3rl-image" />
        </div>
        <div className="tribute-content">
          <p>S3RLINUX is inspired by <strong>S3RL</strong>, the legendary Happy Hardcore legendary electronic music producer Frenchcore producer known for:</p>
          <ul className="tribute-list">
            <li>🎶 High-energy rave tracks</li>
            <li>🌈 Neon aesthetic and visual energy</li>
            <li>💪 Relentless optimization mindset</li>
            <li>🔥 "RAVE ALL NIGHT" mentality</li>
          </ul>
          <h3 className="songs-title">🎵 LISTEN TO S3RL:</h3>
          <div className="songs-list">
            <div className="song-item">
              <span className="song-icon">🎶</span>
              <a href="https://www.youtube.com/results?search_query=s3rl+pika+girl" target="_blank" rel="noopener noreferrer">S3RL - Pika Girl</a>
            </div>
            <div className="song-item">
              <span className="song-icon">🎶</span>
              <a href="https://www.youtube.com/results?search_query=s3rl+hentai" target="_blank" rel="noopener noreferrer">S3RL - Hentai</a>
            </div>
            <div className="song-item">
              <span className="song-icon">🎶</span>
              <a href="https://www.youtube.com/results?search_query=s3rl+rave+all+night" target="_blank" rel="noopener noreferrer">S3RL - Rave All Night</a>
            </div>
            <div className="song-item">
              <span className="song-icon">🎶</span>
              <a href="https://www.youtube.com/results?search_query=s3rl+dangerous" target="_blank" rel="noopener noreferrer">S3RL - Dangerous</a>
            </div>
          </div>
          <p className="tribute-note">
            Listen to S3RL on <a href="https://open.spotify.com/artist/11aa081aKYUzmeFm0yHdT2" target="_blank" rel="noopener noreferrer">Spotify</a>, 
            <a href="https://www.youtube.com/@S3RL" target="_blank" rel="noopener noreferrer">YouTube</a>, or 
            <a href="https://soundcloud.com/s3rl" target="_blank" rel="noopener noreferrer">SoundCloud</a>
          </p>
        </div>
      </section>

      <section id="download" className="download">
        <h2>GET S3RLINUX</h2>
        <div className="download-content">
          <p className="coming-soon">Stage 4 Tarball & ISO Coming Soon™</p>
          <p className="build-info">For now, you can build it yourself from Gentoo!</p>
          <div className="stage4-explainer">
            <h3>⚙️ WHAT IS A STAGE 4?</h3>
            <p>Gentoo officially ships Stage 1, 2, and 3 tarballs. A <strong>Stage 4</strong> is a community-made extension — a fully pre-configured Stage 3 with a compiled kernel, installed packages, and custom configs already baked in. It's 100% real and valid. Just extract it, install a bootloader, and you're raving. No hours of <code>emerge</code>. No USE flag hell. Just chaos. 🌈</p>
          </div>
          <div className="download-buttons">
            <a href="https://github.com/moonlightOS-Meow/s3rlinux" className="btn btn-primary">
              VIEW ON GITHUB
            </a>
            <a href="https://www.gentoo.org/downloads/" className="btn btn-secondary">
              GET GENTOO
            </a>
          </div>
        </div>
      </section>

      <footer className="footer">
        <div className="footer-content">
          <p>🌈 S3RLINUX - RAVE ALL NIGHT 💀</p>
          <p>Inspired by S3RL | Based on Gentoo | Licensed under S3RL License</p>
          <p className="copyright">© 2026 S3RLINUX Project | Keep the rave alive</p>
        </div>
      </footer>

      {isRaving && <div className="rave-effect"></div>}
    </div>
  )
}

export default App
