import { Link } from 'react-router-dom'
import './Devlog.css'

export default function Devlog() {
  return (
    <div className="devlog-app">
      <div className="rave-background"></div>
      
      <div className="devlog-layout">
        <header className="devlog-header">
          <h1>S3RLinux Devlog</h1>
          <Link to="/" className="back-link">← BACK TO HOME</Link>
        </header>

        <main className="devlog-container">
          <article className="devlog-entry">
            <time className="devlog-date">2026-04-12 — LiveGUI experiments</time>
            <p className="devlog-content">
              Started working on the LiveGUI ISO, testing KDE-only environment,
              cleaning GNOME/GTK leftovers, and tuning Catalyst specs.
            </p>
          </article>

          <article className="devlog-entry">
            <time className="devlog-date">2026-04-11 — First Stage4 Build</time>
            <p className="devlog-content">
              Today I successfully built the first S3RLinux Stage4 using Catalyst.
              Stage4 tarball created, overlay applied, no errors during capture.
            </p>
          </article>
        </main>

        <footer className="devlog-footer">
          <p className="copyright">© 2026 S3RLINUX Project | RAVE ALL NIGHT 💀</p>
        </footer>
      </div>
    </div>
  );
}
