import React from 'react'
import styles from './Layout.module.scss'
import HeaderNav from '../HeaderNav/HeaderNav'

const Layout: React.FC = () => {
  return (
    <div className={styles.layout}>
        <header className={styles.header}>
          <HeaderNav />
        </header>
        <main className={styles.main}>b</main>
    </div>
  )
}

export default Layout