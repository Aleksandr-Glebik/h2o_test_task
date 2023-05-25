import React from 'react'
import styles from './BtnUserPageNav.module.scss'
import srcIcon from '../../assets/img/btnUserPageNav.svg'
import clsx from 'clsx'

interface BtnUserPageNavType {
    direction: string
}

const BtnUserPageNav: React.FC<BtnUserPageNavType> = ({ direction }) => {
  return (
    <button className={styles.btn}>
        <img
          alt='btn-icon'
          src={srcIcon}
          className={clsx(
            direction === 'right'
              ? styles.imgRight
              : styles.imgLeft
          )}
        />
    </button>
  )
}

export default BtnUserPageNav