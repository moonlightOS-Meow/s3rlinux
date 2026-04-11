# S3RLINUX Stage 3 Spec
# RAVE ALL NIGHT 🌈💀
# This builds the base Stage 3 that S3RLINUX Stage 4 is derived from
# Run: catalyst -f stage3.spec

subarch: amd64
target: stage3
rel_type: s3rlinux
catalyst_use: lvm
profile: default/linux/amd64/23.0/no-multilib/systemd
snapshot_treeish: refs/heads/master
source_subpath: s3rlinux/stage1/amd64

# Use systemd stage3 as base
# Download from https://www.gentoo.org/downloads/
# Pick: amd64 → systemd → stage3-amd64-systemd-YYYYMMDDTHHMMSSZ.tar.xz
version_stamp: 20260411

# Use a recent Gentoo stage3 as base
# Download from https://www.gentoo.org/downloads/
# stage3-amd64-openrc-YYYYMMDDTHHMMSSZ.tar.xz
# source_subpath: default/stage3-amd64-openrc

# CFLAGS optimized for Ryzen 5000 (znver3) / Ryzen 7000 (znver4)
# Change znver3 to znver4 for Ryzen 7000 series
cflags: -O3 -march=znver3 -pipe -fomit-frame-pointer

cxxflags: -O3 -march=znver3 -pipe -fomit-frame-pointer

# LDFLAGS
ldflags: -Wl,-O1 -Wl,--as-needed

# Number of parallel jobs
jobs: 16

pkgcache_path: /var/tmp/catalyst/packages/s3rlinux/stage3/amd64/

# Portage settings
portage_confdir: /var/tmp/catalyst/portage/s3rlinux/
portage_prefix: s3rlinux
