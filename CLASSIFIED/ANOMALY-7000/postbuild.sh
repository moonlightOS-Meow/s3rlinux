#!/bin/bash
# ============================================================
# PROJECT:CREDO — Post-build Script
# "Might controls everything." 🗡️
# ANOMALY-7000-CREDO — CLASSIFIED
# ============================================================
# Runs inside the chroot AFTER package installation.
# This is where the demon awakens.
# ============================================================

set -e

echo "============================================"
echo "  PROJECT:CREDO POST-BUILD INITIATING"
echo "  DEVIL TRIGGER: ACTIVE"
echo "  ANOMALY-7000-CREDO: MANIFESTING"
echo "============================================"

# ============================================================
# /etc/os-release — CREDO identification
# ============================================================
cat > /etc/os-release << 'EOF'
NAME="S3RLINUX CREDO"
VERSION="1.0-CREDO"
VERSION_ID="1.0"
ID=credo
ID_LIKE=gentoo
PRETTY_NAME="S3RLINUX CREDO 1.0 — THE TIME HAS COME AND SO HAVE I."
HOME_URL="https://moonlightos-meow.github.io/s3rlinux/"
SUPPORT_URL="https://github.com/moonlightOS-Meow/s3rlinux"
BUG_REPORT_URL="https://github.com/moonlightOS-Meow/s3rlinux/issues"
ANSI_COLOR="1;31"
EOF

echo "[CREDO] /etc/os-release manifested ✅"

# ============================================================
# /etc/motd — The demon speaks
# ============================================================
cat > /etc/motd << 'MOTD'

  ██████╗██████╗ ███████╗██████╗  ██████╗
 ██╔════╝██╔══██╗██╔════╝██╔══██╗██╔═══██╗
 ██║     ██████╔╝█████╗  ██║  ██║██║   ██║
 ██║     ██╔══██╗██╔══╝  ██║  ██║██║   ██║
 ╚██████╗██║  ██║███████╗██████╔╝╚██████╔╝
  ╚═════╝╚═╝  ╚═╝╚══════╝╚═════╝  ╚═════╝

 PROJECT:CREDO — S3RLINUX DMC EDITION
 "The time has come... and so have I." 🗡️

 Anomaly: 7000-CREDO | Class: Keter/Thaumiel
 Status : DEVIL TRIGGER ACTIVE
 Warning: You are legally required to listen to S3RL.

 "Might controls everything. And without strength,
  you cannot protect anything. Let alone yourself."
                                        — Vergil

 Website : https://moonlightos-meow.github.io/s3rlinux/
 GitHub  : https://github.com/moonlightOS-Meow/s3rlinux

MOTD

echo "[CREDO] /etc/motd manifested ✅"

# ============================================================
# /etc/issue — Login banner
# ============================================================
cat > /etc/issue << 'EOF'

  PROJECT:CREDO — S3RLINUX DMC EDITION 🗡️
  "The time has come... and so have I."
  DEVIL TRIGGER: ACTIVE

EOF

echo "[CREDO] /etc/issue manifested ✅"

# ============================================================
# /etc/profile.d/credo.sh — Shell environment
# ============================================================
cat > /etc/profile.d/credo.sh << 'EOF'
#!/bin/bash
# PROJECT:CREDO Shell Environment 🗡️

# Dark red prompt — crimson void aesthetic
export PS1='\[\e[38;5;196m\]CREDO\[\e[0m\]@\[\e[38;5;88m\]\h\[\e[0m\]:\[\e[38;5;124m\]\w\[\e[0m\]\$ '

# Aliases
alias ls='lsd'
alias ll='lsd -la'
alias la='lsd -a'
alias cat='bat'
alias grep='rg'
alias power='figlet -f slant "POWER" && echo "Give me more power!"'
alias credo='fastfetch && echo "The time has come... and so have I. 🗡️"'
alias exile='echo "And if I become a demon, so be it. I will endure the exile."'
alias vergil='echo "Might controls everything. And without strength, you cannot protect anything. Let alone yourself."'
alias dante='echo "I should have been the one to fill your dark soul with LIIIIGHT!"'
alias jackpot='echo "Jackpot. 🔫"'
alias update='emerge -avuDN @world'
alias emerge-sync='emerge --sync && emerge -avuDN @world'

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

# CREDO environment variable — for scripts to detect
export CREDO_ACTIVE=1
export DEVIL_TRIGGER=ACTIVE
export ANOMALY=7000-CREDO
EOF

chmod +x /etc/profile.d/credo.sh
echo "[CREDO] Shell environment manifested ✅"

# ============================================================
# Fastfetch config — CREDO themed
# ============================================================
mkdir -p /etc/fastfetch
cat > /etc/fastfetch/config.jsonc << 'EOF'
{
  "$schema": "https://github.com/fastfetch-cli/fastfetch/raw/dev/doc/json_schema.json",
  "logo": {
    "source": "gentoo",
    "color": {
      "1": "red",
      "2": "dark_red"
    }
  },
  "display": {
    "separator": " 🗡️ "
  },
  "modules": [
    "title",
    "separator",
    "os",
    "kernel",
    "uptime",
    "packages",
    "shell",
    "cpu",
    "memory",
    {
      "type": "custom",
      "format": ""
    },
    {
      "type": "custom",
      "format": "🗡️  PROJECT:CREDO — DEVIL TRIGGER ACTIVE"
    },
    {
      "type": "custom",
      "format": "⚠️  ANOMALY-7000-CREDO — KETER/THAUMIEL"
    },
    {
      "type": "custom",
      "format": "🎵 LEGALLY REQUIRED: Listen to S3RL"
    }
  ]
}
EOF

echo "[CREDO] Fastfetch configured ✅"

# ============================================================
# /etc/credo-manifest — Foundation classification file
# ============================================================
cat > /etc/credo-manifest << 'EOF'
# PROJECT:CREDO MANIFEST
# ANOMALY-7000-CREDO
# CLASSIFICATION: KETER/THAUMIEL
# ============================================================
# "From that day forth... my arm changed...
#  and a voice echoed, Power. Give me more power!
#  And if I become a demon, so be it.
#  I will endure the exile.
#  Anything to protect her."
# ============================================================
# This system is property of the S3RLINUX Foundation.
# Unauthorized access will result in [REDACTED].
# You are legally required to listen to S3RL.
# This is non-negotiable.
# ============================================================
BUILD_DATE=2026-04-11
BUILD_HOST=xalatath
ANOMALY_CLASS=Keter/Thaumiel
DEVIL_TRIGGER=ACTIVE
ARCHITECT=znver4
MOTIVATION_PULSE=DETECTED
S3RL_LICENSE=ACTIVE
# ============================================================
EOF

echo "[CREDO] /etc/credo-manifest written ✅"

# ============================================================
# Enable services (systemd)
# ============================================================
systemctl enable systemd-networkd
systemctl enable systemd-resolved
systemctl enable sshd
echo "[CREDO] Systemd services enabled ✅"

# ============================================================
# Set root password
# ============================================================
echo "root:credo" | chpasswd
echo "[CREDO] Root password set to 'credo' — CHANGE THIS. The Foundation is watching. ✅"

# ============================================================
# DONE — THE DEMON HAS AWAKENED
# ============================================================
echo ""
echo "============================================"
echo "  PROJECT:CREDO POST-BUILD COMPLETE 🗡️"
echo ""
echo "  The Gentoo elders have wept."
echo "  The Foundation has lost containment."
echo "  The demon has awakened."
echo "  DEVIL TRIGGER: ACTIVE."
echo ""
echo "  'The time has come... and so have I.'"
echo "============================================"

# ============================================================
# ZSTD COMPRESSION - For GitHub
# ============================================================
echo ""
echo "============================================"
echo "  COMPRESSING TO ZSTD FOR GITHub..."
echo "============================================"

# Find the stage4 tarball
STAGE4_TAR=$(ls -1 stage4-amd64-*.tar.bz2 2>/dev/null | head -1)

if [ -n "$STAGE4_TAR" ]; then
    echo "Found: $STAGE4_TAR"
    
    # Extract bz2
    echo "Extracting bz2..."
    bunzip2 -k "$STAGE4_TAR"
    
    # Get the extracted tar name
    EXTRACTED_TAR="${STAGE4_TAR%.bz2}"
    
    # Compress with zstd level 19 (max compression)
    echo "Compressing with zstd -19..."
    if command -v zstd &> /dev/null; then
        zstd -19 "$EXTRACTED_TAR" -o "${EXTRACTED_TAR%.tar}.tar.zst"
        
        # Get sizes
        ORIG_SIZE=$(du -h "$STAGE4_TAR" | cut -f1)
        NEW_SIZE=$(du -h "${EXTRACTED_TAR%.tar}.tar.zst" | cut -f1)
        
        echo ""
        echo "============================================"
        echo "  COMPRESSION COMPLETE!"
        echo "  Original: $ORIG_SIZE"
        echo "  New: $NEW_SIZE"
        echo "  Output: ${EXTRACTED_TAR%.tar}.tar.zst"
        echo "============================================"
        
        # Clean up extracted tar (keep bz2 and zst)
        rm -f "$EXTRACTED_TAR"
    else
        echo "WARNING: zstd not found! Skipping compression."
        echo "Install zstd: emerge app-arch/zstd"
    fi
else
    echo "ERROR: No stage4 tarball found!"
fi
