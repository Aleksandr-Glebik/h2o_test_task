import React from 'react'
import styles from './HeaderNavLink.module.scss'
import { navLinkType } from '../../../data/dataNavLink'

const HeaderNavLink: React.FC<navLinkType> = ({
  title,
  href,
  srcSvg
}) => {
  return (
    <li className={styles.item}>
        <a
          href={href}
          className={styles.link}
        >
            <img
              src={srcSvg}
              alt={title}
              className={styles.img}
            />
        </a>
    </li>
  )
}

export default HeaderNavLink