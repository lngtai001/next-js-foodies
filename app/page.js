import Link from "next/link"

export default function Home() {
  return (
    <main>
      <h1 style={{ color: 'white', textAlign: 'center' }}>
        Time to get started!
      </h1>
      <p>
        <Link href="/meals" style={{ color: 'white', textAlign: 'center' }}>Meals</Link>
        <Link href="/meals/share" style={{ color: 'white', textAlign: 'center' }} >Share</Link>
        <Link href="/community" style={{ color: 'white', textAlign: 'center' }} >Community</Link>
        </p>
    </main>
  );
}
