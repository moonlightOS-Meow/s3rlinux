#!/bin/bash
# S3RLINUX Post-build Script
# Runs inside the chroot AFTER package installation
# This is where the rave branding gets applied 🌈💀

set -e

echo "============================================"
echo "  S3RLINUX POST-BUILD — APPLYING RAVE SKIN"
echo "  RAVE ALL NIGHT 💀"
echo "============================================"

# ============================================================
# /etc/os-release — S3RLINUX identification
# ============================================================
cat > /etc/os-release << 'EOF'
NAME="S3RLINUX"
VERSION="1.0"
VERSION_ID="1.0"
ID=s3rlinux
ID_LIKE=gentoo
PRETTY_NAME="S3RLINUX 1.0 (RAVE ALL NIGHT)"
HOME_URL="https://moonlightos-meow.github.io/s3rlinux/"
SUPPORT_URL="https://github.com/moonlightOS-Meow/s3rlinux"
BUG_REPORT_URL="https://github.com/moonlightOS-Meow/s3rlinux/issues"
ANSI_COLOR="1;35"
EOF

echo "[POST-BUILD] /etc/os-release set ✅"

# ============================================================
# /etc/motd — Welcome to the rave
# ============================================================
cat > /etc/motd << 'MOTD'

 ███████╗██████╗ ██████╗ ██╗     ██╗███╗   ██╗██╗   ██╗██╗  ██╗
 ██╔════╝╚════██╗██╔══██╗██║     ██║████╗  ██║██║   ██║╚██╗██╔╝
 ███████╗ █████╔╝██████╔╝██║     ██║██╔██╗ ██║██║   ██║ ╚███╔╝
 ╚════██║ ╚═══██╗██╔══██╗██║     ██║██║╚██╗██║██║   ██║ ██╔██╗
 ███████║██████╔╝██║  ██║███████╗██║██║ ╚████║╚██████╔╝██╔╝ ██╗
 ╚══════╝╚═════╝ ╚═╝  ╚═╝╚══════╝╚═╝╚═╝  ╚═══╝ ╚═════╝ ╚═╝  ╚═╝

 🌈 RAVE ALL NIGHT 🌈
 Welcome to S3RLINUX — Gentoo Stage 4 Distribution
 Inspired by S3RL — Happy Hardcore with a layer of cringe

 Website : https://moonlightos-meow.github.io/s3rlinux/
 GitHub  : https://github.com/moonlightOS-Meow/s3rlinux
 Music   : https://open.spotify.com/artist/11aa081aKYUzmeFm0yHdT2

 Remember: You are legally required to listen to S3RL while using this OS.
           This is non-negotiable. 💀

MOTD

echo "[POST-BUILD] /etc/motd set ✅"

# ============================================================
# /etc/profile.d/s3rlinux.sh — Shell environment
# ============================================================
cat > /etc/profile.d/s3rlinux.sh << 'EOF'
#!/bin/bash
# S3RLINUX Shell Environment 🌈

# Neon prompt — purple user, cyan path, pink $
export PS1='\[\e[38;5;135m\]\u\[\e[0m\]@\[\e[38;5;51m\]S3RLINUX\[\e[0m\]:\[\e[38;5;201m\]\w\[\e[0m\]\$ '

# Aliases
alias ls='lsd'
alias ll='lsd -la'
alias la='lsd -a'
alias cat='bat'
alias grep='rg'
alias rave='neofetch && figlet -f slant "RAVE ALL NIGHT"'
alias s3rl='echo "🌈 S3RLINUX 💀 - RAVE ALL NIGHT - Keep the energy alive"'
alias emerge-sync='emerge --sync && emerge -avuDN @world'
alias update='emerge -avuDN @world'

# Colors
export TERM="xterm-256color"
export CLICOLOR=1

# Editor
export EDITOR="vim"
export VISUAL="vim"

# History
export HISTSIZE=10000
export HISTFILESIZE=20000
export HISTCONTROL=ignoredups:erasedups
EOF

chmod +x /etc/profile.d/s3rlinux.sh
echo "[POST-BUILD] /etc/profile.d/s3rlinux.sh set ✅"

# ============================================================
# /etc/issue — Login banner
# ============================================================
cat > /etc/issue << 'EOF'

  S3RLINUX 1.0 — RAVE ALL NIGHT 🌈💀
  Gentoo Stage 4 Distribution

EOF

echo "[POST-BUILD] /etc/issue set ✅"

# ============================================================
# Neofetch config — S3RLINUX themed
# ============================================================
mkdir -p /etc/neofetch
cat > /etc/neofetch/config.conf << 'EOF'
# S3RLINUX Neofetch Config
print_info() {
    info title
    info underline
    info "OS" distro
    info "Kernel" kernel
    info "Uptime" uptime
    info "Packages" packages
    info "Shell" shell
    info "CPU" cpu
    info "Memory" memory
    prin ""
    prin "🌈 RAVE ALL NIGHT 💀"
    prin "Inspired by S3RL"
}

ascii_distro="gentoo"
ascii_colors=(5 6 5 6 5 6)
bold="on"
EOF

echo "[POST-BUILD] Neofetch configured ✅"

# ============================================================
# Enable services
# ============================================================
rc-update add dhcpcd default
rc-update add sshd default
echo "[POST-BUILD] Services enabled ✅"

# ============================================================
# Set root password placeholder
# ============================================================
echo "root:s3rlinux" | chpasswd
echo "[POST-BUILD] Root password set to 's3rlinux' — CHANGE THIS IMMEDIATELY ✅"

# ============================================================
# DONE
# ============================================================
echo ""
echo "============================================"
echo "  S3RLINUX POST-BUILD COMPLETE 🌈💀"
echo "  The Gentoo elders have blessed you."
echo "  The S3RL spirit flows through your kernel."
echo "  Your CFLAGS are weapons."
echo "  Now go forth and RAVE ALL NIGHT."
echo "============================================"
