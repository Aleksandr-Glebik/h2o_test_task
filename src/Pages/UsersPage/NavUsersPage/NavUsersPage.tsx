import React from 'react'
import styles from './NavUsersPage.module.scss'

const NavUsersPage: React.FC = () => {
  return (
    <div className={styles.container}>
      <ul className={styles.list}>
        <li className={styles.item}>База анкет сотрудников</li>
        <li className={styles.item}>Общая база сотрудников</li>
        <li className={styles.item}>База сотрудников</li>
        <li className={styles.item}>Календарь сотрудников</li>
      </ul>
    </div>
  )
}

export default NavUsersPage