import React, { useEffect, useState } from 'react'
import styles from './Header.module.scss'
import BtnChangePathNav from '../BtnChangePathNav/BtnChangePathNav'
import HeaderNav from './HeaderNav/HeaderNav'
import HeaderInfo from './HeaderInfo/HeaderInfo'
import { dataNavLink } from '../../data/dataNavLink'
import { useNavigate } from 'react-router-dom'

const Header: React.FC = () => {
  const navigate = useNavigate()
  const linkArr = dataNavLink.map(item => item.href)
  const [indexLink, setIndexLink] = useState(3)

  useEffect( () => {
    Array.isArray(linkArr) && navigate(linkArr[indexLink])
  }, [indexLink])

  const increment = () => {
    if (indexLink === linkArr.length - 1) {
      setIndexLink(0)
    } else if (indexLink < linkArr.length - 1) {
      setIndexLink(prev => prev + 1)
    }
  }

  const decrement = () => {
    if (indexLink === 0) {
      setIndexLink(linkArr.length - 1)
    } else if (indexLink > 0 ) {
      setIndexLink(prev => prev - 1)
    }
  }

  return (
    <header className={styles.header}>
        <div className={styles.btnContainer}>
          <BtnChangePathNav
            direction={'left'}
            onClickHandler={decrement}
          />
          <BtnChangePathNav
            direction={'right'}
            onClickHandler={increment}
          />
        </div>
        <HeaderNav />
        <HeaderInfo />
    </header>
  )
}

export default Header