import React from 'react'
import styles from './Layout.module.scss'

const Layout: React.FC = () => {
  return (
    <div className={styles.layout}>
        <header className={styles.header}>a</header>
        <main className={styles.main}>b</main>
    </div>
  )
}

export default Layout