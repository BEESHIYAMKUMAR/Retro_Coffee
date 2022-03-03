import React from 'react'
import styles from '../styles/Product.module.css'
import {ShoppingCartOutlined,SearchOutlined,FavoriteBorderOutlined} from '@material-ui/icons';



const Product = ({item}) => {
  return (
    <div className={styles.Container}>
        
      <div className={styles.Circle}/>
      <img className={styles.Image} src={item.img}></img>
      <h5 className={styles.Title}>{item.title}</h5>
      <div className={styles.Info}>
          
          <div className={styles.Icon}>
              <ShoppingCartOutlined/>
          </div>
          <div className={styles.Icon}>
              <SearchOutlined/>
          </div>
          <div className={styles.Icon}>
              <FavoriteBorderOutlined/>
          </div>
          
          
      </div>
      
    </div>
  )
}

export default Product
