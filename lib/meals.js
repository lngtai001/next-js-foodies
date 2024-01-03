import sql from 'better-sqlite3'

const db = sql('meals.db')

export function getMeals() {
    // retrieve all rows
    return db.prepare('SELECT * FROM MEALS').all()
}