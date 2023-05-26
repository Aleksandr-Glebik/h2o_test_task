import React from 'react'
import styles from './AsideNav.module.scss'
import logoSrc from '../../assets/img/logo.svg'
import { dataNavLink } from '../../data/dataNavLink'
import AsideNavLink from './AsideNavLink/AsideNavLink'

const AsideNav: React.FC = () => {
  return (
    <nav className={styles.nav}>
        <img src={logoSrc} alt="logo" className={styles.logo} />
        <ul className={styles.list}>
            {
                dataNavLink.map( link => (
                  <AsideNavLink
                    key={link.id}
                    {...link}
                  />
                ))
            }
        </ul>
    </nav>
  )
}

export default AsideNav