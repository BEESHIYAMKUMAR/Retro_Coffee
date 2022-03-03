import { Badge } from '@material-ui/core'
import { LocalCafe, Search } from '@material-ui/icons'
import React from 'react'
import styles from '../styles/Navbar.module.css'


const Navbar = () => {
  return (
    <div className={styles.Container}>
      <div className={styles.Wrapper}>
        <div className={styles.Left}>
          <span className={styles.Language}>
            EN
          </span>
          <div className={styles.SearchContainer}>
            <Search>
            <div className={styles.Input}>
            </div>
            </Search>
          </div>
        </div>
        <div className={styles.Center}>
          <h1 className={styles.Logo}>
            Retro Coffee
          </h1>
        </div>
        <div className={styles.Right}>
         <div className={styles.Menu}>
           Register
         </div>
         <div className={styles.Menu}>
           SignIn
         </div>
         <div className={styles.Menu}>
           <Badge badgeContent={4} color="primar">
             <LocalCafe/>
           </Badge>
         </div>
         
        </div>
      </div>
    </div>
  )
}

export default Navbar
