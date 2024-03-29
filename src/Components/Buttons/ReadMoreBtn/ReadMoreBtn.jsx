import React from 'react'
import styles from "./readMoreBtn.module.css"

const ReadMoreBtn = ({text, bgcolor, color, onclick}) => {
  return (
<button className={styles.container} style={{backgroundColor: bgcolor, color:color}}>
{text}
</button>
  )
}

export default ReadMoreBtn