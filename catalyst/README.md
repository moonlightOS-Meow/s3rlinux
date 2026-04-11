# S3RLINUX Catalyst Build System
# RAVE ALL NIGHT 🌈💀

This directory contains the [Catalyst](https://wiki.gentoo.org/wiki/Catalyst) spec files for building the S3RLINUX Stage 4 tarball.

## Files

| File | Purpose |
|------|---------|
| `catalyst.conf` | Main catalyst configuration |
| `stage3.spec` | Stage 3 build spec (base system) |
| `stage4.spec` | Stage 4 build spec (S3RLINUX) |
| `prebuild.sh` | Pre-build script (make.conf, portage config) |
| `postbuild.sh` | Post-build script (branding, MOTD, aliases) |

## Requirements

- Gentoo Linux host system (or another Linux with catalyst installed)
- `sys-devel/catalyst` installed
- A Gentoo stage3 tarball downloaded from [gentoo.org](https://www.gentoo.org/downloads/)
- At least 50GB free disk space
- At least 8GB RAM
- A lot of patience (and S3RL playing in the background)

## Build Instructions

### 1. Install Catalyst

```bash
emerge --ask sys-devel/catalyst
```

### 2. Configure Catalyst

```bash
cp catalyst.conf /etc/catalyst/catalyst.conf
```

### 3. Download a Gentoo Stage3

```bash
# Download from https://www.gentoo.org/downloads/
# Pick: amd64 → systemd → stage3-amd64-systemd-YYYYMMDDTHHMMSSZ.tar.xz
wget https://distfiles.gentoo.org/releases/amd64/autobuilds/current-stage3-amd64-systemd/stage3-amd64-systemd-<DATE>.tar.xz

# Move to catalyst storedir
mkdir -p /var/tmp/catalyst/builds/default/
mv stage3-amd64-systemd-<DATE>.tar.xz /var/tmp/catalyst/builds/default/
```

### 4. Take a Portage snapshot

```bash
catalyst --snapshot stable
```

### 5. Copy portage config

```bash
mkdir -p /var/tmp/catalyst/portage/s3rlinux/
cp prebuild.sh /var/tmp/catalyst/portage/s3rlinux/
cp postbuild.sh /var/tmp/catalyst/portage/s3rlinux/
chmod +x /var/tmp/catalyst/portage/s3rlinux/*.sh
```

### 6. Edit stage4.spec

Update `source_subpath` in `stage4.spec` to point to your stage3 tarball filename.

### 7. Build

```bash
catalyst -f stage4.spec
```

### 8. Find your tarball

```bash
ls /var/tmp/catalyst/builds/s3rlinux/
# stage4-amd64-20260411.tar.xz
```

## CPU Architecture

By default, S3RLINUX is compiled for **Ryzen 5000 series** (`znver3`).

| CPU Generation | Flag |
|---------------|------|
| Ryzen 3000/4000 | `-march=znver2` |
| Ryzen 5000 | `-march=znver3` |
| Ryzen 7000+ | `-march=znver4` |
| Intel 12th gen+ | `-march=alderlake` |

Edit `stage4.spec` and `prebuild.sh` to change the march flag.

## Notes

- Build time varies. Expect **2-6 hours** depending on hardware.
- The `postbuild.sh` script sets root password to `s3rlinux` — **change it immediately after booting**.
- Per the S3RL License (S3RLL), you must listen to S3RL music during the build. This is non-negotiable. 🌈

---

*The Gentoo elders have blessed you. The S3RL spirit flows through your kernel. Your CFLAGS are weapons. Now go forth and RAVE ALL NIGHT. 💀*
