import Link from "next/link"

import logoImg from '@/assets/logo.png'
import styles from './main-header.module.css'
import Image from "next/image"

export default function MainHeader() {
    return <header className={styles.header}>
        <Link href="/" className={styles.logo}>
            <Image src={logoImg} alt="A plate with food on it" priority/>
            NextLevel food
        </Link>
        <nav className={styles.nav}>
            <ul>
                <li>
                    <Link href="/meals" >Browse Meals</Link>
                </li>
                <li>
                    <Link href="/community" >Foodies Community</Link>
                </li>
            </ul>
        </nav>
    </header>
}