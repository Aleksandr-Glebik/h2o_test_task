import React from 'react'
import styles from './HeaderNavLink.module.scss'
import { navLinkType } from '../../../data/dataNavLink'
import { NavLink } from 'react-router-dom'
import clsx from 'clsx'
import { useLocation } from 'react-router-dom'


const HeaderNavLink: React.FC<navLinkType> = ({
  title,
  href,
  srcSvg,
}) => {
  const { pathname } = useLocation()

  return (
    <li className={styles.item}>
        <NavLink
          to={href}
          className={clsx(
            styles.link,
            pathname === href
             ? styles.activeLink
             : ''
          )}
        >
            <img
              src={srcSvg}
              alt={title}
              className={styles.img}
            />
        </NavLink>
    </li>
  )
}

export default HeaderNavLink