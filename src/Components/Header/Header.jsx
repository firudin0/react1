import React from 'react'
import styles from "./header.module.css"

const Header = () => {
  return (
    <div className={styles.container}>
        <nav>
            <h1>PATERNA</h1>
        
                <ul>
                    <li><a href="">HOME</a></li>
                    <li><a href="">SERVICES</a></li>
                    <li><a href="">PRICING</a></li>
                    <li><a href="">CONTACT</a></li>
                </ul>
        

        </nav>
 
    </div>
  )
}

export default Header