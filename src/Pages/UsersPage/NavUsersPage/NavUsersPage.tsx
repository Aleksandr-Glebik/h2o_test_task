import React from 'react'
import styles from './NavUsersPage.module.scss'

const NavUsersPage: React.FC = () => {
  return (
    <nav className={styles.container}>
      <ul className={styles.list}>
        <li className={styles.item}>База анкет сотрудников</li>
        <li className={styles.item}>Общая база сотрудников</li>
        <li className={styles.item}>База сотрудников</li>
        <li className={styles.item}>Календарь сотрудников</li>
      </ul>
    </nav>
  )
}

export default NavUsersPage