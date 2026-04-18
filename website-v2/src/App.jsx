import { useState, useEffect } from 'react'
import './App.css'
import s3rlinuxLogo from './assets/s3rlinux_logo_transparent.png'
import s3rlDj from './assets/s3rl/s3rl-dj.jpg'
import s3rlStudio from './assets/s3rl/s3rl-studio.jpg'
import planetRave from './assets/s3rl/planet-rave.jpg'

function App() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <div className="app">
      <div className="bg-grid"></div>
      <div className="bg-glow"></div>

      {/* HEADER */}
      <header className={`header ${scrolled ? 'scrolled' : ''}`}>
        <div className="header-inner">
          <img src={s3rlinuxLogo} alt="S3RLINUX" className="nav-logo" />
          <nav className="nav">
            <a href="#about" className="nav-link" onClick={e => { e.preventDefault(); document.getElementById('about')?.scrollIntoView({behavior:'smooth'}) }}>ABOUT</a>
            <a href="#features" className="nav-link" onClick={e => { e.preventDefault(); document.getElementById('features')?.scrollIntoView({behavior:'smooth'}) }}>FEATURES</a>
            <a href="#s3rl" className="nav-link" onClick={e => { e.preventDefault(); document.getElementById('s3rl')?.scrollIntoView({behavior:'smooth'}) }}>S3RL</a>
            <a href="#download" className="nav-link" onClick={e => { e.preventDefault(); document.getElementById('download')?.scrollIntoView({behavior:'smooth'}) }}>DOWNLOAD</a>
            <a href="https://github.com/moonlightOS-Meow/s3rlinux/wiki" className="nav-link" target="_blank" rel="noopener noreferrer">WIKI</a>
            <a href="https://github.com/moonlightOS-Meow/s3rlinux" className="nav-link nav-link-github" target="_blank" rel="noopener noreferrer">GITHUB</a>
          </nav>
        </div>
      </header>

      {/* HERO */}
      <section className="hero">
        <div className="hero-inner">
          <div className="hero-badge">ARCH LINUX BASED</div>
          <h1 className="hero-title">
            <span className="hero-title-s3rl">S3RL</span>
            <span className="hero-title-linux">LINUX</span>
          </h1>
          <p className="hero-subtitle">RAVE ALL NIGHT 🌈💀</p>
          <p className="hero-desc">
            The S3RL-themed Arch Linux distribution. Custom branding, neon terminal, 
            pure rave energy. No handholding. Just chaos.
          </p>
          <div className="hero-btns">
            <a href="#download" className="btn btn-primary" onClick={e => { e.preventDefault(); document.getElementById('download')?.scrollIntoView({behavior:'smooth'}) }}>GET S3RLINUX</a>
            <Link to="/wiki" className="btn btn-secondary">LEARN MORE</Link>
          </div>
          <div className="hero-stats">
            <div className="stat"><span className="stat-val">ARCH</span><span className="stat-label">BASE</span></div>
            <div className="stat-div"></div>
            <div className="stat"><span className="stat-val">S3RL</span><span className="stat-label">INSPIRED</span></div>
            <div className="stat-div"></div>
            <div className="stat"><span className="stat-val">∞</span><span className="stat-label">CHAOS</span></div>
          </div>
        </div>
        <div className="hero-scroll-hint">scroll ↓</div>
      </section>

      {/* ABOUT */}
      <section className="section" id="about">
        <div className="section-inner">
          <div className="section-label">WHAT IS THIS</div>
          <h2 className="section-title">S3RLINUX</h2>
          <p className="section-desc">An Arch Linux distribution themed around <strong>S3RL</strong> — the legendary Happy Hardcore & Frenchcore DJ from Brisbane. Custom MOTD, neon shell, S3RL branding baked into every layer. You are legally required to listen to S3RL while using it. This is non-negotiable.</p>
          <div className="cards">
            <div className="card">
              <div className="card-icon">🎵</div>
              <h3>S3RL INSPIRED</h3>
              <p>Built on the chaotic energy of S3RL's music and the "RAVE ALL NIGHT" mentality.</p>
            </div>
            <div className="card">
              <div className="card-icon">🏹</div>
              <h3>ARCH BASED</h3>
              <p>Rolling release, bleeding edge packages, maximum performance. pacman goes brr.</p>
            </div>
            <div className="card">
              <div className="card-icon">🌈</div>
              <h3>RAVE STYLED</h3>
              <p>Neon colors, custom MOTD, fastfetch config, and a shell that slaps harder than the drop.</p>
            </div>
            <div className="card">
              <div className="card-icon">💀</div>
              <h3>NO HANDHOLDING</h3>
              <p>Terminal-first. No bloat. No desktop unless you want one. Just pure optimized chaos.</p>
            </div>
          </div>
        </div>
      </section>

      {/* FEATURES */}
      <section className="section section-dark" id="features">
        <div className="section-inner">
          <div className="section-label">WHAT YOU GET</div>
          <h2 className="section-title">FEATURES</h2>
          <div className="features-grid">
            {[
              { icon: '⚡', title: 'Custom Kernel', desc: 'Optimized for modern hardware. Performance first.' },
              { icon: '🎨', title: 'S3RL Branding', desc: 'MOTD, os-release, shell prompt — all themed.' },
              { icon: '🔧', title: 'Custom Shell', desc: 'Neon prompt, S3RL aliases, chaos out of the box.' },
              { icon: '📦', title: 'AUR Support', desc: 'Full AUR access. paru pre-installed. Install anything.' },
              { icon: '🎶', title: 'S3RL License', desc: 'You MUST listen to S3RL. It\'s in the license. Legally.' },
              { icon: '🌐', title: 'Open Source', desc: 'Free forever. Fork it. Mod it. Rave it.' },
            ].map(f => (
              <div className="feature" key={f.title}>
                <span className="feature-icon">{f.icon}</span>
                <h4>{f.title}</h4>
                <p>{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* S3RL SECTION */}
      <section className="section" id="s3rl">
        <div className="section-inner">
          <div className="section-label">THE LEGEND</div>
          <h2 className="section-title">INSPIRED BY S3RL</h2>
          <div className="gallery">
            <div className="gallery-main">
              <img src={s3rlDj} alt="S3RL DJ" />
            </div>
            <div className="gallery-side">
              <img src={s3rlStudio} alt="S3RL Studio" />
              <img src={planetRave} alt="Planet Rave" />
            </div>
          </div>
          <div className="s3rl-info">
            <p>S3RLINUX is inspired by <strong>S3RL</strong> — Jole Hughes, Happy Hardcore & Frenchcore producer from Brisbane, Australia. 4M+ monthly Spotify listeners. Appeared in osu! beatmap packs. Performed at HTID 2025 & 2026.</p>
            <div className="s3rl-links">
              <a href="https://open.spotify.com/artist/11aa081aKYUzmeFm0yHdT2" target="_blank" rel="noopener noreferrer" className="s3rl-link spotify">SPOTIFY</a>
              <a href="https://www.youtube.com/@S3RL" target="_blank" rel="noopener noreferrer" className="s3rl-link youtube">YOUTUBE</a>
              <a href="https://soundcloud.com/s3rl" target="_blank" rel="noopener noreferrer" className="s3rl-link soundcloud">SOUNDCLOUD</a>
            </div>
          </div>
        </div>
      </section>

      {/* DOWNLOAD */}
      <section className="section section-download" id="download">
        <div className="section-inner">
          <div className="section-label">GET IT</div>
          <h2 className="section-title">DOWNLOAD</h2>
          <div className="stage4-note">
            <h3>⚙️ Arch Based — Rolling Release</h3>
            <p>S3RLINUX v2 is now Arch Linux based. Rolling release means always up to date. archiso under the hood, S3RL on top. ISO coming soon™ — for now, check the GitHub.</p>
          </div>
          <div className="download-btns">
            <a href="https://github.com/moonlightOS-Meow/s3rlinux" className="btn btn-primary" target="_blank" rel="noopener noreferrer">VIEW ON GITHUB</a>
            <a href="https://www.archlinux.org/download/" className="btn btn-secondary" target="_blank" rel="noopener noreferrer">GET ARCH</a>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="footer">
        <img src={s3rlinuxLogo} alt="S3RLINUX" className="footer-logo" />
        <p>🌈 S3RLINUX — RAVE ALL NIGHT 💀</p>
        <p className="footer-sub">Inspired by S3RL | Based on Arch Linux | Licensed under S3RL License</p>
        <p className="footer-copy">© 2026 S3RLINUX Project | Keep the rave alive</p>
      </footer>
    </div>
  )
}

export default App
