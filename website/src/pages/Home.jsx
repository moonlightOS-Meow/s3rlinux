import { useTranslation } from 'react-i18next'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import Header from '../components/Header'
import Footer from '../components/Footer'

// DMC page animations
const pageVariants = {
  initial: { opacity: 0 },
  animate: { opacity: 1, transition: { duration: 0.4 } },
  exit: { opacity: 0 }
}

// Hero section - staggered entrance
const heroVariants = {
  initial: { opacity: 0 },
  animate: { 
    opacity: 1,
    transition: { staggerChildren: 0.15, delayChildren: 0.2 }
  }
}

// Badge - pop in
const badgeVariants = {
  initial: { scale: 0, opacity: 0 },
  animate: { 
    scale: [0, 1.1, 1],
    opacity: 1,
    transition: { duration: 0.5, times: [0, 0.7, 1] }
  }
}

// Title - slash reveal (DMC style)
const titleVariants = {
  initial: { opacity: 0, x: -100, filter: "blur(20px)" },
  animate: { 
    opacity: 1, 
    x: 0,
    filter: "blur(0px)",
    transition: { duration: 0.6, ease: "easeOut" }
  }
}

// Tagline - pulse in
const taglineVariants = {
  initial: { opacity: 0, scale: 0.8 },
  animate: { 
    opacity: [0.5, 1, 0.5],
    scale: 1,
    transition: { duration: 0.4 }
  }
}

// Cards - rise up with stagger
const cardVariants = {
  initial: { opacity: 0, y: 60 },
  animate: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" }
  }
}

// Feature items - slide in
const featureVariants = {
  initial: { opacity: 0, x: -30 },
  animate: { 
    opacity: 1, 
    x: 0,
    transition: { duration: 0.4 }
  }
}

// Bounce hover
const cardHover = {
  hover: { 
    y: -8,
    transition: { duration: 0.2 }
  }
}

export default function Home() {
  const { t } = useTranslation()

  return (
    <motion.div 
      className="page"
      variants={pageVariants}
      initial="initial"
      animate="animate"
      exit="exit"
    >
      <Header />

      {/* HERO with stagger animation */}
      <motion.section className="hero" variants={heroVariants}>
        <motion.div className="hero-content">
          <motion.div className="badge" variants={badgeVariants}>
            <span className="badge-dot"></span>
            {t('hero.badge')}
          </motion.div>
          
          <motion.h1 className="hero-title" variants={titleVariants}>
            <span className="title-main">S3RLINUX</span>
          </motion.h1>
          
          <motion.p className="hero-tagline" variants={taglineVariants}>
            {t('hero.tagline')}
          </motion.p>
          
          <motion.p className="hero-desc" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.6 }}>
            {t('hero.desc')}
          </motion.p>
          
          <motion.div className="hero-btns" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.8 }}>
            <Link to="/download" className="btn btn-primary">
              ⬇ {t('hero.download')}
            </Link>
            <a href="#features" className="btn btn-secondary">
              {t('hero.explore')}
            </a>
          </motion.div>
          
          <motion.div className="hero-stats" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1 }}>
            <div className="stat">
              <span className="stat-value">{t('hero.version')}</span>
              <span className="stat-label">v2.0</span>
            </div>
            <div className="stat-div"></div>
            <div className="stat">
              <span className="stat-value">{t('hero.base')}</span>
              <span className="stat-label">ARCH</span>
            </div>
            <div className="stat-div"></div>
            <div className="stat">
              <span className="stat-value">{t('hero.theme')}</span>
              <span className="stat-label">🌈</span>
            </div>
          </motion.div>
        </motion.div>
      </motion.section>

      {/* ABOUT with cards */}
      <section className="section" id="about">
        <div className="container">
          <motion.h2 
            initial={{ opacity: 0, y: 30 }} 
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <span className="accent">//</span> {t('about.title')}
          </motion.h2>
          
          <div className="cards">
            {Object.values(t('about.cards', { returnObjects: true })).map((card, i) => (
              <motion.div 
                key={i}
                className="card"
                variants={cardVariants}
                initial="initial"
                whileInView="animate"
                viewport={{ once: true }}
                transition={{ delay: i * 0.15 }}
                whileHover="hover"
                variants={cardHover}
              >
                <div className="card-icon">
                  {i === 0 ? '🎛️' : i === 1 ? '🖥️' : '💀'}
                </div>
                <h3>{card.title}</h3>
                <p>{card.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FEATURES with slide */}
      <section className="section dark" id="features">
        <div className="container">
          <motion.h2 
            initial={{ opacity: 0, y: 30 }} 
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <span className="accent">//</span> {t('features.title')}
          </motion.h2>
          
          <div className="features">
            {t('features.list', { returnObjects: true }).map((f, i) => (
              <motion.div 
                key={i}
                className="feature"
                variants={featureVariants}
                initial="initial"
                whileInView="animate"
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                whileHover={{ x: 10, borderColor: 'var(--purple)' }}
              >
                <span className="feature-num">0{i + 1}</span>
                <div>
                  <h3>{f.title}</h3>
                  <p>{f.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </motion.div>
  )
}
