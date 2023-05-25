import React from 'react'
import styles from './NotFoundPage.module.scss'

const NotFoundBlock: React.FC = () => {
  return (
    <div className={styles.root}>
        <h1 >
            <span>😕</span>
            <br />
            Ничего не найдено
        </h1>
        <p className={styles.text}>
            Данная страница не найдена
        </p>
    </div>
  )
}

export default NotFoundBlock