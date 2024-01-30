import { Button } from 'bootstrap'
import React from 'react'
import { Header } from '../../Components/Header'
import { Main } from '../../Components/Main'
import styles from "./home.module.css"

const Home = () => {
  return (
  <div className={styles.container}>
    <Header/>
    <Main/>
  </div>
  )
}

export default Home