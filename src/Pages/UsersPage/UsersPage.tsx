import React from 'react'
import styles from './UsersPage.module.scss'
import HeaderUserPage from './HeaderUsersPage/HeaderUserPage'

const UsersPage = () => {
  return (
    <div className={styles.userPage}>
        <HeaderUserPage />
    </div>
  )
}

export default UsersPage