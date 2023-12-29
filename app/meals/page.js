import Link from "next/link"


export default function MealsPage() {
return <main>
    <h1>Meals</h1>
    <Link href="/meals/burger" style={{ color: 'white', textAlign: 'center' }}>Burger</Link>
    <Link href="/meals/salad" style={{ color: 'white', textAlign: 'center' }}>Salad</Link>
    </main>
}