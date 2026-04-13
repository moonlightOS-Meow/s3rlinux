# TARBALL COMPRESSION GUIDE

## Current Size: 2.1GB (too big for GitHub)

---

## Option 1: Use Zstandard (zstd) - RECOMMENDED

You likely have this! Much faster than xz, good compression:

```bash
# Install zstd if needed
emerge app-arch/zstd

# Convert bz2 to zst
bzcat stage4-amd64-20260411.tar.bz2 | zstd -19 -o stage4-amd64-20260411.tar.zst

# OR if it's already extracted:
tar --zstd -cf stage4-amd64-20260411.tar.zst -C / [path]

# Should get you to ~1GB (smaller than bz2, bigger than xz)
```

---

## Option 2: Use 7zip (7z)

You have 7zip! Solid compression:

```bash
# Convert to 7z format
7za a -t7z -mx=9 stage4-amd64-20260411.tar.7z stage4-amd64-20260411.tar.bz2

# Or extract then compress:
7za a -t7z -mx=9 stage4-amd64-20260411.tar.7z stage4-amd64-20260411.tar

# This gets similar size to xz! ~800-900MB
```

---

## Option 3: Use gzip (fast, less compression)

```bash
# If nothing else works:
gzip -k -9 stage4-amd64-20260411.tar.bz2
# This won't help much (gzip < bz2)
```

---

## Option 4: Rebuild Smaller (Remove Packages)

Edit `CLASSIFIED/ANOMALY-7000/stage4.spec` and comment out:

```bash
# Remove these big boys:
# media-video/ffmpeg     # ~200MB
# sys-kernel/linux-firmware  # ~150MB
# app-misc/figlet        # small but optional
# sys-apps/ripgrep      # small but replaceable
```

Then rebuild:
```bash
catalyst -f CLASSIFIED/ANOMALY-7000/stage4.spec
```

---

## Quick Test (Try First)

```bash
# Check what you have
which 7za || which 7z || which zstd || which zcat
```

---

## Recommended Command (pick yours)

```bash
# If you have 7za/7z:
7za a -t7z -mx=9 stage4-amd64-20260411.tar.7z stage4-amd64-20260411.tar.bz2

# If you have zstd:
bzcat stage4-amd64-20260411.tar.bz2 | zstd -19 -o stage4-amd64-20260411.tar.zst
```

This should get you to **~800-900MB**!
