import React from 'react'
import styles from './redirection.module.css'
import Link from 'next/link'

const redirection = () => {
  return (
    <div className={styles.screen}>
        Your login password and Id has been sent to your Email, please check and <Link href='/' className={styles.redirect}> Login </Link>
    
    </div>
  )
}

export default redirection