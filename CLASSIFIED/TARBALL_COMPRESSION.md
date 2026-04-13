# TARBALL COMPRESSION GUIDE

## Current Size: 2.1GB (too big for GitHub)

## Option 1: Recompress Existing Tarball (Easiest)

```bash
# Install xz if you don't have it
emerge app-arch/xz

# Recompress with maximum compression (slower but smaller)
xz -9 -k stage4-amd64-20260411.tar.bz2

# This gives ~50-60% reduction! Should get you to ~900MB
```

## Option 2: Rebuild with XZ in Spec

Edit `CLASSIFIED/ANOMALY-7000/stage4.spec` and add:
```
compression: xz
```

Then rebuild:
```bash
catalyst -f CLASSIFIED/ANOMALY-7000/stage4.spec
```

## Option 3: Remove Packages (Aggressive)

Edit the spec and comment out some packages:
- `media-video/ffmpeg` - big, remove if no video needs
- `sys-kernel/linux-firmware` - can be downloaded later
- `app-misc/figlet` - nice but optional
- `sys-apps/ripgrep` - replace with grep
- `app-misc/fastfetch` - optional

## Option 4: Split Tarball

If nothing works, split into parts:
```bash
split -b 500M stage4-amd64.tar.xz stage4-part-
# Creates stage4-part-aa, ab, ac, etc.
```

## Recommended (Try This First)

```bash
xz -9 -k stage4-amd64-20260411.tar.bz2
```

This alone should cut it from 2.1GB to ~800-900MB!
