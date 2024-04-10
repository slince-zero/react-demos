import { useState } from 'react'
import styles from  './styles.module.css'

function LightDarkMode() {

    return (
        <div className={styles.container}>
            <p>Hello World!</p>
            <button>切换主题</button>
        </div>
    )
}

export default LightDarkMode
