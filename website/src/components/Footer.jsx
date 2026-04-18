import { useTranslation } from 'react-i18next'
import { motion } from 'framer-motion'

export default function Footer() {
  const { t } = useTranslation()

  return (
    <motion.footer 
      className="footer"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >
      <div className="footer-logo">
        <span>S3RL</span><span>LINUX</span>
      </div>
      <p className="tagline">{t('footer.tagline')}</p>
      <div className="footer-links">
        <a href="https://github.com/moonlightOS-Meow/s3rlinux" target="_blank">{t('footer.github')}</a>
        <a href="https://github.com/moonlightOS-Meow/s3rlinux/wiki" target="_blank">{t('footer.wiki')}</a>
        <a href="#">{t('footer.discord')}</a>
      </div>
      <p className="copy">{t('footer.copy')}</p>
    </motion.footer>
  )
}