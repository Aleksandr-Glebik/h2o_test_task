import React from 'react'
import styles from './BtnChangePathNav.module.scss'
import srcIcon from '../../assets/img/btnUserPageNav.svg'
import clsx from 'clsx'

interface BtnUserPageNavType {
    direction: string
    onClickHandler: () => void
}

const BtnChangePathNav: React.FC<BtnUserPageNavType> = ({
  direction,
  onClickHandler
}) => {
  return (
    <button
      className={styles.btn}
      onClick={onClickHandler}
    >
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

export default BtnChangePathNav