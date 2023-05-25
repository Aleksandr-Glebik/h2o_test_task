import React from 'react'
import styles from './Layout.module.scss'
import HeaderNav from '../HeaderNav/HeaderNav'
import { Outlet } from "react-router-dom"

const Layout: React.FC = () => {
  return (
    <div className={styles.layout}>
        <header className={styles.header}>
          <HeaderNav />
        </header>
        <main className={styles.main}>
          <Outlet />
        </main>
    </div>
  )
}

export default Layout