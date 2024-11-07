'use client'

import { useState, useEffect } from 'react'
import styles from './footer.module.css'

const Footer = () => {
  const [currentYear, setCurrentYear] = useState(new Date().getFullYear())

  useEffect(() => {
    setCurrentYear(new Date().getFullYear())
  }, [])

  return (
    <footer className={styles.footer}>
      <p>{`© ${currentYear}. All Rights Reserved.`}</p>
    </footer>
  )
}

export default Footer
