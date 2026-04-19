import { useTranslation } from 'react-i18next'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import Header from '../components/Header'
import Footer from '../components/Footer'

const pageVariants = {
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  exit: { opacity: 0 }
}

const stagger = {
  animate: { transition: { staggerChildren: 0.1 } }
}

const fadeUp = {
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.5 } }
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

      {/* HERO */}
      <motion.section className="hero" variants={stagger}>
        <motion.div className="hero-content" variants={fadeUp}>
          <div className="badge">
            <span className="badge-dot"></span>
            {t('hero.badge')}
          </div>
          
          <h1 className="hero-title">
            <span className="title-main">S3RLINUX</span>
          </h1>
          
          <p className="hero-tagline">{t('hero.tagline')}</p>
          
          <p className="hero-desc">{t('hero.desc')}</p>

          <div className="hero-btns">
            <Link to="/download" className="btn btn-primary">⬇ {t('hero.download')}</Link>
            <a href="#features" className="btn btn-secondary">{t('hero.explore')}</a>
          </div>

          <div className="hero-stats">
            <div className="stat">
              <span className="stat-value">2.0</span>
              <span className="stat-label">{t('hero.version')}</span>
            </div>
            <div className="stat-div"></div>
            <div className="stat">
              <span className="stat-value">ARCH</span>
              <span className="stat-label">{t('hero.base')}</span>
            </div>
            <div className="stat-div"></div>
            <div className="stat">
              <span className="stat-value">🌈</span>
              <span className="stat-label">{t('hero.theme')}</span>
            </div>
          </div>
        </motion.div>
      </motion.section>

      {/* ABOUT */}
      <motion.section id="about" className="section" variants={stagger}>
        <div className="container">
          <motion.h2 variants={fadeUp}><span className="accent">//</span> {t('about.title')}</motion.h2>
          <div className="cards">
            {[1, 2, 3].map((i) => (
              <motion.div 
                key={i} 
                className="card"
                variants={fadeUp}
                whileHover={{ scale: 1.03 }}
              >
                <div className="card-icon">
                  {i === 1 ? '🎛️' : i === 2 ? '🖥️' : '💀'}
                </div>
                <h3>{t(`about.cards.${i}.title`)}</h3>
                <p>{t(`about.cards.${i}.desc`)}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* FEATURES */}
      <motion.section id="features" className="section dark" variants={stagger}>
        <div className="container">
          <motion.h2 variants={fadeUp}><span className="accent">//</span> {t('features.title')}</motion.h2>
          <div className="features">
            {t('features.list', { returnObjects: true }).map((f, i) => (
              <motion.div 
                key={i} 
                className="feature"
                variants={fadeUp}
                whileHover={{ x: 10 }}
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
      </motion.section>

      <Footer />
    </motion.div>
  )
}