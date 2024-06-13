'use client'
import React from 'react'
import styles from './dashboard.module.css'
import Image from 'next/image'
import Router, { useRouter } from 'next/navigation'

const dashboard = () => {
  const route = useRouter();
  const logout = () => {route.push('/')};
  return (
    <div className={styles.screen}>
      <section className={styles.menu}>
        <p className={styles.heading}>Cpen<span className={styles.span}>200</span></p>
        <button className={styles.menuBtn}>Dashboard</button>
        <button className={styles.menuBtn}>Assignments </button>
        <button className={styles.menuBtn}>Chat</button>
        <button className={styles.menuBtn}>Resources</button>
      </section>
      <div className={styles.main}>
        <div className={styles.header}>
          <p className={styles.dash}>Dashboard</p>
          <div className={styles.options}>
            <Image src='/searc.png' width={20} height={20} className={styles.searc}/>
            <input type="text" className={styles.mainInput} placeholder='search something' />
          </div>
        </div>
        <div className={styles.body}>
          <div className={styles.information}>
          <div className={styles.infoText}>
            <h2 className={styles.h2}>Hello Juliet</h2>
            <p >You have 3 new assignments from digital system design and calculus 2 and 4 unread messages</p>
          </div>
          {/* <Image src='/person.jpg' height={200} width={300} className={styles.perImg}/> */}
          </div>
          <div className={styles.courses}>
            <div className={styles.courseCardDD}>
              <h2 className={styles.course}>Digital Design</h2>
              <h3 className={styles.subhead}>Chapter 3: Learning to implement queues using stacks</h3>
              <p className={styles.para}>In this chapter you are going to learn how to use stacks, in chapter tw...</p>
              <button className={styles.viewa}>View <Image src='/right.png' width={25} height={30}/></button>
            </div>
            <div className={styles.courseCardDSA}>
              <h2 className={styles.course}>Data Structure and Algorithm</h2>
              <h3 className={styles.subhead}>Chapter 3: Learning to implement queues using stacks</h3>
              <p className={styles.para}>In this chapter you are going to learn how to use stacks, in chapter tw...</p>
              <button className={styles.viewb}>View <Image src='/right.png' width={25} height={30}/></button>
            </div>
            <div className={styles.courseCardSE}>
              <h2 className={styles.course}>Software Eng</h2>
              <h3 className={styles.subhead}>Chapter 3: Learning to implement queues using stacks</h3>
              <p className={styles.para}>In this chapter you are going to learn how to use stacks, in chapter tw...</p>
              <button className={styles.viewc}>View <Image src='/right.png' width={25} height={30}/></button>
            </div>
            <div className={styles.courseCardC}>
              <h2 className={styles.course}>C++ programming</h2>
              <h3 className={styles.subhead}>Chapter 3: Learning to implement queues using stacks</h3>
              <p className={styles.para}>In this chapter you are going to learn how to use stacks, in chapter tw...</p>
              <button className={styles.viewd}>View <Image src='/right.png' width={25} height={30}/></button>
            </div>
           
          </div>
        </div>

      </div>
      
      <div className={styles.side}>
        <button className={styles.logout } onClick={logout}>Log out</button>
        <div className={styles.sideCards}>
          <div className={styles.fees}>
            <Image src='/chart.png' width={50} height={50}/>
            <p>You owe the institutions: $210</p>
            <button className={styles.feebtn} >Deposit <Image src='/right.png' width={20}height={20} /></button>
          </div>
          <div className={styles.progress}>
            <Image src='/graph.png' width={200} height={170} />
            <p className={styles.goals}> you are <span className={styles.span}>30%</span> behind your 2024 goals </p>
            <button className={styles.feebtnx}>Analyse</button>
          </div>
        </div>
      </div>
      
      
      </div>
  )
}

export default dashboard