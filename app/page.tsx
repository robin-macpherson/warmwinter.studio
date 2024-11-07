import styles from './page.module.css'
import Footer from './components/Footer'
import Link from 'next/link'
import TextureBubble from './components/TextureBubble'

export default function Home() {
  return (
    <div className={styles.page}>
      <TextureBubble />
      <header className={styles.header}>
        <nav className={styles.navigation}>
          <Link href="/">home</Link>
          <span>•</span>
          <Link href="/animation">animation</Link>
          <span>•</span>
          <Link href="/youtube">youtube</Link>
          <span>•</span>
          <Link href="/shop">shop</Link>
          <span>•</span>
          <Link href="/about">about</Link>
        </nav>
      </header>
      <main className={styles.main}>
        <div className={styles.welcome}>
          <h3 className={styles.header}>Welcome to</h3>
          <h1 className={styles.header}>
            <span className={styles.warm}>Warm</span>{' '}
            <span className={styles.winter}>Winter</span>{' '}
            <span className={styles.studio}>Studio</span>
          </h1>
        </div>
        <div className={styles.description}>
          <p>A cozy, one-man visual storytelling studio by Robin MacPherson.</p>
          <p>
            I create wholesome films on YouTube and do freelance animation work.
          </p>
        </div>
        <video className={styles.video} controls>
          <source src="/media/sunny-mountain-train-journey.mp4" />
        </video>
      </main>
      <Footer />
    </div>
  )
}
