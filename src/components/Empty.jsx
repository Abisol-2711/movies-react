import React from 'react'
import styles from "./Empty.module.css";


export function Empty() {
  return (
    <div>
        <p className={styles.empty}>No Results</p>
    </div>
  )
}
