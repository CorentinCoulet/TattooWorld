import { Pool } from 'pg';

const pool = new Pool({
  user: 'votre_utilisateur',
  host: 'localhost',
  database: 'votre_base_de_données',
  password: 'votre_mot_de_passe',
  port: 5432,
});

export interface User {
  id: number;
  name : string;
  surname : string;
  email: string;
  password: string;
}

export async function createUser(name: string, surname: string, email: string, password: string): Promise<User> {
  const client = await pool.connect();
  try {
    const query = 'INSERT INTO users (username, email, password) VALUES ($1, $2, $3) RETURNING *';
    const values = [name, surname, email, password];
    const result = await client.query(query, values);
    return result.rows[0];
  } finally {
    client.release();
  }
}

export async function findUser(query: { firstName?: string; lastName?: string; email?: string }): Promise<User | undefined> {
  const client = await pool.connect();
  try {
    let queryParams = [];
    let queryString = 'SELECT * FROM users WHERE';
    const conditions = [];

    if (query.firstName) {
      conditions.push(`LOWER(first_name) = LOWER($${queryParams.length + 1})`);
      queryParams.push(query.firstName);
    }

    if (query.lastName) {
      conditions.push(`LOWER(last_name) = LOWER($${queryParams.length + 1})`);
      queryParams.push(query.lastName);
    }

    if (query.email) {
      conditions.push(`LOWER(email) = LOWER($${queryParams.length + 1})`);
      queryParams.push(query.email);
    }

    queryString += ' ' + conditions.join(' AND ');
    const result = await client.query(queryString, queryParams);
    return result.rows[0];
  } finally {
    client.release();
  }
}

