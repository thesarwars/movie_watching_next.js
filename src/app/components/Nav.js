import styles from '@/app/styles/navbar.module.css'
import Link from 'next/link'

export const Nav = () => {
  return (
    <div>
        <div className={styles.nav_display}>
            <ul className={styles.navbarList}>
                <li className={styles.navbarItem}><Link href='/'className={styles.navbarLink}>Home</Link></li>
            </ul>
            <ul className={styles.navbarList}>
                <li className={styles.navbarItem}><Link href='/about'>About</Link></li>
            </ul>
            <ul className={styles.navbarList}>
                <li className={styles.navbarItem}><Link href='/movie'>Movie</Link></li>
            </ul>
            <ul className={styles.navbarList}>
                <li className={styles.navbarItem}><Link href='/contact'>Contact</Link></li>
            </ul>
        </div>
    </div>
  )
}
