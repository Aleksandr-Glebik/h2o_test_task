import React from 'react'
import styles from './HeaderNav.module.scss'
import logoSrc from '../../assets/img/logo.svg'
import { dataNavLink } from '../../data/dataNavLink'
import HeaderNavLink from './HeaderNavLink/HeaderNavLink'

const HeaderNav: React.FC = () => {
  return (
    <nav className={styles.nav}>
        <img src={logoSrc} alt="logo" className={styles.logo} />
        <ul className={styles.list}>
            {
                dataNavLink.map( link => (
                  <HeaderNavLink
                    key={link.id}
                    {...link}
                  />
                ))
            }
        </ul>
    </nav>
  )
}

export default HeaderNav