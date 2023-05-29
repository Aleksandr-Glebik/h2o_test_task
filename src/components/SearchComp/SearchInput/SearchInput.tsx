import React from 'react'
import styles from './SearchInput.module.scss'
import srcIcon from '../../../assets/img/search.svg'

const SearchInput: React.FC = () => {
  return (
    <div className={styles.container}>
        <img
          src={srcIcon}
          alt='search-icon'
          className={styles.img}
        />
        <input
          className={styles.input}
          placeholder='Поиск'
        />
    </div>
  )
}

export default SearchInput