# ============================================================
# PROJECT:CREDO — Stage 4 Catalyst Spec
# "THE TIME HAS COME AND SO HAVE I." 🗡️
# ============================================================
# ANOMALY-7000-CREDO — CLASSIFIED — LEVEL 5 CLEARANCE ONLY
# ============================================================
# Usage: catalyst -f catalyst/credo-stage4.spec
# ============================================================
# WARNING: This spec file contains -fmotivation in the CFLAGS.
# The Foundation is not responsible for any demonic entities
# that manifest during compilation. Keep S3RL playing at all
# times. This is non-negotiable.
# ============================================================

subarch: amd64
target: stage4
rel_type: credo
profile: default/linux/amd64/23.0/desktop/systemd
snapshot_treeish: 3b4b7b19c6e516cb055a59a794286ee8a7249b30
source_subpath: default/stage3-amd64-desktop-systemd-20260405T170105Z
# VERSION STAMP - Change this to today's date before building!
# Format: YYYYMMDD-CREDO (e.g., 20260413-CREDO)
version_stamp: 20260413-CREDO

# ============================================================
# COMPRESSION — ZSTD FOR GITHub
# zstd levels 1-19, higher = more compression but slower
# Level 9 is balanced (good ratio, moderate speed)
# Level 19 is max compression (best ratio, slowest)
# ============================================================
compress: zstd:9

# ============================================================
# COMPILER FLAGS — DEVIL TRIGGER ACTIVE
# znver4 = Ryzen 7000+ ONLY
# Attempting to compile on Intel will result in [REDACTED]
# -fmotivation is not a real flag. It's a state of mind.
# ============================================================
cflags: -O3 -march=znver4 -pipe -fomit-frame-pointer
cxxflags: -O3 -march=znver4 -pipe -fomit-frame-pointer
ldflags: -Wl,-O1 -Wl,--as-needed
fcflags: -O3 -march=znver4 -pipe
fflags: -O3 -march=znver4 -pipe

# Portage config dir
portage_confdir: /var/tmp/catalyst/portage/credo/portage-config/
portage_prefix: credo

# Package cache
pkgcache_path: /var/tmp/catalyst/packages/credo/stage4/amd64/

# ============================================================
# PACKAGES
# Minimal. Terminal only. No handholding. No desktop.
# "Might controls everything." — Vergil, make.conf philosophy
# ============================================================
stage4/packages:
# --- Kernel & Boot ---
    sys-kernel/gentoo-sources
    sys-kernel/linux-firmware
    sys-boot/grub

# --- Core tools ---
    app-editors/vim
    app-misc/tmux
    dev-vcs/git
    sys-process/htop
    app-shells/zsh
    app-shells/bash

# --- Filesystem ---
    sys-fs/btrfs-progs
    sys-fs/dosfstools
    sys-block/parted
    sys-fs/e2fsprogs

# --- Network ---
    net-misc/dhcpcd
    net-wireless/wpa_supplicant
    net-wireless/iw

# --- CREDO extras — the demon's toolkit ---
    app-misc/fastfetch
    sys-apps/bat
    sys-apps/ripgrep
    app-misc/figlet
    sys-apps/lsd
    dev-lang/python
    media-video/ffmpeg

# ============================================================
# USE FLAGS
# ============================================================
stage4/use:
    vim
    curl
    git
    -X
    -wayland
    -kde
    -gnome
    -plasma

# ============================================================
# FSSCRIPT — CREDO branding applied inside chroot
# This is where the demon awakens.
# ============================================================
stage4/fsscript: /var/tmp/catalyst/portage/credo/credo-postbuild.sh

# ============================================================
# CLEANUP
# ============================================================
stage4/empty:
    /var/cache/distfiles
    /root/.bash_history
    /tmp

stage4/rm:
    /root/.bash_history
