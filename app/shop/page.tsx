import styles from './page.module.css'

export default function Shop() {
  return (
    <div className={styles.page}>
      <div className={styles.welcome}>
        <h3 className={styles.header}>Welcome to</h3>
        <h1 className={styles.header}>
          <span className={styles.warm}>Warm</span>{' '}
          <span className={styles.winter}>Winter</span>{' '}
          <span className={styles.studio}>Studio</span>
        </h1>
      </div>
      <div className={styles.description}>
        <p>Welcome to my little web shop!</p>
        <p>Here you can find my digital and physical products</p>
      </div>
    </div>
  )
}
