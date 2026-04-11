# ============================================================
# S3RLINUX Stage 4 Catalyst Spec
# RAVE ALL NIGHT 🌈💀
# ============================================================
# Usage: catalyst -f stage4.spec
# Requires: catalyst, a Gentoo stage3 tarball as source
# ============================================================

subarch: amd64
target: stage4
rel_type: s3rlinux
profile: default/linux/amd64/23.0/no-multilib/systemd
snapshot_treeish: refs/heads/master

# Source: point to your built stage3 or a downloaded Gentoo stage3
# Change the date stamp to match your stage3 tarball
source_subpath: s3rlinux/stage3/amd64/20260411

version_stamp: 20260411

# ============================================================
# COMPILER FLAGS — Optimized for Ryzen 5000 (znver4)
# Change znver4 → znver4 for Ryzen 7000 series
# Change znver4 → znver2 for Ryzen 3000/4000 series
# ============================================================
cflags: -O3 -march=znver4 -pipe -fomit-frame-pointer
cxxflags: -O3 -march=znver4 -pipe -fomit-frame-pointer
ldflags: -Wl,-O1 -Wl,--as-needed
fcflags: -O3 -march=znver4 -pipe
fflags: -O3 -march=znver4 -pipe

# Parallel jobs — set to your CPU thread count
jobs: 16

# ============================================================
# PACKAGE CACHE
# ============================================================
pkgcache_path: /var/tmp/catalyst/packages/s3rlinux/stage4/amd64/

# ============================================================
# PORTAGE CONFIG
# ============================================================
portage_confdir: /var/tmp/catalyst/portage/s3rlinux/
portage_prefix: s3rlinux

# ============================================================
# PACKAGES TO INSTALL IN STAGE 4
# ============================================================
packages:
# --- Base system ---
    sys-libs/glibc
    sys-devel/gcc
    sys-devel/binutils
    sys-apps/baselayout
    sys-apps/systemd
    sys-apps/systemd-utils

# --- Kernel ---
    sys-kernel/gentoo-sources
    sys-kernel/linux-firmware
    sys-boot/grub

# --- Core tools ---
    app-editors/vim
    app-misc/tmux
    dev-vcs/git
    net-misc/curl
    net-misc/wget
    sys-process/htop
    app-shells/bash
    app-shells/zsh

# --- Filesystem tools ---
    sys-fs/e2fsprogs
    sys-fs/btrfs-progs
    sys-fs/dosfstools
    sys-block/parted

# --- Network ---
    net-misc/dhcpcd
    net-wireless/wpa_supplicant
    net-wireless/iw

# --- S3RLINUX extras ---
    app-misc/neofetch
    sys-apps/bat
    sys-apps/ripgrep
    app-misc/figlet
    sys-apps/lsd

# --- Development (optional) ---
    dev-lang/python
    dev-lang/rust

# --- Media (optional) ---
    media-video/ffmpeg

# ============================================================
# STAGE 4 TARBALL OUTPUT
# ============================================================
# The resulting tarball will be:
# /var/tmp/catalyst/builds/s3rlinux/stage4-amd64-20260411.tar.xz

# ============================================================
# PRE-BUILD SCRIPT
# Runs inside the chroot before package installation
# ============================================================
prebuild: /var/tmp/catalyst/portage/s3rlinux/prebuild.sh

# ============================================================
# POST-BUILD SCRIPT
# Runs inside the chroot after package installation
# This is where S3RLINUX branding gets applied
# ============================================================
postbuild: /var/tmp/catalyst/portage/s3rlinux/postbuild.sh

# ============================================================
# EXTRA MOUNTS (if needed)
# ============================================================
# mounts:
#     /proc
#     /sys
#     /dev
