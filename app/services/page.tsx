import Styles from "../contact/contact.module.css";
import React from 'react'
import Link from 'next/link'

const servicespage = () => {
    return (
      <div className={Styles.mainContainer}>
          <ul className={Styles.linkText}>
            <li><Link href = "/">Home</Link></li>
            <li><Link href = "/about">About</Link></li>
            <li><Link href = "/contact">Contact</Link></li>
            <li><Link href = "/services/web-design">Web Design</Link></li>
          </ul>
          <h1 className={Styles.heading}>Welcome To Our Services Page!</h1>
      </div>
      )
  }
  
  export default servicespage