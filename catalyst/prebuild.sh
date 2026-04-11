#!/bin/bash
# S3RLINUX Pre-build Script
# Runs inside the chroot BEFORE package installation
# RAVE ALL NIGHT 🌈💀

set -e

echo "============================================"
echo "  S3RLINUX PRE-BUILD STARTING"
echo "  RAVE ALL NIGHT 💀"
echo "============================================"

# Set timezone
echo "Europe/Warsaw" > /etc/timezone
emerge --config sys-libs/timezone-data

# Set locale
echo "en_US.UTF-8 UTF-8" > /etc/locale.gen
echo "pl_PL.UTF-8 UTF-8" >> /etc/locale.gen
locale-gen
eselect locale set en_US.utf8

# Set hostname
echo "s3rlinux" > /etc/hostname

# Configure make.conf
cat > /etc/portage/make.conf << 'MAKECONF'
# S3RLINUX make.conf
# RAVE ALL NIGHT 🌈💀

# Compiler flags — znver4 = Ryzen 5000 series
# Change to znver4 for Ryzen 7000 series
COMMON_FLAGS="-O3 -march=znver4 -pipe -fomit-frame-pointer"
CFLAGS="${COMMON_FLAGS}"
CXXFLAGS="${COMMON_FLAGS}"
FCFLAGS="${COMMON_FLAGS}"
FFLAGS="${COMMON_FLAGS}"
LDFLAGS="-Wl,-O1 -Wl,--as-needed"

# CPU cores — change to your thread count
MAKEOPTS="-j16 -l16"

# Language
LC_MESSAGES=C.utf8
L10N="en pl"

# Portage
FEATURES="parallel-fetch parallel-install candy"
EMERGE_DEFAULT_OPTS="--jobs=4 --load-average=16"

# USE flags
USE="-gtk -gnome -kde -plasma -qt5 -qt6 -X -wayland networkmanager systemd"
USE="${USE} vim bash zsh curl git tmux"

# No multilib (64-bit only)
ABI_X86="64"

# Licenses
ACCEPT_LICENSE="*"

# Mirrors — change to your closest mirror
GENTOO_MIRRORS="https://distfiles.gentoo.org"

# Portage directory
PORTDIR="/var/db/repos/gentoo"
DISTDIR="/var/cache/distfiles"
PKGDIR="/var/cache/binpkgs"
MAKECONF

echo "[PRE-BUILD] make.conf configured ✅"

# Configure portage directories
mkdir -p /etc/portage/package.use
mkdir -p /etc/portage/package.accept_keywords
mkdir -p /etc/portage/package.mask
mkdir -p /etc/portage/repos.conf

# Accept unstable keywords for some packages
cat > /etc/portage/package.accept_keywords/s3rlinux << 'EOF'
# S3RLINUX unstable packages
app-misc/neofetch ~amd64
sys-apps/bat ~amd64
sys-apps/lsd ~amd64
EOF

echo "[PRE-BUILD] Portage configured ✅"
echo "[PRE-BUILD] Done. Let the rave begin. 🌈"
