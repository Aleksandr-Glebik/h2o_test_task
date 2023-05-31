import React, { useState } from 'react'
import styles from './UsersPage.module.scss'
import SearchComp from '../../components/SearchComp/SearchComp'
import TableComp from '../../components/TableComp/TableComp'

const UsersPage = () => {
  const [searchValue, setSearchValue] = useState('')

  return (
    <div className={styles.userPage}>
      <h2 className={styles.title}>Общая база сотрудников</h2>
      <SearchComp setSearchValue={setSearchValue} />
      <TableComp searchValue={searchValue} />
    </div>
  )
}

export default UsersPage