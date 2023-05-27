import React from 'react'
import HeaderNavLink from '../HeaderNavLink/HeaderNavLink'
import styles from './HeaderNav.module.scss'
import { dataNavLink } from '../../../data/dataNavLink'

const HeaderNav: React.FC = () => {
  return (
    <nav className={styles.container}>
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