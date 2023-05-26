import React from 'react'
import styles from './Layout.module.scss'
import AsideNav from '../AsideNav/AsideNav'
import { Outlet } from "react-router-dom"
import Header from '../Header/Header'

const Layout: React.FC = () => {
  return (
    <div className={styles.layout}>
        <aside className={styles.aside}>
          <AsideNav />
        </aside>
        <div className={styles.wrapper}>
          <Header />
          <main className={styles.main}>
            <Outlet />
          </main>
        </div>
    </div>
  )
}

export default Layout