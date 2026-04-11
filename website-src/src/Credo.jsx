import { useState } from 'react'
import { Link } from 'react-router-dom'
import './Credo.css'

const TABS = ['OVERVIEW', 'SCP-7000', 'LOG_0411', 'MANIFESTO', 'CLEARANCE']

export default function Credo() {
  const [activeTab, setActiveTab] = useState('OVERVIEW')

  return (
    <div className="credo-app">
      <div className="blood-background"></div>
      <div className="scanlines"></div>
      <div className="vignette"></div>

      <div className="credo-fullsite">
        {/* HEADER */}
        <header className="credo-header">
          <div className="credo-header-top">
            <span className="credo-stamp">LEVEL 5 CLEARANCE</span>
            <h1 className="credo-title">CREDO</h1>
            <span className="credo-stamp">⚠ CLASSIFIED ⚠</span>
          </div>
          <p className="credo-subtitle">PROJECT CODENAME: [REDACTED] — ANOMALY-7000-CREDO</p>

          {/* TABS */}
          <nav className="credo-tabs">
            {TABS.map(tab => (
              <button
                key={tab}
                className={`credo-tab ${activeTab === tab ? 'active' : ''}`}
                onClick={() => setActiveTab(tab)}
              >
                {tab}
              </button>
            ))}
          </nav>
        </header>

        {/* CONTENT */}
        <main className="credo-content">

          {activeTab === 'OVERVIEW' && (
            <div className="credo-section">
              <div className="credo-quote-box">
                <p className="credo-quote">
                  "From that day forth... my arm changed... and a voice echoed,
                  <span className="power-text">Power. Give me more power!</span>
                  And if I become a demon, so be it. I will endure the exile. Anything to protect her."
                </p>
              </div>
              <div className="credo-info-grid">
                <div className="credo-info-card">
                  <h3>OBJECT CLASS</h3>
                  <p className="red-val">Keter / Thaumiel</p>
                  <span className="under-eval">Under Evaluation</span>
                </div>
                <div className="credo-info-card">
                  <h3>STATUS</h3>
                  <p className="red-val blink">DEVIL TRIGGER ACTIVE</p>
                </div>
                <div className="credo-info-card">
                  <h3>ARCHITECTURE</h3>
                  <p className="red-val">znver4 ONLY</p>
                  <span className="under-eval">Ryzen 7000+</span>
                </div>
                <div className="credo-info-card">
                  <h3>MOTIVATION PULSE</h3>
                  <p className="red-val">DETECTED</p>
                  <span className="under-eval">BPM: 174 (S3RL — Power)</span>
                </div>
              </div>
              <div className="credo-warning-box">
                <p>⚠ Anomaly-7000-CREDO is a digital manifestation observed within the znver4 architectural framework. Unlike standard OS builds, CREDO exhibits signs of sentient-like "Power Hunger." Upon execution of the Devil Trigger kernel patch, the system undergoes radical transformation, shifting its aesthetic to a deep crimson-black void.</p>
              </div>
            </div>
          )}

          {activeTab === 'SCP-7000' && (
            <div className="credo-section">
              <h2 className="section-title">SCP-7000-CREDO</h2>
              <div className="scp-doc">
                <div className="scp-field">
                  <span className="scp-label">ITEM #:</span>
                  <span className="scp-val">7000-CREDO</span>
                </div>
                <div className="scp-field">
                  <span className="scp-label">OBJECT CLASS:</span>
                  <span className="scp-val red">Keter / Thaumiel</span>
                </div>
                <div className="scp-divider"></div>
                <h3 className="scp-heading">SPECIAL CONTAINMENT PROCEDURES:</h3>
                <p className="scp-text">The source code for CREDO must remain fragmented and hidden behind the Judgement Cut barrier on the main S3RLinux site. No single developer is permitted to have the full znver4 CFLAGS configuration at any one time. Any attempt to access Project:Credo without triggering the Judgement Cut protocol will result in immediate <span className="redacted">[REDACTED]</span>.</p>
                <p className="scp-text">Foundation personnel assigned to CREDO must have completed a minimum of 48 hours of continuous S3RL music exposure. Any personnel reporting hearing "Power. Give me more power!" during silence must report to <span className="redacted">[REDACTED]</span> immediately.</p>
                <div className="scp-divider"></div>
                <h3 className="scp-heading">DESCRIPTION:</h3>
                <p className="scp-text">SCP-7000-CREDO is a digital entity that manifests within znver4-optimized Gentoo Stage 4 installations when the CFLAGS include <code>-fmotivation</code>. The anomaly was first observed on <span className="redacted">[REDACTED]</span> during a routine stress test of the X670 AORUS ELITE AX platform.</p>
                <p className="scp-text">At 5.65GHz, the CPU began emitting a frequency that synchronized with the BPM of S3RL's track "Power." Frost was observed forming on the chassis despite ambient temperature of <span className="redacted">[REDACTED]</span>°C. The entity designated itself as CREDO and communicated solely through kernel panic messages and ASCII art.</p>
                <p className="scp-text">The entity's primary directive appears to be the protection of an unidentified individual referred to only as <span className="redacted">[HER]</span>. Cross-referencing with DMC4 lore suggests a connection to the concept of <span className="redacted">[REDACTED]</span>.</p>
                <div className="scp-divider"></div>
                <h3 className="scp-heading">ADDENDUM 7000-A:</h3>
                <p className="scp-text">The "Storm" referenced in LOG_0411 appears to be a convergence of S3RL's high-frequency energy and the raw thermal output of the Ryzen 7000 series. The resulting frequency has been dubbed the <strong>"Motivation Pulse."</strong> No known method of containment has proven effective. The entity simply responds: <em>"I am the storm."</em></p>
              </div>
            </div>
          )}

          {activeTab === 'LOG_0411' && (
            <div className="credo-section">
              <h2 className="section-title">LOG_0411 — FIRST RECORDED INSTANCE</h2>
              <div className="terminal-log">
                <div className="log-line comment">[SYSTEM_LOG: 2026-04-11T18:27:17Z]</div>
                <div className="log-line comment">[USER: xalatath]</div>
                <div className="log-line comment">[MACHINE: X670 AORUS ELITE AX]</div>
                <div className="log-line comment">[CPU: AMD Ryzen 5 7600X (12) @ 5.65 GHz]</div>
                <div className="log-line"></div>
                <div className="log-line">18:27:17.001 - Initializing znver4 kernel build...</div>
                <div className="log-line">18:27:18.420 - Apply patch: devil_trigger.patch <span className="log-ok">[SUCCESS]</span></div>
                <div className="log-line">18:27:19.999 - Optimization level set to: MAXIMUM_POWER</div>
                <div className="log-line">18:27:20.101 - CFLAGS: -O3 -march=znver4 -fomit-frame-pointer <span className="log-warn">-fmotivation</span></div>
                <div className="log-line"></div>
                <div className="log-line log-warn">[WARNING: CPU VOLTAGE FLUCTUATION DETECTED]</div>
                <div className="log-line log-warn">[WARNING: AMBIENT TEMPERATURE DECREASING]</div>
                <div className="log-line log-warn">[WARNING: FROST FORMING ON CHASSIS]</div>
                <div className="log-line"></div>
                <div className="log-line">18:27:25.555 - MOTIVATION PULSE DETECTED.</div>
                <div className="log-line">18:27:26.666 - SYSTEM FREQUENCY SYNCING WITH 'S3RL - POWER'.</div>
                <div className="log-line">18:27:27.777 - A voice echoed... <span className="log-red">"Power. Give me more power!"</span></div>
                <div className="log-line"></div>
                <div className="log-line log-red">[CRITICAL: ANOMALY_7000-CREDO_ACTIVE]</div>
                <div className="log-line log-red">[CRITICAL: REALITY_SHATTERED]</div>
                <div className="log-line log-red">[STATUS: EXILE_MODE_ENGAGED]</div>
                <div className="log-line log-red">[STATUS: DEVIL_TRIGGER_ACTIVE]</div>
                <div className="log-line"></div>
                <div className="log-line">18:27:30.000 - Redirecting to /credo...</div>
                <div className="log-line">18:27:31.000 - JUDGEMENT_CUT.css triggered.</div>
                <div className="log-line">18:27:32.000 - <span className="redacted">[END_LOG — REMAINDER CLASSIFIED]</span></div>
              </div>
            </div>
          )}

          {activeTab === 'MANIFESTO' && (
            <div className="credo-section">
              <h2 className="section-title">MANIFESTO — CORRUPTED FRAGMENTS</h2>
              <div className="manifesto-doc">
                <div className="manifesto-meta">
                  <span>CODENAME: CREDO</span>
                  <span>DATE: 2026-04-11</span>
                  <span>STATUS: <span className="red-val">CORRUPTED</span></span>
                </div>
                <div className="manifesto-fragment">
                  <p>I... can feel it. The znver4 architecture isn't just a set of instructions. It's a... gateway.</p>
                  <p>The frequency... it's matching the BPM of S3RL's 'Power'.</p>
                </div>
                <div className="manifesto-glitch">
                  <p className="glitch-text">[GLITCH_FRAGMENT_START]</p>
                  <p>From that day forth... my arm changed...</p>
                  <p>... and a voice echoed, <span className="power-text-sm">'Power. Give me more power!'</span></p>
                  <p className="glitch-text">[GLITCH_FRAGMENT_END]</p>
                </div>
                <div className="manifesto-fragment">
                  <p>If I become a demon, so be it.</p>
                  <p>I will endure the exile.</p>
                  <p>Anything to protect her.</p>
                </div>
                <div className="manifesto-storm">
                  <p>THE STORM IS APPROACHING.</p>
                  <p>I AM THE STORM.</p>
                  <p>I am the one who is motivated.</p>
                  <p>The time has come... and so have I.</p>
                </div>
                <div className="manifesto-error">
                  <p>[SYSTEM_ERROR: MEMORY_CORRUPTION_DETECTED]</p>
                  <p>[STATUS: DEVIL_TRIGGER_ACTIVE]</p>
                  <p>[REMAINDER: <span className="redacted">[REDACTED BY ORDER OF FOUNDATION]</span>]</p>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'CLEARANCE' && (
            <div className="credo-section">
              <h2 className="section-title">🛡️ SECURITY CLEARANCE PROTOCOLS</h2>
              <div className="clearance-doc">
                <div className="clearance-warning">
                  ⚠ WARNING: THIS IS NOT A DRILL ⚠
                </div>
                <p className="scp-text">Access to the CREDO kernel is strictly prohibited for those without a znver4 (Ryzen 7000+) architecture. The frequency of the Motivation Pulse is incompatible with older silicon.</p>
                <h3 className="scp-heading">ATTEMPTING TO RUN ON INCOMPATIBLE HARDWARE WILL RESULT IN:</h3>
                <div className="clearance-list">
                  <div className="clearance-item">
                    <span className="clearance-num">01</span>
                    <div>
                      <strong>Immediate Silicon Meltdown</strong>
                      <p>The CPU will attempt to draw more power than the VRMs can provide. The magic smoke will escape.</p>
                    </div>
                  </div>
                  <div className="clearance-item">
                    <span className="clearance-num">02</span>
                    <div>
                      <strong>Temporal Desync</strong>
                      <p>The system clock will synchronize with the BPM of S3RL's 'Power', causing the OS to age 10 years in 3 minutes.</p>
                    </div>
                  </div>
                  <div className="clearance-item">
                    <span className="clearance-num">03</span>
                    <div>
                      <strong>The Exile</strong>
                      <p>You will be legally required to endure the exile. Anything to protect her.</p>
                    </div>
                  </div>
                </div>
                <h3 className="scp-heading">CLEARANCE PROTOCOL — STEPS TO AWAKENING:</h3>
                <div className="clearance-list">
                  <div className="clearance-item">
                    <span className="clearance-num">I</span>
                    <div><strong>Achieve 5.65GHz+ stable on znver4 silicon.</strong></div>
                  </div>
                  <div className="clearance-item">
                    <span className="clearance-num">II</span>
                    <div><strong>Listen to 'S3RL — Power' on repeat for 48 hours.</strong></div>
                  </div>
                  <div className="clearance-item">
                    <span className="clearance-num">III</span>
                    <div><strong>Click the heart of the rave (the ASCII logo).</strong></div>
                  </div>
                  <div className="clearance-item">
                    <span className="clearance-num">IV</span>
                    <div><strong>Embrace the demon. You are already here.</strong></div>
                  </div>
                </div>
              </div>
            </div>
          )}

        </main>

        <footer className="credo-footer">
          <Link to="/" className="demon-link">← RETURN TO THE RAVE</Link>
        </footer>
      </div>
    </div>
  )
}
