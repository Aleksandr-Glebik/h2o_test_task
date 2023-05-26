import React from 'react'
import styles from './Header.module.scss'
import BtnUserPageNav from '../BtnUserPageNav/BtnUserPageNav'
import HeaderNav from './HeaderNav/HeaderNav'
import HeaderInfo from './HeaderInfo/HeaderInfo'

const Header: React.FC = () => {
  return (
    <header className={styles.header}>
        <div className={styles.btnContainer}>
            <BtnUserPageNav direction={'right'} />
            <BtnUserPageNav direction={'left'}/>
        </div>
        <HeaderNav />
        <HeaderInfo />
    </header>
  )
}

export default Header