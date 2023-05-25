import React from 'react'
import styles from './HeaderNavLink.module.scss'
import { navLinkType } from '../../../data/dataNavLink'
import { Link } from 'react-router-dom'

const HeaderNavLink: React.FC<navLinkType> = ({
  title,
  href,
  srcSvg
}) => {
  return (
    <li className={styles.item}>
        <Link
          to={href}
          className={styles.link}
        >
            <img
              src={srcSvg}
              alt={title}
              className={styles.img}
            />
        </Link>
    </li>
  )
}

export default HeaderNavLink