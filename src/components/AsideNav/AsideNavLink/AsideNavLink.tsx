import React from 'react'
import clsx from 'clsx'
import { useLocation, NavLink} from 'react-router-dom'
import styles from './AsideNavLink.module.scss'
import { navLinkType } from '../../../data/dataNavLink'


const AsideNavLink: React.FC<navLinkType> = ({
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

export default AsideNavLink