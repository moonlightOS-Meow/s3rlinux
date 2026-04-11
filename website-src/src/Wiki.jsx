import { Link } from 'react-router-dom'
import s3rlinuxLogo from './assets/s3rlinux_logo_transparent.png'
import './Wiki.css'

function Wiki() {
  return (
    <div className="wiki-app">
      <div className="rave-background"></div>

      <header className="header">
        <div className="header-content">
          <div className="logo-section">
            <img src={s3rlinuxLogo} alt="S3RLINUX Logo" className="logo-image" />
            <p className="subtitle">🌈 RAVE ALL NIGHT 💀</p>
          </div>
          <nav className="nav">
            <Link to="/" className="nav-link">HOME</Link>
            <Link to="/wiki" className="nav-link active">WIKI</Link>
            <a href="https://github.com/moonlightOS-Meow/s3rlinux" className="nav-link">GITHUB</a>
          </nav>
        </div>
      </header>

      <div className="wiki-layout">
        {/* SIDEBAR */}
        <aside className="wiki-sidebar">
          <h3 className="sidebar-title">📖 CONTENTS</h3>
          <ul className="sidebar-links">
            <li><a href="#what-is">What is S3RLINUX?</a></li>
            <li><a href="#stage4">What is a Stage 4?</a></li>
            <li><a href="#requirements">Requirements</a></li>
            <li><a href="#installation">Installation</a></li>
            <li><a href="#bootloader">Bootloader Setup</a></li>
            <li><a href="#customization">Customization</a></li>
            <li><a href="#kernel">Kernel Info</a></li>
            <li><a href="#packages">Packages</a></li>
            <li><a href="#lore">The S3RL Spirit 🌈</a></li>
            <li><a href="#faq">FAQ</a></li>
          </ul>
        </aside>

        {/* MAIN CONTENT */}
        <main className="wiki-main">

          <div className="wiki-hero">
            <h1>S3RLINUX WIKI</h1>
            <p>Everything you need to know to RAVE ALL NIGHT on Gentoo. 🌈💀</p>
          </div>

          {/* WHAT IS S3RLINUX */}
          <section className="wiki-section" id="what-is">
            <h2>🌈 What is S3RLINUX?</h2>
            <p>S3RLINUX is a <strong>Gentoo Stage 4 Linux distribution</strong> themed around the legendary Happy Hardcore & Frenchcore DJ, <strong>S3RL</strong>. It's a minimal, terminal-only system with custom kernel, custom configs, neon rave branding, and the <em>"RAVE ALL NIGHT"</em> mentality baked into every layer of the OS.</p>
            <p>There is no desktop environment. No handholding. Just a blazing fast terminal, optimized for modern AMD hardware, ready to rave.</p>
            <div className="wiki-callout info">
              <span className="callout-icon">💡</span>
              <span>S3RLINUX is built on Gentoo Linux — the most customizable Linux distribution in existence. Every package is compiled for YOUR hardware.</span>
            </div>
          </section>

          {/* STAGE 4 */}
          <section className="wiki-section" id="stage4">
            <h2>⚙️ What is a Stage 4?</h2>
            <p>Gentoo officially distributes three tarballs:</p>
            <div className="wiki-table">
              <div className="table-row header-row">
                <span>Stage</span>
                <span>What it includes</span>
                <span>Who it's for</span>
              </div>
              <div className="table-row">
                <span>Stage 1</span>
                <span>Minimal bootstrap tools only</span>
                <span>Hardcore masochists</span>
              </div>
              <div className="table-row">
                <span>Stage 2</span>
                <span>Stage 1 + compiled toolchain</span>
                <span>Also masochists</span>
              </div>
              <div className="table-row">
                <span>Stage 3</span>
                <span>Usable base system, no kernel</span>
                <span>Normal Gentoo users</span>
              </div>
              <div className="table-row highlight-row">
                <span>Stage 4 ⭐</span>
                <span>Complete system: kernel + packages + configs</span>
                <span>You, right now</span>
              </div>
            </div>
            <p>A <strong>Stage 4</strong> is a community-made tarball — a fully pre-configured Stage 3 with a compiled kernel, installed packages, and custom configs already baked in. It's 100% valid. Gentoo just doesn't make them officially because their whole philosophy is "do it yourself."</p>
            <div className="wiki-callout success">
              <span className="callout-icon">✅</span>
              <span>S3RLINUX Stage 4 = No 8-hour LLVM compile. No USE flag nightmares. No crying at 3am. Just extract and rave.</span>
            </div>
          </section>

          {/* REQUIREMENTS */}
          <section className="wiki-section" id="requirements">
            <h2>🖥️ Requirements</h2>
            <div className="wiki-grid-2">
              <div className="wiki-card">
                <h3>✅ Minimum</h3>
                <ul>
                  <li>AMD Ryzen 5000+ or Intel 12th gen+</li>
                  <li>8GB RAM</li>
                  <li>50GB storage</li>
                  <li>Another Linux system to extract the tarball</li>
                  <li>A love for electronic music</li>
                </ul>
              </div>
              <div className="wiki-card">
                <h3>🔥 Recommended</h3>
                <ul>
                  <li>AMD Ryzen 7000 series (znver4) ⭐</li>
                  <li>16GB+ RAM</li>
                  <li>100GB+ NVMe storage</li>
                  <li>S3RL playing in the background</li>
                  <li>Sufficient rave energy</li>
                </ul>
              </div>
            </div>
            <div className="wiki-callout warning">
              <span className="callout-icon">⚠️</span>
              <span>S3RLINUX is now compiled with <code>-march=znver4</code> to target Ryzen 7000+ hardware. It may not boot on older CPUs. If you're on Intel or older AMD, you'll need to recompile the kernel yourself.</span>
            </div>
          </section>

          {/* INSTALLATION */}
          <section className="wiki-section" id="installation">
            <h2>🚀 Installation</h2>
            <div className="wiki-callout warning">
              <span className="callout-icon">⚠️</span>
              <span>Stage 4 tarball not yet released. Check the <a href="https://github.com/moonlightOS-Meow/s3rlinux">GitHub</a> for updates. For now, build it yourself from Gentoo!</span>
            </div>
            <p>Once the tarball is released, installation will be:</p>

            <h3>Step 1 — Boot a Live Environment</h3>
            <p>Boot any Linux live environment. Gentoo LiveCD, Arch ISO, whatever you have.</p>
            <div className="code-block">
              <span className="code-comment"># Any live Linux environment works</span>
            </div>

            <h3>Step 2 — Partition your drive</h3>
            <div className="code-block">
              <span className="code-comment"># Example with fdisk</span>
              <span>fdisk /dev/sda</span>
              <span className="code-comment"># Create: EFI partition (512MB), swap (optional), root partition</span>
            </div>

            <h3>Step 3 — Format partitions</h3>
            <div className="code-block">
              <span>mkfs.fat -F32 /dev/sda1</span>
              <span className="code-comment"># Format root as ext4 or btrfs</span>
              <span>mkfs.ext4 /dev/sda2</span>
            </div>

            <h3>Step 4 — Mount and extract</h3>
            <div className="code-block">
              <span>mount /dev/sda2 /mnt</span>
              <span>mkdir -p /mnt/boot/efi</span>
              <span>mount /dev/sda1 /mnt/boot/efi</span>
              <span className="code-comment"># Extract the Stage 4 tarball</span>
              <span>tar --xattrs -xpf s3rlinux-stage4.tar.xz -C /mnt</span>
            </div>

            <h3>Step 5 — Chroot in</h3>
            <div className="code-block">
              <span>mount --rbind /dev /mnt/dev</span>
              <span>mount --rbind /sys /mnt/sys</span>
              <span>mount -t proc proc /mnt/proc</span>
              <span>chroot /mnt /bin/bash</span>
              <span>source /etc/profile</span>
            </div>
          </section>

          {/* BOOTLOADER */}
          <section className="wiki-section" id="bootloader">
            <h2>🥾 Bootloader Setup</h2>
            <p>S3RLINUX uses <strong>GRUB2</strong>. Install it yourself after chrooting in.</p>
            <div className="code-block">
              <span className="code-comment"># Install GRUB</span>
              <span>emerge --ask sys-boot/grub</span>
              <span></span>
              <span className="code-comment"># Install to EFI</span>
              <span>grub-install --target=x86_64-efi --efi-directory=/boot/efi</span>
              <span></span>
              <span className="code-comment"># Generate config</span>
              <span>grub-mkconfig -o /boot/grub/grub.cfg</span>
              <span></span>
              <span className="code-comment"># Exit chroot and reboot</span>
              <span>exit</span>
              <span>reboot</span>
            </div>
            <div className="wiki-callout success">
              <span className="callout-icon">🎉</span>
              <span>If everything went right, you'll boot straight into the S3RLINUX MOTD. Welcome to the rave.</span>
            </div>
          </section>

          {/* CUSTOMIZATION */}
          <section className="wiki-section" id="customization">
            <h2>🎨 Customization</h2>

            <h3>Change the prompt</h3>
            <p>Edit <code>/etc/profile</code> or <code>~/.bashrc</code>:</p>
            <div className="code-block">
              <span className="code-comment"># S3RL-style neon prompt</span>
              <span>export PS1='\[\e[38;5;196m\]S3RL\[\e[0m\] \[\e[38;5;51m\]$\[\e[0m\] '</span>
            </div>

            <h3>Edit the MOTD</h3>
            <div className="code-block">
              <span>nano /etc/motd</span>
            </div>

            <h3>Add aliases</h3>
            <div className="code-block">
              <span className="code-comment"># Add to ~/.bashrc</span>
              <span>alias rave='neofetch && echo "RAVE ALL NIGHT 🌈"'</span>
              <span>alias s3rl='echo "S3RLINUX 💀 - Keep the energy alive"'</span>
            </div>

            <h3>Install packages</h3>
            <div className="code-block">
              <span className="code-comment"># Gentoo package manager</span>
              <span>emerge --ask &lt;package-name&gt;</span>
              <span></span>
              <span className="code-comment"># Search for packages</span>
              <span>emerge --search &lt;keyword&gt;</span>
            </div>
          </section>

          {/* KERNEL */}
          <section className="wiki-section" id="kernel">
            <h2>⚡ Kernel Info</h2>
            <div className="wiki-grid-2">
              <div className="wiki-card">
                <h3>🔧 Build Flags</h3>
                <ul>
                  <li><code>-O3</code> optimization</li>
                  <li><code>-march=znver4</code> (Ryzen 7000+) ⭐</li>
                  <li><code>-pipe</code> for faster builds</li>
                  <li>LTO enabled</li>
                </ul>
              </div>
              <div className="wiki-card">
                <h3>📦 Kernel Config</h3>
                <ul>
                  <li>Minimal bloat</li>
                  <li>Performance tuned</li>
                  <li>Modern hardware support</li>
                  <li>Rave-optimized scheduler</li>
                </ul>
              </div>
            </div>
            <h3>Recompile the kernel</h3>
            <div className="code-block">
              <span>cd /usr/src/linux</span>
              <span>make menuconfig</span>
              <span>make -j$(nproc)</span>
              <span>make modules_install</span>
              <span>make install</span>
              <span>grub-mkconfig -o /boot/grub/grub.cfg</span>
            </div>
          </section>

          {/* PACKAGES */}
          <section className="wiki-section" id="packages">
            <h2>📦 Included Packages</h2>
            <div className="wiki-grid-3">
              <div className="pkg-group">
                <h3>🔧 Base System</h3>
                <ul>
                  <li>glibc</li>
                  <li>gcc</li>
                  <li>binutils</li>
                  <li>openrc</li>
                  <li>bash</li>
                </ul>
              </div>
              <div className="pkg-group">
                <h3>🛠️ Tools</h3>
                <ul>
                  <li>vim</li>
                  <li>tmux</li>
                  <li>git</li>
                  <li>curl / wget</li>
                  <li>htop</li>
                </ul>
              </div>
              <div className="pkg-group">
                <h3>✨ Extras</h3>
                <ul>
                  <li>neofetch / fastfetch</li>
                  <li>bat</li>
                  <li>ripgrep</li>
                  <li>python</li>
                  <li>rust (optional)</li>
                </ul>
              </div>
            </div>
          </section>

          {/* LORE */}
          <section className="wiki-section lore-section" id="lore">
            <h2>🌈 The S3RL Spirit</h2>
            <p>S3RLINUX is more than a Linux distribution. It's a philosophy.</p>
            <div className="lore-cards">
              <div className="lore-card">
                <span className="lore-icon">🎵</span>
                <h3>MUSIC IS THE KERNEL</h3>
                <p>Every boot is a drop. Every compile is a build-up. Every package install is a rave.</p>
              </div>
              <div className="lore-card">
                <span className="lore-icon">⚡</span>
                <h3>OPTIMIZE EVERYTHING</h3>
                <p>S3RL optimizes his tracks for maximum energy. You optimize your CFLAGS for maximum performance. Same energy.</p>
              </div>
              <div className="lore-card">
                <span className="lore-icon">💀</span>
                <h3>NO HANDHOLDING</h3>
                <p>There is no desktop environment. There is no GUI. There is only the terminal, the music, and the rave.</p>
              </div>
              <div className="lore-card">
                <span className="lore-icon">🌈</span>
                <h3>RAVE ALL NIGHT</h3>
                <p>The Gentoo elders have blessed you. The S3RL spirit flows through your kernel. Your CFLAGS are weapons.</p>
              </div>
            </div>
            <div className="wiki-callout rave">
              <span className="callout-icon">🎶</span>
              <span>Per the S3RL License (S3RLL), you are legally required to listen to S3RL music while using S3RLINUX. This is non-negotiable. 🌈</span>
            </div>
          </section>

          {/* FAQ */}
          <section className="wiki-section" id="faq">
            <h2>❓ FAQ</h2>
            <div className="faq-list">
              <div className="faq-item">
                <h3>Is Stage 4 a real thing?</h3>
                <p>Yes. Gentoo only officially ships Stage 1–3, but Stage 4 is a well-known community practice. It's just a pre-configured Stage 3. Totally valid.</p>
              </div>
              <div className="faq-item">
                <h3>Will it work on my Intel CPU?</h3>
                <p>Maybe. S3RLINUX is now compiled for <code>znver4</code> (Ryzen 7000+). Intel users may need to recompile the kernel and some packages.</p>
              </div>
              <div className="faq-item">
                <h3>Can I install a desktop environment?</h3>
                <p>You can, but why would you? The terminal IS the desktop environment. If you really need one: <code>emerge --ask kde-plasma/plasma-meta</code> and lose your soul.</p>
              </div>
              <div className="faq-item">
                <h3>Why Gentoo and not Arch?</h3>
                <p>Because Arch is for people who like things to work. Gentoo is for people who like to SUFFER and then feel incredibly smug about it. S3RL approves.</p>
              </div>
              <div className="faq-item">
                <h3>Is this affiliated with S3RL?</h3>
                <p>No. This is a fan project. S3RL is a legendary Happy Hardcore DJ from Brisbane. Go listen to his music. It's on Spotify, YouTube, and SoundCloud.</p>
              </div>
              <div className="faq-item">
                <h3>My cat bit me while installing. Is this normal?</h3>
                <p>Yes. This is a known side effect of Gentoo installations. The S3RLINUX Head of QA (Lucyfer) has reviewed this behavior and considers it a feature.</p>
              </div>
            </div>
          </section>

          <div className="wiki-footer-note">
            <p>🌈 S3RLINUX WIKI — Keep the rave alive 💀</p>
            <Link to="/" className="btn btn-secondary">← BACK TO HOME</Link>
          </div>

        </main>
      </div>

      <footer className="footer">
        <div className="footer-content">
          <p>🌈 S3RLINUX - RAVE ALL NIGHT 💀</p>
          <p>Inspired by S3RL | Based on Gentoo | Licensed under S3RL License</p>
          <p className="copyright">© 2026 S3RLINUX Project | Keep the rave alive</p>
        </div>
      </footer>
    </div>
  )
}

export default Wiki
