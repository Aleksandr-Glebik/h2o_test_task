import React from 'react'
import clsx from 'clsx'
import styles from './SearchComp.module.scss'
import SearchInput from './SearchInput/SearchInput'
import { dataUser } from '../../data/dataUsers'

interface SearchCompType {
  setSearchValue: (str: string) => void
}

const SearchComp: React.FC<SearchCompType> = ( {setSearchValue} ) => {
  return (
    <div className={styles.wrapper}>
        <div className={styles.container}>
            <p className={styles.count}>
              {dataUser.length}
            </p>
            <p className={styles.text}>
              Контактов
            </p>
            <SearchInput setSearchValue={setSearchValue} />
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