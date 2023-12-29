import Link from "next/link"

import styles from './page.module.css'

export default function Home() {
  return (<>
    <header className={styles.header}>
      <div className={styles.slideshow}></div>
      <div>
        <div className={styles.hero}>
          <h1>NextLevel food for NextLevel foodies</h1>
          <p>Taste & share food from all over the world</p>
        </div>
        <div className={styles.cta}>
          <Link href="/community">Join the Community</Link>
          <Link href="/meals">Explore Meals</Link>
        </div>
      </div>
    </header>
    <main>
      
    </main>
    </>
  );
}
