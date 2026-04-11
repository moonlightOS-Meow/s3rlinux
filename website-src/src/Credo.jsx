import { Link } from 'react-router-dom'
import './Credo.css'

export default function Credo() {
  return (
    <div className="credo-app">
      <div className="blood-background"></div>
      <div className="vignette"></div>
      
      <div className="credo-container">
        <header className="credo-header">
          <h1 className="credo-title">CREDO</h1>
          <p className="credo-subtitle">PROJECT CODENAME: [REDACTED]</p>
        </header>

        <main className="credo-quote-box">
          <p className="credo-quote">
            "From that day forth... my arm changed... and a voice echoed, 
            <span className="power-text">Power. Give me more power!</span> 
            And if I become a demon, so be it. I will endure the exile. Anything to protect her."
          </p>
        </main>

        <footer className="credo-footer">
          <Link to="/" className="demon-link">RETURN TO THE RAVE</Link>
        </footer>
      </div>
    </div>
  );
}
