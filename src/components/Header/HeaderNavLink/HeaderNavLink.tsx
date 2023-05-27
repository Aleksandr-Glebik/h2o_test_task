import React from 'react'
import clsx from 'clsx'
import { useLocation, NavLink } from 'react-router-dom'
import styles from './HeaderNavLink.module.scss'
import { navLinkType } from '../../../data/dataNavLink'

const HeaderNavLink: React.FC<navLinkType> = ({
  title,
  href
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
            {title}
        </NavLink>
    </li>
  )
}

export default HeaderNavLink