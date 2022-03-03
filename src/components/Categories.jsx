import React from 'react'
import styles from '../styles/Categories.module.css'
import CategoriesItem from './CategoriesItem'
import { categories } from '../data'

const Categories = () => {
  return (
    <div className={styles.Container}>
      {categories.map(item=>(
          <CategoriesItem item={item} key={item.id}/>
       ))} 
      
    </div>
  );
};

export default Categories
