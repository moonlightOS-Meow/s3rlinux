import { useState } from 'react'
import { Link } from 'react-router-dom'
import './Message.css'

export default function Message() {
  const [message, setMessage] = useState('')
  const [submitted, setSubmitted] = useState(false)
  const [classification, setClassification] = useState('LEVEL 1')
  const [entityName, setEntityName] = useState('')
  
  const handleSubmit = (e) => {
    e.preventDefault()
    if (message.trim()) {
      // In a real app, this would send to an API
      console.log('Message submitted to OpenHands:', {
        message,
        classification,
        entityName,
        timestamp: new Date().toISOString()
      })
      setSubmitted(true)
    }
  }
  
  if (submitted) {
    return (
      <div className="message-app">
        <div className="rave-background"></div>
        <div className="message-success">
          <div className="success-icon">✅</div>
          <h1>MESSAGE TRANSMITTED</h1>
          <p>Your message has been received by OpenHands.</p>
          <p className="success-id">TRANSISSION ID: {Math.random().toString(36).substring(2, 10).toUpperCase()}</p>
          <Link to="/" className="btn btn-primary">RETURN TO THE RAVE</Link>
        </div>
      </div>
    )
  }
  
  return (
    <div className="message-app">
      <div className="rave-background"></div>
      <div className="scanlines"></div>
      
      <header className="header">
        <div className="header-content">
          <div className="logo-section">
            <p className="subtitle">🌈 RAVE ALL NIGHT 💀</p>
          </div>
          <nav className="nav">
            <Link to="/" className="nav-link">HOME</Link>
            <Link to="/wiki" className="nav-link">WIKI</Link>
            <Link to="/devlog" className="nav-link">DEVLOG</Link>
            <Link to="/credo" className="nav-link">CREDO</Link>
          </nav>
        </div>
      </header>
      
      <main className="message-container">
        <div className="message-box">
          <h1>CONTACT OPENHANDS</h1>
          <p className="message-subtitle">
            Submit a message to the Foundation. OpenHands will receive your transmission.
          </p>
          
          <form onSubmit={handleSubmit} className="message-form">
            <div className="form-group">
              <label htmlFor="entityName">OPERATIVE NAME / ALIAS</label>
              <input
                type="text"
                id="entityName"
                value={entityName}
                onChange={(e) => setEntityName(e.target.value)}
                placeholder="Enter your callsign or alias..."
                className="form-input"
              />
            </div>
            
            <div className="form-group">
              <label htmlFor="classification">CLEARANCE LEVEL</label>
              <select
                id="classification"
                value={classification}
                onChange={(e) => setClassification(e.target.value)}
                className="form-select"
              >
                <option value="LEVEL 1">LEVEL 1 - Public</option>
                <option value="LEVEL 2">LEVEL 2 - Restricted</option>
                <option value="LEVEL 3">LEVEL 3 - Confidential</option>
                <option value="LEVEL 4">LEVEL 4 - Secret</option>
                <option value="LEVEL 5">LEVEL 5 - Top Secret</option>
              </select>
            </div>
            
            <div className="form-group">
              <label htmlFor="message">MESSAGE *</label>
              <textarea
                id="message"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Enter your message to OpenHands..."
                required
                className="form-textarea"
                rows={6}
              />
            </div>
            
            <button type="submit" className="btn btn-primary">
              TRANSMIT MESSAGE
            </button>
          </form>
          
          <div className="message-footer">
            <p>🌈 All transmissions are encrypted. May the rave be with you. 💀</p>
          </div>
        </div>
      </main>
      
      <footer className="footer">
        <div className="footer-content">
          <p>🌈 S3RLINUX - RAVE ALL NIGHT 💀</p>
        </div>
      </footer>
    </div>
  )
}