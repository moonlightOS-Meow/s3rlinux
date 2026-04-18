import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'

const resources = {
  en: {
    translation: {
      nav: { about: 'About', features: 'Features', download: 'Download', github: 'GitHub' },
      hero: { badge: 'ARCH LINUX BASED • pearOS ERA', tagline: 'RAVE ALL NIGHT 🌈💀', desc: 'The RAVE-themed Arch Linux distribution. Custom branding, neon aesthetics, pure chaos. No handholding. Just vibes.', download: 'DOWNLOAD', explore: 'EXPLORE', version: 'Version', base: 'Base', theme: 'Theme' },
      about: { title: 'WHAT IS S3RLINUX?', cards: { 1: { title: 'RAVE AESTHETICS', desc: 'Neon colors, cyberpunk vibes, terminal with personality. Your system should feel like a festival.' }, 2: { title: 'ARCH POWER', desc: 'Built on Arch Linux. Rolling release, bleeding edge, complete control. No bloat.' }, 3: { title: 'CHAOS MODE', desc: 'For those who break systems to fix them. Custom DE, terminal configs, and memes.' } } },
      features: { title: 'FEATURES', list: [{ title: 'Custom Desktop Environment', desc: 'Hyprland with S3RL-themed configs, custom bar, animated wallpapers' }, { title: 'Neon Terminal', desc: 'Zsh with powerlevel10k, S3RL theme, custom aliases and functions' }, { title: 'pearOS Integration', desc: 'Latest pearOS apps and utilities, seamless system integration' }, { title: 'AUR Support', desc: 'Full access to AUR with custom S3RL package repository' }] },
      download: { title: 'GET S3RLINUX', stable: 'STABLE', beta: 'BETA', v: 'v2.0', nightly: 'NIGHTLY', arch: 'Arch-based', latest: 'Latest builds', maybreak: 'May break', size: '~2.5GB', sizeN: '~2.6GB' },
      footer: { tagline: 'RAVE ALL NIGHT 🌈💀', github: 'GitHub', wiki: 'Wiki', discord: 'Discord', copy: '© 2026 S3RLINUX PROJECT • S3RLL v2.0' }
    }
  },
  ja: {
    translation: {
      nav: { about: '概要', features: '機能', download: 'ダウンロード', github: 'GitHub' },
      hero: { badge: 'ARCH LINUX ベース • pearOS 時代', tagline: 'RAVE ALL NIGHT 🌈💀', desc: 'RAVEテーマのArch Linuxディストリビューション。カスタムブランド、ネオン美学、純粋なカオス。ハンドHoldingなし。'},
      about: { title: 'S3RLINUXとは？', cards: { 1: { title: 'RAVE美学', desc: 'ネオンカラー、サイバーパンク雰囲気、ターミナルに個性。システムはフェスティバルのように感じるはず。' }, 2: { title: 'ARCHの力', desc: 'Arch Linux上で構築。ローリングリリース、最先端、完全制御。ノーボloat。' }, 3: { title: 'カオスモード', desc: 'システムを壊して直す人向け。カスタムDE、ターミナル設定、 Memes。' } } },
      features: { title: '機能', list: [{ title: 'カスタムDE', desc: 'Hyprland + S3RLテーマ、カスタムバー、アニメーション wallpaper' }, { title: 'ネオンターミナル', desc: 'Zsh + powerlevel10k、S3RLテーマ、カスタムエイリアス' }, { title: 'pearOS統合', desc: '最新のpearOSアプリとユーティリティ、シームレス統合' }, { title: 'AURサポート', desc: 'AUR完全アクセス + カスタムS3RLリポジトリ' }] },
      download: { title: 'S3RLINUXを入手', stable: '安定', beta: 'ベータ', v: 'v2.0', nightly: 'ナイトリー', arch: 'Archベース', latest: '最新ビルド', maybreak: '壊れるかも', size: '~2.5GB', sizeN: '~2.6GB' },
      footer: { tagline: 'RAVE ALL NIGHT 🌈💀', github: 'GitHub', wiki: 'Wiki', discord: 'Discord', copy: '© 2026 S3RLINUX PROJECT' }
    }
  },
  de: {
    translation: {
      nav: { about: 'Über', features: 'Features', download: 'Download', github: 'GitHub' },
      hero: { badge: 'ARCH LINUX BASIERT • pearOS ÄRA', tagline: 'RAVE ALL NIGHT 🌈💀', desc: 'Der RAVE-thematisierte Arch Linux Verteilung. Benutzerdefinierte Marke, Neon-Ästhetik, reines Chaos. Kein Handholding. Nur Vibes.' },
      about: { title: 'WAS IST S3RLINUX?', cards: { 1: { title: 'RAVE ÄSTHETIK', desc: 'Neonfarben, Cyberpunk-Vibes, Terminal mit Persönlichkeit. Dein System sollte sich wie ein Festival anfühlen.' }, 2: { title: 'ARCH POWER', desc: 'Auf Arch Linux gebaut. Rolling Release, bleeding edge, volle Kontrolle. Kein Bloat.' }, 3: { title: 'CHAOS-MODUS', desc: 'Für diejenigen, die Systeme zerbrechen, um sie zu reparieren. Custom DE, Terminal-Configs und Memes.' } } },
      features: { title: 'FEATURES', list: [{ title: 'Custom Desktop Environment', desc: 'Hyprland mit S3RL-Configs, Custom Bar, animierte Wallpaper' }, { title: 'Neon Terminal', desc: 'Zsh mit powerlevel10k, S3RL Theme, benutzerdefinierte Aliases' }, { title: 'pearOS Integration', desc: 'Neueste pearOS Apps und Utilities, nahtlose Integration' }, { title: 'AUR Support', desc: 'Voller Zugriff auf AUR mit S3RL Paket-Repository' }] },
      download: { title: 'S3RLINUX HOLEN', stable: 'STABIL', beta: 'BETA', v: 'v2.0', nightly: 'NIGHTLY', arch: 'Arch-basiert', latest: 'Neueste Builds', maybreak: 'Kann kaputtgehen', size: '~2.5GB', sizeN: '~2.6GB' },
      footer: { tagline: 'RAVE ALL NIGHT 🌈💀', github: 'GitHub', wiki: 'Wiki', discord: 'Discord', copy: '© 2026 S3RLINUX PROJECT' }
    }
  },
  fr: {
    translation: {
      nav: { about: 'À propos', features: 'Fonctionnalités', download: 'Télécharger', github: 'GitHub' },
      hero: { badge: 'BASÉ SUR ARCH LINUX • ÈRE pearOS', tagline: 'RAVE ALL NIGHT 🌈💀', desc: 'Distribution Arch Linux theme RAVE. Personnalisation, esthétique neon, chaos pur. Pas de handholding. Juste des vibes.' },
      about: { title: 'QUEST-CE QUE S3RLINUX?', cards: { 1: { title: 'ESTHÉTIQUE RAVE', desc: 'Couleurs neon, vibes cyberpunk, terminal avec personnalite. Votre systeme devrait se sentir comme un festival.' }, 2: { title: 'PUISSANCE ARCH', desc: 'Construit sur Arch Linux. Rolling release, bleeding edge, controle total. Pas de bloat.' }, 3: { title: 'MODE CHAOS', desc: 'Pour ceux qui cassent les systemes pour les reparer. DE personnalise, configs terminal et memes.' } } },
      features: { title: 'FONCTIONNALITÉS', list: [{ title: 'Environnement personnalise', desc: 'Hyprland avec configs S3RL, barre personnalisee, wallpapers animes' }, { title: 'Terminal Neon', desc: 'Zsh avec powerlevel10k, theme S3RL, aliases personnalises' }, { title: 'Integration pearOS', desc: 'Dernieres apps et utilitaires pearOS, integration transparente' }, { title: 'Support AUR', desc: 'Acces complet a AUR avec depot de paquets S3RL' }] },
      download: { title: 'OBTENIR S3RLINUX', stable: 'STABLE', beta: 'BETA', v: 'v2.0', nightly: 'NIGHTLY', arch: 'Base Arch', latest: 'Derniers builds', maybreak: 'Peut casser', size: '~2.5GB', sizeN: '~2.6GB' },
      footer: { tagline: 'RAVE ALL NIGHT 🌈💀', github: 'GitHub', wiki: 'Wiki', discord: 'Discord', copy: '© 2026 S3RLINUX PROJECT' }
    }
  }
}

i18n.use(initReactI18next).init({
  resources,
  lng: 'en',
  fallbackLng: 'en',
  interpolation: { escapeValue: false }
})

export default i18n