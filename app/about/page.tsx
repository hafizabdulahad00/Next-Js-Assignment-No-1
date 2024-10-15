import Styles from "../about/about.module.css";
import React from 'react'
import Link from 'next/link'

const aboutpage = () => {
    return (
      <div className={Styles.mainContainer}>
          <ul className={Styles.linkText}>
            <li><Link href = "/">Home</Link></li>
            <li><Link href = "/contact">Contact</Link></li>
            <li><Link href = "/services">Services</Link></li>
          </ul>
          <h1 className={Styles.heading}>Welcome To About Page!</h1>
      </div>
      )
  }
  
  export default aboutpage
  