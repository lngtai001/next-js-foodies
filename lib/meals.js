import sql from 'better-sqlite3'

const db = sql('meals.db')

export function getMeals() {
    // retrieve all rows
    return db.prepare('SELECT * FROM MEALS').all()
}

export function getMeal(slug) {
    // use dynamic values '?' to avoid sql injection
    return db.prepare('SELECT * FROM meals WHERE slug = ?').get(slug)
}