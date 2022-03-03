import React from 'react'
import styles from '../styles/Products.module.css'
import { popularProducts } from '../data'
import Product from './Product'

const Products = () => {
  return (
    <div classname={styles.Container}>
      {popularProducts.map((item)=>(
          <Product item={item} key={item.id}/>
      ))}
    </div>
  )
}

export default Products
