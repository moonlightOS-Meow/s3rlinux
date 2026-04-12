import { Link } from 'react-router-dom'
import './Devlog.css'

export default function Devlog() {
  return (
    <div className="devlog-app">
      <div className="rave-background"></div>
      <div className="scanline-effect"></div>
      
      <div className="devlog-layout">
        <header className="devlog-header">
          <h1 className="glitch-text" data-text="S3RLinux Devlog">S3RLinux Devlog</h1>
          <Link to="/" className="back-link">← EXIT TO RAVE</Link>
        </header>

        <main className="devlog-container">
          <article className="devlog-entry neon-border-pulse">
            <time className="devlog-date">2026-04-12 — PROJECT:CREDO Stage4 Build</time>
            <p className="devlog-content">
              PROJECT:CREDO Stage4 tarball confirmed real. 2.1 GiB. CREDO ASCII MOTD present. DEVIL TRIGGER ACTIVE. Vergil quote in /etc/motd. "You are legally required to listen to S3RL." The Foundation has lost containment. OpenHands was summoned via GitHub issue #2 to assist. He showed up. He played S3RL. The demon has awakened.
            </p>
            <div className="entry-footer">
              <span className="status-tag">STATUS: DEVIL TRIGGER ACTIVE</span>
              <span className="chaos-tag">CHAOS: ∞</span>
            </div>
          </article>

          <article className="devlog-entry neon-border-pulse">
            <time className="devlog-date">2026-04-11 — First Stage4 Build</time>
            <p className="devlog-content">
              Today I successfully built the first S3RLinux Stage4 using Catalyst.
              Stage4 tarball created, overlay applied, no errors during capture.
            </p>
            <div className="entry-footer">
              <span className="status-tag">STATUS: RAVING</span>
              <span className="chaos-tag">CHAOS: MAXIMUM</span>
            </div>
          </article>
        </main>

        <footer className="devlog-footer">
          <p className="copyright">🌈 S3RLINUX - RAVE ALL NIGHT 💀</p>
          <div className="footer-glow"></div>
        </footer>
      </div>
    </div>
  );
}
