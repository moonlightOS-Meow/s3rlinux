# ============================================================
# S3RLINUX Stage 4 Catalyst Spec
# RAVE ALL NIGHT 🌈💀
# ============================================================
# Usage: catalyst -f catalyst/stage4.spec
# ============================================================

subarch: amd64
target: stage4
rel_type: s3rlinux
profile: default/linux/amd64/23.0/desktop/systemd
snapshot_treeish: 3b4b7b19c6e516cb055a59a794286ee8a7249b30
source_subpath: default/stage3-amd64-desktop-systemd-20260405T170105Z
version_stamp: 20260411

# Compiler flags — Ryzen 7000+ (znver4)
cflags: -O3 -march=znver4 -pipe -fomit-frame-pointer
cxxflags: -O3 -march=znver4 -pipe -fomit-frame-pointer
ldflags: -Wl,-O1 -Wl,--as-needed
fcflags: -O3 -march=znver4 -pipe
fflags: -O3 -march=znver4 -pipe

# Portage config dir
portage_confdir: /var/tmp/catalyst/portage/s3rlinux/portage-config/
portage_prefix: s3rlinux

# Package cache
pkgcache_path: /var/tmp/catalyst/packages/s3rlinux/stage4/amd64/

# ============================================================
# PACKAGES — prefix required for stage4
# ============================================================
stage4/packages:
    sys-libs/glibc
    sys-devel/gcc
    sys-devel/binutils
    sys-apps/baselayout
    sys-apps/systemd
    sys-apps/systemd-utils
    sys-kernel/gentoo-sources
    sys-kernel/linux-firmware
    sys-boot/grub
    app-editors/vim
    app-misc/tmux
    dev-vcs/git
    net-misc/curl
    net-misc/wget
    sys-process/htop
    app-shells/bash
    app-shells/zsh
    sys-fs/e2fsprogs
    sys-fs/btrfs-progs
    sys-fs/dosfstools
    sys-block/parted
    net-misc/dhcpcd
    net-wireless/wpa_supplicant
    net-wireless/iw
    app-misc/fastfetch
    sys-apps/bat
    sys-apps/ripgrep
    app-misc/figlet
    sys-apps/lsd
    dev-lang/python
    media-video/ffmpeg

# ============================================================
# USE flags for stage4
# ============================================================
stage4/use:
    systemd
    -X
    -wayland
    -kde
    -gnome
    -qt5
    -qt6
    vim
    curl
    git

# ============================================================
# FSSCRIPT — branding applied inside chroot after packages
# ============================================================
stage4/fsscript: /var/tmp/catalyst/portage/s3rlinux/postbuild.sh

# ============================================================
# Clean up after build
# ============================================================
stage4/empty:
    /var/cache/distfiles
    /root/.bash_history
    /tmp

stage4/rm:
    /root/.bash_history
