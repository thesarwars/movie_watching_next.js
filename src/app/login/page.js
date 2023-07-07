import Link from 'next/link';
import styles from '@/app/page.module.css'

const Login=()=>{
    return(
        <div className={styles.main}>
        <h2>Login</h2>
        <button><Link href="/">Home</Link></button>
        </div>
        
    )
}

export default Login;