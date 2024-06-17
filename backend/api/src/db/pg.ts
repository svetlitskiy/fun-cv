const pgp = require('pg-promise')(/* options */)
const db = pgp(`postgres://${process.env.DB_USERNAME}:${process.env.DB_PASSWORD}@${process.env.DB_HOST}:${process.env.DB_PORT}/${process.env.DB_DATABASE}`)

const query = (query: string) => {
  return db.many(query);
}

export default {
  query
}
