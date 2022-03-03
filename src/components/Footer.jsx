import { Facebook, Instagram, MailOutline, Phone, Room, Twitter, WhatsApp } from '@material-ui/icons'
import React from 'react'
import styles from '../styles/Footer.module.css'

const Footer = () => {
  return (
    <div className={styles.Container}>
        <div className={styles.Left}>
            <h1 className={styles.Logo}>Retro Coffee</h1>
            <p className={styles.Desc}>Wake up your taste buds.</p>
            <div className={styles.SocialContainer}>
                    <div className={styles.SocialIcon}>
                        <Facebook/>
                    </div>
                    <div className={styles.SocialIcon}>
                        <Instagram/>
                    </div>
                    <div className={styles.SocialIcon}>
                        <Twitter/>
                    </div>
                    <div className={styles.SocialIcon}>
                        <WhatsApp/>
                    </div>
            </div>
        </div>
        <div className={styles.Center}>
            <h3 className={styles.Title}>Useful Links.</h3>
            <ul className={styles.List}>
                <li className={styles.ListItem}>SignIn</li>
                <li className={styles.ListItem}>Home</li>
                <li className={styles.ListItem}>Cart</li>
                <li className={styles.ListItem}>Coffee</li>
                <li className={styles.ListItem}>Snacks</li>
                <li className={styles.ListItem}>Beverages</li>
                <li className={styles.ListItem}>Orders</li>
                <li className={styles.ListItem}>WishList</li>
                
            </ul>
        </div>
        <div className={styles.Right}>
            <h3 className={styles.Title}>Contact</h3>
            <div className={styles.ContactItem}><Room style={{marginRight:"10px"}}/>No.15, West Main Road, Vadapalani, chennai-600026</div>
            <div className={styles.ContactItem}><Phone style={{marginRight:"10px"}}/>+91 9789633701</div>
            <div className={styles.ContactItem}><MailOutline style={{marginRight:"10px"}}/>contact@retrocoffee.in</div>
            <img className={styles.Payment}src="https://i.ibb.co/Qfvn4z6/payment.png"/>
        </div>
    </div>
  )
}

export default Footer
