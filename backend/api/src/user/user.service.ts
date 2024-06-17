import pgClient from './../db/pg'

const users = async () => {
  const query = 'SELECT id, name FROM users;';
  return pgClient.query(query);
}

export default {
  users
}
