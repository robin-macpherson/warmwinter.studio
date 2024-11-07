import styles from './page.module.css'

export default function YouTube() {
  return (
    <div className={styles.page}>
      <header className={styles.header}>
        <nav className={styles.navigation}>
          <a href="">animation</a>
          <span>•</span>
          <a href="">youtube</a>
          <span>•</span>
          <a href="">shop</a>
          <span>•</span>
          <a href="">about</a>
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
      </main>
    </div>
  )
}
