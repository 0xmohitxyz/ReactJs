import React from 'react'
import styles from './Header.module.css'
const Header = () => {
  return (
    <div className={styles.navbar}>
        <div className={styles.flex}><button>Home</button></div>
        <div className={styles.flex}><button>App</button></div>
        <div className={styles.flex}><button>Site</button></div>
        <div className={styles.flex}><button>Contact</button></div>
        <div className={styles.flex}><button>About</button></div>
    </div>
  )
}

export default Header