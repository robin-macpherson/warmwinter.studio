import Link from 'next/link'
// import styles from './page.module.css'

const Header = () => {
  return (
    <>
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
    </>
  )
}

export default Header
