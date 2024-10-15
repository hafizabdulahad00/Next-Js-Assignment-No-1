import React from 'react'
import Link from 'next/link'
import Styles from '../services.module.css'

const webDesign = () => {
    return (
      <div>
        <div className={Styles.mainContainer}>
          <ul  className={Styles.linkText}>
            <li><Link href = "/">Home</Link></li>
            <li><Link href = "/about">About</Link></li>
            <li><Link href = "/contact">Contact</Link></li>
            <li><Link href = "/services">Services</Link></li>
          </ul>
          <h1 className={Styles.heading}>Explore Our Web Design Services!</h1>
        </div>
      </div>
    )
  }
  
  export default webDesign
  