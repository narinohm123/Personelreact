import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Nav from '../component/nav/navbar'

export default function Home() {
  return (
    <div className={styles.container}>
      <Nav/>
      <div>
      </div>
    </div>
  )
}
