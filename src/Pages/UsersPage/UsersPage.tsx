import React from 'react'
import styles from './UsersPage.module.scss'
import SearchComp from '../../components/SearchComp/SearchComp'
import TableComp from '../../components/TableComp/TableComp'

const UsersPage = () => {

  return (
    <div className={styles.userPage}>
      <h2 className={styles.title}>Общая база сотрудников</h2>
      <SearchComp />
      <TableComp />
    </div>
  )
}

export default UsersPage