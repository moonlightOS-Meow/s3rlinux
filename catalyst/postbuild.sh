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
NAME="S3RLinux"
ID="s3rlinux"
ID_LIKE="gentoo"
PRETTY_NAME="S3RLinux 🌈💀"
VERSION_ID="2026.04"
ANSI_COLOR="1;35"
HOME_URL="https://moonlightos-meow.github.io/s3rlinux/"
SUPPORT_URL="https://github.com/moonlightOS-Meow/s3rlinux"
BUG_REPORT_URL="https://github.com/moonlightOS-Meow/s3rlinux/issues"
LOGO="s3rlinux-logo"
VARIANT="Rave"
VARIANT_ID="rave"
EOF

echo "[POST-BUILD] /etc/os-release set ✅"

# ============================================================
# /etc/motd — Welcome to the rave
# ============================================================
cat > /etc/motd << 'MOTD'

\e[38;5;196m  ███████╗██████╗ ██████╗ ██╗     ██╗███╗   ██╗██╗   ██╗██╗  ██╗
\e[38;5;196m  ██╔════╝╚════██╗██╔══██╗██║     ██║████╗  ██║██║   ██║╚██╗██╔╝
\e[38;5;51m  ███████╗ █████╔╝██████╔╝██║     ██║██╔██╗ ██║██║   ██║ ╚███╔╝ 
\e[38;5;51m  ╚════██║ ╚═══██╗██╔══██╗██║     ██║██║╚██╗██║██║   ██║ ██╔██╗ 
\e[38;5;201m  ███████║██████╔╝██║  ██║███████╗██║██║ ╚████║╚██████╔╝██╔╝ ██╗
\e[38;5;201m  ╚══════╝╚═════╝ ╚═╝  ╚═╝╚══════╝╚═╝╚═╝  ╚═══╝ ╚═════╝ ╚═╝  ╚═╝
\e[0m
\e[38;5;201m  🌈 S3RLINUX \e[38;5;51m- RAVE ALL NIGHT \e[38;5;196m💀\e[0m
\e[38;5;93m  VERSION: 2026.04 \e[38;5;117m| ARCH: znver4 \e[38;5;207m| STATUS: RAVING\e[0m

\e[38;5;51m  Welcome back, Comrade. \e[0m
\e[38;5;196m  Your CFLAGS are weapons. Your kernel is the drop. \e[0m
\e[38;5;201m  KEEP THE ENERGY ALIVE. \e[0m

\e[38;5;117m  [COMMANDS] \e[0m
\e[38;5;207m  rave   \e[0m- Show system specs and rave energy
\e[38;5;207m  s3rl   \e[0m- Check S3RL status
\e[38;5;207m  credo  \e[0m- [REDACTED]

\e[38;5;93m  [STATUS] \e[0m
\e[38;5;117m  KDE/GNOME Bloat: \e[38;5;196m0% (PURITY MAINTAINED)\e[0m
\e[38;5;117m  Optimization:    \e[38;5;51mznver4 (MAXIMUM POWER)\e[0m

MOTD

echo "[POST-BUILD] /etc/motd set ✅"

# ============================================================
# /etc/profile.d/s3rlinux.sh — Shell environment
# ============================================================
cat > /etc/profile.d/s3rlinux.sh << 'EOF'
#!/bin/bash
# S3RLINUX Shell Environment 🌈💀

# Neon prompt — S3RL user style
export PS1='\[\e[38;5;196m\]S3RL\[\e[0m\] \[\e[38;5;51m\]$\[\e[0m\] '

# Aliases
alias ls='ls --color=auto'
alias grep='grep --color=auto'
alias rave='fastfetch && echo -e "\e[38;5;201mRAVE ALL NIGHT 🌈\e[0m"'
alias s3rl='echo -e "\e[38;5;51mS3RLINUX 💀 - Keep the energy alive\e[0m"'
alias credo='echo -e "\e[38;5;196mFrom that day forth... my arm changed... and a voice echoed, \"Power. Give me more power!\"\e[0m"'

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

\e[38;5;196m  ███████╗██████╗ ██████╗ ██╗     ██╗███╗   ██╗██╗   ██╗██╗  ██╗
\e[38;5;196m  ██╔════╝╚════██╗██╔══██╗██║     ██║████╗  ██║██║   ██║╚██╗██╔╝
\e[38;5;51m  ███████╗ █████╔╝██████╔╝██║     ██║██╔██╗ ██║██║   ██║ ╚███╔╝ 
\e[38;5;51m  ╚════██║ ╚═══██╗██╔══██╗██║     ██║██║╚██╗██║██║   ██║ ██╔██╗ 
\e[38;5;201m  ███████║██████╔╝██║  ██║███████╗██║██║ ╚████║╚██████╔╝██╔╝ ██╗
\e[38;5;201m  ╚══════╝╚═════╝ ╚═╝  ╚═╝╚══════╝╚═╝╚═╝  ╚═══╝ ╚═════╝ ╚═╝  ╚═╝
\e[0m
\e[38;5;201m  🌈 S3RLINUX \e[38;5;51m- RAVE ALL NIGHT \e[38;5;196m💀\e[0m
\e[38;5;93m  VERSION: 2026.04 \e[38;5;117m| ARCH: znver4 \e[38;5;207m| STATUS: RAVING\e[0m

\e[38;5;51m  Login: \e[0m
EOF

echo "[POST-BUILD] /etc/issue set ✅"

# ============================================================
# Enable services (systemd)
# ============================================================
systemctl enable systemd-networkd
systemctl enable systemd-resolved
systemctl enable sshd
echo "[POST-BUILD] systemd services enabled ✅"

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
