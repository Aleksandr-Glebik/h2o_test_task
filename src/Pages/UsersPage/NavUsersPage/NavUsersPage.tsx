import React from 'react'
import styles from './NavUsersPage.module.scss'

const NavUsersPage: React.FC = () => {
  return (
    <ul className={styles.list}>
      <li className={styles.item}>База анкет сотрудников</li>
      <li className={styles.item}>Общая база сотрудников</li>
      <li className={styles.item}>База сотрудников</li>
      <li className={styles.item}>Календарь сотрудников</li>
    </ul>
  )
}

export default NavUsersPage