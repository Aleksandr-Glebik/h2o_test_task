import React from 'react'
import clsx from 'clsx'
import styles from './SearchComp.module.scss'
import SearchInput from './SearchInput/SearchInput'

const SearchComp: React.FC = () => {
  return (
    <div className={styles.wrapper}>
        <div className={styles.container}>
            <p className={styles.count}>
              2345
            </p>
            <p className={styles.text}>
              Контактов
            </p>
            <SearchInput />
            <button
              className={clsx(styles.btn, styles.searchBtn)}
            >
              Режим редактирования
            </button>
        </div>
    </div>
  )
}

export default SearchComp