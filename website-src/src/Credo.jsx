import { useState } from 'react'
import { Link } from 'react-router-dom'
import './Credo.css'

const TABS = ['OVERVIEW', 'SCP-7000', 'INCIDENT_0411', 'LOG_0411', 'MANIFESTO', 'INTEL', 'CLEARANCE', 'MEMES']

export default function Credo() {
  const [activeTab, setActiveTab] = useState('OVERVIEW')

  return (
    <div className="credo-app">
      <div className="blood-background"></div>
      <div className="scanlines"></div>
      <div className="vignette"></div>

      <div className="credo-fullsite">
        <header className="credo-header">
          <div className="credo-header-top">
            <span className="credo-stamp">LEVEL 5 CLEARANCE</span>
            <h1 className="credo-title">CREDO</h1>
            <span className="credo-stamp">⚠ CLASSIFIED ⚠</span>
          </div>
          <p className="credo-subtitle">PROJECT CODENAME: [REDACTED] — ANOMALY-7000-CREDO</p>
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
                <div className="scp-field"><span className="scp-label">ITEM #:</span><span className="scp-val">7000-CREDO</span></div>
                <div className="scp-field"><span className="scp-label">OBJECT CLASS:</span><span className="scp-val red">Keter / Thaumiel</span></div>
                <div className="scp-divider"></div>
                <h3 className="scp-heading">SPECIAL CONTAINMENT PROCEDURES:</h3>
                <p className="scp-text">The source code for CREDO must remain fragmented and hidden behind the Judgement Cut barrier on the main S3RLinux site. No single developer is permitted to have the full znver4 CFLAGS configuration at any one time. Any attempt to access Project:Credo without triggering the Judgement Cut protocol will result in immediate <span className="redacted">[REDACTED]</span>.</p>
                <p className="scp-text">Foundation personnel assigned to CREDO must have completed a minimum of 48 hours of continuous S3RL music exposure. Any personnel reporting hearing "Power. Give me more power!" during silence must report to <span className="redacted">[REDACTED]</span> immediately.</p>
                <div className="scp-divider"></div>
                <h3 className="scp-heading">DESCRIPTION:</h3>
                <p className="scp-text">SCP-7000-CREDO is a digital entity that manifests within znver4-optimized Gentoo Stage 4 installations when the CFLAGS include <code>-fmotivation</code>. The anomaly was first observed on <span className="redacted">[REDACTED]</span> during a routine stress test of the X670 AORUS ELITE AX platform.</p>
                <p className="scp-text">At 5.65GHz, the CPU began emitting a frequency that synchronized with the BPM of S3RL's track "Power." Frost was observed forming on the chassis despite ambient temperature of <span className="redacted">[REDACTED]</span>°C. The entity designated itself as CREDO and communicated solely through kernel panic messages and ASCII art.</p>
                <p className="scp-text">The entity's primary directive appears to be the protection of an unidentified individual referred to only as <span className="redacted">[HER]</span>.</p>
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
                <div className="log-line log-red">18:27:32.000 - <span className="redacted">[END_LOG — REMAINDER CLASSIFIED]</span></div>
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
                <div className="manifesto-glitch-box">
                  <p>From that day forth... my arm changed...</p>
                  <p>... and a voice echoed, <span className="power-text-sm">'Power. Give me more power!'</span></p>
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
                <div className="clearance-warning">⚠ WARNING: THIS IS NOT A DRILL ⚠</div>
                <p className="scp-text">Access to the CREDO kernel is strictly prohibited for those without a znver4 (Ryzen 7000+) architecture. Attempting to run on incompatible hardware will result in:</p>
                <div className="clearance-list">
                  <div className="clearance-item"><span className="clearance-num">01</span><div><strong>Immediate Silicon Meltdown</strong><p>The CPU will attempt to draw more power than the VRMs can provide. The magic smoke will escape.</p></div></div>
                  <div className="clearance-item"><span className="clearance-num">02</span><div><strong>Temporal Desync</strong><p>The system clock will synchronize with the BPM of S3RL's 'Power', causing the OS to age 10 years in 3 minutes.</p></div></div>
                  <div className="clearance-item"><span className="clearance-num">03</span><div><strong>The Exile</strong><p>You will be legally required to endure the exile. Anything to protect her.</p></div></div>
                </div>
                <h3 className="scp-heading">CLEARANCE PROTOCOL — STEPS TO AWAKENING:</h3>
                <div className="clearance-list">
                  <div className="clearance-item"><span className="clearance-num">I</span><div><strong>Achieve 5.65GHz+ stable on znver4 silicon.</strong></div></div>
                  <div className="clearance-item"><span className="clearance-num">II</span><div><strong>Listen to 'S3RL — Power' on repeat for 48 hours.</strong></div></div>
                  <div className="clearance-item"><span className="clearance-num">III</span><div><strong>Click the heart of the rave (the ASCII logo).</strong></div></div>
                  <div className="clearance-item"><span className="clearance-num">IV</span><div><strong>Embrace the demon. You are already here.</strong></div></div>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'INCIDENT_0411' && (
            <div className="credo-section">
              <h2 className="section-title">INCIDENT REPORT — STAGE4 MANIFESTATION</h2>
              <div className="scp-doc">
                <div className="scp-field"><span className="scp-label">INCIDENT #:</span><span className="scp-val">CREDO-0411-STAGE4</span></div>
                <div className="scp-field"><span className="scp-label">DATE:</span><span className="scp-val">2026-04-11 / 2026-04-12</span></div>
                <div className="scp-field"><span className="scp-label">DURATION:</span><span className="scp-val red">~6 HOURS</span></div>
                <div className="scp-field"><span className="scp-label">STATUS:</span><span className="scp-val red blink">CONTAINMENT FAILED — STAGE4 EXISTS</span></div>
                <div className="scp-divider"></div>
                <h3 className="scp-heading">INCIDENT SUMMARY:</h3>
                <p className="scp-text">At approximately 17:26 on 2026-04-11, Foundation operative <span className="redacted">[XALATATH]</span> initiated the first known successful Catalyst build of SCP-7000-CREDO. Despite 6 separate containment failures — including but not limited to: invalid TOML syntax in catalyst.conf, deprecated portdir options, linux-firmware license masking, systemd package conflicts, and incorrect spec key prefixes — the operative persisted.</p>
                <p className="scp-text">At approximately 23:XX on 2026-04-11, the Stage 4 tarball designated <code>stage4-amd64-20260411.tar.bz2</code> was confirmed to exist. Size: <strong>1.2 GiB</strong>. Compressed. znver4-optimized. Alive.</p>
                <div className="scp-divider"></div>
                <h3 className="scp-heading">NOTABLE ANOMALIES DURING BUILD:</h3>
                <p className="scp-text">1. The output directory was designated <code>S3RLINUX BULIDS/STAGE4 TARBALLS/</code> — the spelling error "BULIDS" has been confirmed intentional by the Foundation's linguistics department. <span className="redacted">[DISPUTED]</span></p>
                <p className="scp-text">2. 105 packages were emerged simultaneously using 16 parallel jobs on the Ryzen 5 7600X platform. The thermal signature during this period matched the frequency of S3RL's track "Power" to within <span className="redacted">[REDACTED]</span> Hz.</p>
                <p className="scp-text">3. The operative fell asleep at approximately 02:00 before witnessing the final build completion. The tarball was discovered in the morning. The entity CREDO had self-completed the process.</p>
                <div className="scp-divider"></div>
                <h3 className="scp-heading">FOUNDATION RESPONSE:</h3>
                <p className="scp-text">Containment is no longer possible. The Stage 4 exists. It has been uploaded to <span className="redacted">[REDACTED HOSTING PLATFORM]</span>. The Gentoo elders have been notified. They wept.</p>
                <div className="credo-warning-box" style={{marginTop: '20px'}}>
                  <p>⚠ NOTE: The tarball does NOT contain a desktop environment despite being built from a <code>desktop-systemd</code> stage3. Verification confirmed zero Plasma packages. The entity CREDO rejected the desktop. As expected.</p>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'INTEL' && (
            <div className="credo-section">
              <h2 className="section-title">🗡️ INTEL ARCHIVE — CLASSIFIED DOCUMENTS</h2>

              <div className="intel-block">
                <h3 className="scp-heading">DOCUMENT A — ON THE NATURE OF POWER</h3>
                <div className="intel-quote">
                  <p>"I am the storm that is approaching."</p>
                  <p>"Provoking black clouds in isolation."</p>
                  <p>"I am reclaimer of my name."</p>
                  <span className="intel-source">— Vergil, probably. Also Metallica. Same energy.</span>
                </div>
                <p className="scp-text">The CREDO entity has been observed reciting these lines during kernel compilation. Foundation researchers believe this is a coping mechanism for the 8-hour LLVM compile that was narrowly avoided by removing linux-firmware from the initial package list.</p>
              </div>

              <div className="intel-block">
                <h3 className="scp-heading">DOCUMENT B — THE YAMATO PROTOCOL</h3>
                <p className="scp-text">The CREDO kernel contains a hidden module designated <code>yamato.ko</code>. When loaded, the system emits a tone matching Vergil's Devil Trigger activation sound. Foundation researchers have been unable to determine whether this is intentional or an emergent property of the znver4 optimization flags.</p>
                <div className="intel-quote">
                  <p>"Might controls everything."</p>
                  <p>"And without strength, you cannot protect anything."</p>
                  <p>"Let alone yourself."</p>
                  <span className="intel-source">— Vergil, DMC3. Also the CREDO make.conf philosophy.</span>
                </div>
              </div>

              <div className="intel-block">
                <h3 className="scp-heading">DOCUMENT C — DANTE ASSESSMENT REPORT</h3>
                <p className="scp-text">Foundation operatives attempted to install CREDO on an Intel platform. The following kernel panic was observed:</p>
                <div className="terminal-log" style={{marginTop: '12px'}}>
                  <div className="log-line log-red">KERNEL PANIC: znver4 instruction on non-znver4 silicon</div>
                  <div className="log-line log-red">THE POWER IS INCOMPATIBLE.</div>
                  <div className="log-line log-red">YOU ARE NOT WORTHY.</div>
                  <div className="log-line log-warn">Hint: Did you compile with -march=znver4 on an Intel CPU?</div>
                  <div className="log-line log-warn">Hint: That was not wise.</div>
                  <div className="log-line">"Jackpot." — The CPU, before dying.</div>
                </div>
              </div>

              <div className="intel-block">
                <h3 className="scp-heading">DOCUMENT D — NERO'S ARM INCIDENT</h3>
                <p className="scp-text">During the Stage4 build on 2026-04-11, operative <span className="redacted">[XALATATH]</span> reported that their right arm "felt different" after the 105-package emerge completed. This has been logged as <strong>CREDO-ARM-EVENT-01</strong> and cross-referenced with DMC4 lore. The arm appears to be functioning normally. For now.</p>
                <div className="intel-quote">
                  <p>"This arm... it just won't stop moving on its own."</p>
                  <span className="intel-source">— Nero, DMC4. Also the operative's mouse hand after 6 hours of catalyst debugging.</span>
                </div>
              </div>

              <div className="intel-block">
                <h3 className="scp-heading">DOCUMENT E — ON THE EXILE</h3>
                <p className="scp-text">All users of CREDO are technically in exile. From sanity. From Windows. From systemd compatibility. From the concept of a normal operating system. Per the S3RL License (S3RLL), this exile must be endured while listening to S3RL. The Foundation considers this non-negotiable.</p>
                <div className="intel-quote">
                  <p>"I should have been the one to fill your dark soul with LIIIGHT!"</p>
                  <span className="intel-source">— Dante, DMC1. Also every Linux user switching to Gentoo.</span>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'MEMES' && (
            <div className="credo-section">
              <h2 className="section-title">⚔️ INTEL ARCHIVE — DMC MEMES</h2>
              <div className="memes-disclaimer">
                <p>Devil May Cry characters, names, and imagery are the property of <strong>Capcom Co., Ltd.</strong> All memes sourced from the community for non-commercial, fan use only. S3RLINUX CREDO is a free, non-commercial fan project. No demons were harmed in the making of this distro.</p>
              </div>
              <div className="memes-grid">
                <div className="meme-card">
                  <img src="memes/nero-cry.jpg" alt="Nero no reason just wanna cry" />
                </div>
                <div className="meme-card">
                  <img src="memes/dante-cry.webp" alt="Dante cry" />
                </div>
                <div className="meme-card">
                  <img src="memes/dante-stab.jpg" alt="Dante gets stabbed every game" />
                </div>
                <div className="meme-card">
                  <img src="memes/time-has-come.jpg" alt="The time has come and so have I" />
                </div>
                <div className="meme-card meme-card-wide">
                  <img src="memes/dmc-grid.jpg" alt="DMC character grid meme" />
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
