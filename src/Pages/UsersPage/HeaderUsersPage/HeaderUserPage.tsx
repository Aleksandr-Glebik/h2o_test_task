import React from 'react'
import styles from './HeaderUserPage.module.scss'
import BtnUserPageNav from '../../../components/BtnUserPageNav/BtnUserPageNav'
import NavUsersPage from '../NavUsersPage/NavUsersPage'
import UserInfo from '../UserInfo/UserInfo'

const HeaderUserPage: React.FC = () => {
  return (
    <header className={styles.header}>
        <div className={styles.btnContainer}>
            <BtnUserPageNav direction={'right'} />
            <BtnUserPageNav direction={'left'}/>
        </div>
        <NavUsersPage />
        <UserInfo />
    </header>
  )
}

export default HeaderUserPage