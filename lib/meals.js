import sql from 'better-sqlite3'
import slugify from 'slugify'
import xss from 'xss'

const db = sql('meals.db')

export function getMeals() {
    // retrieve all rows
    return db.prepare('SELECT * FROM MEALS').all()
}

export function getMeal(slug) {
    // use dynamic values '?' to avoid sql injection
    return db.prepare('SELECT * FROM meals WHERE slug = ?').get(slug)
}

export function saveMeal(meal) {
    meal.slug = slugify(meal.title, {lower: true})
    meal.instructions = xss(meal.instructions)

    const extension = meal.image.split('.').pop()
    const filename = `${meal.slug}.${extension}`
}