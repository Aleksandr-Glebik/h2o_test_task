import React from 'react'
import styles from './HeaderInfo.module.scss'
import srcUserPhoto from '../../../assets/img/userPhoto.png'
import srcIcon from '../../../assets/img/btnUserPageNav.svg'

const HeaderInfo: React.FC = () => {
  return (
    <div className={styles.container}>
      <img
        src={srcUserPhoto}
        alt='user'
        className={styles.img}
      />
      <div className={styles.textContent}>
        <h3 className={styles.title}>Kristina</h3>
        <p className={styles.text}>менеджер продаж</p>
      </div>
      <img
        src={srcIcon}
        alt='triangle'
        className={styles.icon}
      />
    </div>
  )
}

export default HeaderInfo