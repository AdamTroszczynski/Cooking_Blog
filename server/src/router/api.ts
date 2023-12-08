import express from 'express';
import { getMessage } from '@/controller/exampleController';
import { Pool } from 'pg';
import dotenv from 'dotenv';

const api = express.Router();
dotenv.config();

const pool = new Pool({
  user: process.env.DB_USER,
  host: process.env.DB_HOST,
  database: process.env.DB_NAME,
  password: process.env.DB_PASSWORD,
  port: process.env.DB_PORT,
});

api.get('/hello', getMessage);

// Return all recipes
api.get('/recipes', async (req, res) => {
  try {
    const client = await pool.connect();
    let query = 'SELECT * FROM recipes';
    const params: any[] = [];

    if (req.query.name) {
      query += ' WHERE name = $1';
      params.push(req.query.name);
    }

    const result = await client.query(query, params);
    res.send(result.rows);
    client.release();
  } catch (err) {
    console.error(err);
    res.send("Error " + err);
  }
});

export default api;
