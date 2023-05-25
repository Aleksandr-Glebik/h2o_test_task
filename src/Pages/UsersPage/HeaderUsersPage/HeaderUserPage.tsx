import React from 'react'
import styles from './HeaderUserPage.module.scss'
import BtnUserPageNav from '../../../components/BtnUserPageNav/BtnUserPageNav'
import NavUsersPage from '../NavUsersPage/NavUsersPage'

const HeaderUserPage: React.FC = () => {
  return (
    <header className={styles.header}>
        <div className={styles.btnContainer}>
            <BtnUserPageNav direction={'right'} />
            <BtnUserPageNav direction={'left'}/>
        </div>
        <NavUsersPage />
    </header>
  )
}

export default HeaderUserPage