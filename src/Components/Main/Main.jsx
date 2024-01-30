import React from 'react'
import { ReadMoreBtn } from '../Buttons/ReadMoreBtn'
import styles from "./main.module.css"

const Main = () => {
  return (
    <div className={styles.container}>
        <h1>GET PAGE DONE</h1>
        <h4>It take efforts</h4>
        <p>Lorem ipsum dolor sit ametLorem ipsum dolor sit amet</p>
        <ReadMoreBtn text={"DOWNLOAD THIS THEME NOW !"} bgcolor={"brown"}/>
    </div>
  )
}

export default Main