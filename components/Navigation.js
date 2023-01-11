import Image from 'next/image'
import styles from '../styles/Home.module.css'
import logo from '../styles/Logo.module.css'
import Link from 'next/link'

const Navigation = () => {
    return (
        <nav className={styles.nav}>

        <div className={styles.description}>
          <p>
            Don't sabotage infrastructure,&nbsp;
            <span className={styles.code}>Audit the World.</span>
          </p>
          <Link href={`/`}>
            <Image
              src="/logo.svg"
              alt="hatori's favorite Logo"
              className={logo.applogo}
              width={80}
              height={80}
              priority
            />
          </Link>
        </div>
        
      </nav>
    )
}

export default Navigation