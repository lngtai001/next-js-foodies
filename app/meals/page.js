import Link from "next/link"

export default function MealsPage() {
return <main>
    <h1>Meals</h1>
    <p><Link href="/meals/burger" >Burger</Link></p>
    <p><Link href="/meals/salad" >Salad</Link></p>
    </main>
}