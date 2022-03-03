import React from 'react'
import styles from '../styles/CategoriesItem.module.css'
import {categories} from '../data'

const CategoriesItem = ({item}) => {

  console.log(categories)
  return (
    <div className={styles.Container}>
        {/* {categories.map(item=>{ */}
            <div>
                <img className={styles.Image} src={item.img}/>
                <div className={styles.Info}>
                <h1 className={styles.Title}>{item.title}</h1>
                <button className={styles.Button}>SHOP NOW</button>
                </div>
                </div>
            
        {/* })} */}
        {/* Hello */}
    </div>
  )
}

export default CategoriesItem
