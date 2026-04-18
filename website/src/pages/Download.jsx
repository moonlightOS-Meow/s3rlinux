import { useEffect, useState } from 'react'
import { useTranslation } from 'react-i18next'
import { motion } from 'framer-motion'
import { formatDistanceToNow } from 'date-fns'
import Header from '../components/Header'
import Footer from '../components/Footer'

const pageVariants = {
  initial: { opacity: 0, x: -50 },
  animate: { opacity: 1, x: 0 },
  exit: { opacity: 0, x: 50 }
}

export default function Download() {
  const { t } = useTranslation()
  const [releases, setReleases] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetch('https://api.github.com/repos/moonlightOS-Meow/s3rlinux/releases')
      .then(res => res.json())
      .then(data => {
        setReleases(data.filter(r => !r.draft && !r.prerelease).slice(0, 5))
        setLoading(false)
      })
      .catch(() => setLoading(false))
  }, [])

  return (
    <motion.div 
      className="page"
      variants={pageVariants}
      initial="initial"
      animate="animate"
      exit="exit"
    >
      <Header />

      <section className="hero" style={{ minHeight: '60vh' }}>
        <motion.div className="hero-content" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
          <h1 className="hero-title">
            <span className="title-main">{t('download.title')}</span>
          </h1>
        </motion.div>
      </section>

      <section className="section">
        <div className="container">
          <div className="download-cards">
            <motion.div 
              className="download-card"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
            >
              <div className="version">{t('download.stable')}</div>
              <h3>S3RLINUX {t('download.v')}</h3>
              <p className="info">{t('download.arch')} • pearOS Era</p>
              <a href="https://github.com/moonlightOS-Meow/s3rlinux/releases" className="btn btn-primary">
                {t('hero.download')} <span className="size">{t('download.size')}</span>
              </a>
            </motion.div>

            <motion.div 
              className="download-card beta"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              <div className="version">{t('download.beta')}</div>
              <h3>{t('download.nightly')}</h3>
              <p className="info">{t('download.latest')} • {t('download.maybreak')}</p>
              <a href="https://github.com/moonlightOS-Meow/s3rlinux/releases" className="btn btn-secondary">
                {t('download.nightly')} <span className="size">{t('download.sizeN')}</span>
              </a>
            </motion.div>
          </div>

          {/* RELEASES FROM API */}
          {loading ? (
            <p style={{ textAlign: 'center', color: 'var(--text-dim)' }}>Loading...</p>
          ) : releases.length > 0 && (
            <>
              <h2 style={{ marginTop: '60px' }}><span className="accent">//</span> RECENT RELEASES</h2>
              <div className="features">
                {releases.map((r, i) => (
                  <motion.div 
                    key={r.id} 
                    className="feature"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.1 }}
                  >
                    <span className="feature-num">v{r.tag_name.replace('v', '')}</span>
                    <div style={{ flex: 1 }}>
                      <h3>{r.name}</h3>
                      <p>{r.body?.substring(0, 100) || 'No description'}...</p>
                      <small style={{ color: 'var(--text-dim)' }}>
                        {formatDistanceToNow(new Date(r.published_at), { addSuffix: true })}
                      </small>
                    </div>
                    <a href={r.html_url} className="btn btn-secondary" style={{ padding: '8px 16px', fontSize: '0.75rem' }}>
                      VIEW
                    </a>
                  </motion.div>
                ))}
              </div>
            </>
          )}
        </div>
      </section>

      <Footer />
    </motion.div>
  )
}