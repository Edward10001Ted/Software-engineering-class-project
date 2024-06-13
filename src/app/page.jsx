'use client'
import React from 'react'
import styles from './page.module.css'
import Image from 'next/image'
import { useRouter } from 'next/navigation'
import Link from 'next/link'
import { useState } from 'react'

const page = () => {

   const router = useRouter();
   const [id,setId] = useState("");
   const [pw,setpw] = useState("");
   const isEmpty = () => {
      if(id===""|| pw===""){
         alert('Please enter your Student ID and password before you login.')
      } else{
         router.push('/dashboard')
      }
}


  return (
    <div className={styles.screen}>
       <div className={styles.container}>
          <div className={styles.codeImg}>
               {/* <Image src='/codeimage.png' className={styles.image} width={500} height={500}></Image> */}
          </div>

          <div className={styles.loginCard}>
            <p className={styles.heading}>Software Eng</p>
            <div className={styles.inputBox}>
               <input 
               type="text" 
               placeholder='Enter your ID' 
               className={styles.input} 
               value={id}
               onChange={(e)=> setId(e.target.value)}/>
               <input
                type="text" 
                placeholder='Enter your password' 
                className={styles.input} 
                value={pw}
                onChange={(e)=> setpw(e.target.value)}/>
            </div>
            <div className={styles.btn}>
               <button className={styles.logbtn} onClick={isEmpty}>LOGIN</button>
               <p className={styles.or}>OR</p>
               <Link href='/register'className={styles.regbtn}>Register</Link>
            </div>
          </div>
       </div>
    </div>
  )
}

export default page