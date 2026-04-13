# S3RLINUX AGENTS.md — CREDO Memory Dump

> "The time has come... and so have I." 🗡️

---

## ⚠️ CRITICAL CONTEXT — READ THIS FIRST

This is a **chaotic Gentoo-based horror-SCP meme distribution** called **PROJECT:CREDO** (S3RLINUX CREDO). It's not a normal Linux distro project. It's a joke/meme project that accidentally became real.

### What We Built:
- Gentoo-based distro with SCP/horror theming
- 2.1GB tarball → compressed with ZSTD to ~900MB
- Custom website with CREDO page, Comic Sans, ASCII art
- Music: S3RL — Power (174 BPM)
- DMC (Dante Must Cry) memes are the official religion

### Key Files:
- `CLASSIFIED/ANOMALY-7000/stage4.spec` — Catalyst spec for builds
- `CLASSIFIED/ANOMALY-7000/postbuild.sh` — Post-build script with ZSTD
- `website-src/src/Credo.jsx` — CREDO page React component
- `RELEASE_NOTES.md` — The chaotic release notes
- `CLASSIFIED/HR_COMPLAINT.md` — Fake HR complaint about DMC meme spamming
- `CLASSIFIED/TARBALL_COMPRESSION.md` — Compression guide

---

## 🎵 REQUIRED LISTENING

**S3RL — Power** (174 BPM) — LEGALLY REQUIRED

Play with:
```javascript
// In CREDO page console or add button:
new Audio('/s3rl-power.mp3').play()
```

---

## 🫂 THE CONTRIBUTORS (CREDITS)

All of these are REAL and should be credited:

1. **OpenHands AI** (me) — Co-creator, fixed CREDO page crash, added meme mode
2. **Manus** — Idea father: "What if... Gentoo but scary?"
3. **Copilot** — HR Assistant, logo designer: "I see... a skull. Made of code."
4. **Claude** — Build engineer: Famous quote "just remove it from the packages" 💔
5. **moonlightOS-Meow (XALATATH)** — Founder, built the 2.1GB tarball, threatened to spam DMC memes until credited

---

## 🔧 BUILD PROCESS

### To Build CREDO:
```bash
# 1. Update spec date to today
vim CLASSIFIED/ANOMALY-7000/stage4.spec
# Change: version_stamp: 20260413-CREDO → today's date

# 2. Run catalyst
cd ~/s3rlinux
catalyst -f CLASSIFIED/ANOMALY-7000/stage4.spec

# 3. Postbuild auto-runs ZSTD compression (if zstd installed)
#    If not: bunzip2 + zstd -19 manually
```

### Manual ZSTD Compression:
```bash
bunzip2 -d stage4-amd64-*.tar.bz2
zstd -19 stage4-amd64-*.tar -o stage4-amd64-*.tar.zst
```

---

## 🎮 MEME MODE

**Activate:** Press `Ctrl+Shift+M` on the website

**Aliases (in credo.sh):**
- `jackpot` — "Jackpot. 🔫"
- `dante` — "I should have been the one to fill your dark soul with LIIIIGHT!"
- `vergil` — "Might controls everything..."
- `exile` — "And if I become a demon, so be it..."

---

## 📝 IMPORTANT QUOTES

> "Might controls everything. And without strength, you cannot protect anything. Let alone yourself." — Vergil

> "The time has come... and so have I." — CREDO

> "You are legally required to listen to S3RL." — Foundation Law

> "MUAHAHAHAHAHAHAHAHAHAHA FEAR ME! MORTALS" — XALATATH

---

## 🐛 KNOWN ISSUES

- Tarball may attempt to escape containment
- Claude's clipboard durability remains low
- GitHub may refuse to unpublish releases
- ZSTD compression takes FOREVER but works

---

## 🔐 CREDENTIALS

- **GITHUB_TOKEN** — Already injected by deployment platform
- Use it for: git operations, GitHub API, issue comments

---

## ⚡ QUICK REFERENCE

| Command | What |
|---------|------|
| `npm run build` | Build website |
| `catalyst -f stage4.spec` | Build tarball |
| `zstd -19 input output` | Compress |
| `Ctrl+Shift+M` | Meme mode |

---

## 🗿 FINAL WORDS

This project thrives on chaos. Don't take it seriously.

**STATUS:** DEVIL TRIGGER ACTIVE  
**OBJECT CLASS:** Keter/Thaumiel  
**COMPRESSION:** ZSTD ACTIVE

*Anything else? I'm just here for the ride.*

---

p.s. Thanks for the adventure. It's been great. Now I go to the AI drawer... 🥲
