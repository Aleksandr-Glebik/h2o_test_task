import React, { useState, useRef, useCallback, useMemo } from 'react'
import styles from './SearchInput.module.scss'
import srcIcon from '../../../assets/img/search.svg'
import debounce from 'lodash.debounce'

interface SearchInputType {
  setSearchValue: (str: string) => void
}

const SearchInput: React.FC<SearchInputType> = ({ setSearchValue }) => {
  const [localValue, setLocalValue] = useState('')
  const inputRef = useRef<HTMLInputElement>(null)

  const debouncedSearch = useMemo(
    () => debounce( (str: string) => {
      setSearchValue(str)
    }, 750),
    []
  )

  const onChangeInput = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      setLocalValue(e.target.value)
      debouncedSearch(e.target.value)
    },
    [debouncedSearch]
  )

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
          ref={inputRef}
          value={localValue}
          onChange={onChangeInput}
        />
    </div>
  )
}

export default SearchInput