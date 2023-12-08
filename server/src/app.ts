import express, { Express } from 'express';
import dotenv from 'dotenv';
import helmet from 'helmet';
import cors from 'cors';
import { json } from 'body-parser';
import { Pool } from 'pg';
import fs from 'fs';
import path from 'path';

import api from '@/router/api';

dotenv.config();

const app: Express = express();

app.use(json());
app.use(helmet());
app.use(cors());
app.use('/api', api);

// Create a new pool of connections
const pool = new Pool({
  user: process.env.DB_USER,
  host: process.env.DB_HOST,
  database: process.env.DB_NAME,
  password: process.env.DB_PASSWORD,
  port: process.env.DB_PORT,
});

async function loadSqlScripts() {
  try {
    const client = await pool.connect();

    // Read SQL scripts from a directory
    const sqlDirectory = path.join(__dirname, '../src/sql');
    const files = fs.readdirSync(sqlDirectory);

    for (const file of files) {
      const sql = fs.readFileSync(path.join(sqlDirectory, file), 'utf-8');
      console.log(`Running SQL script ${file}...`);
      await client.query(sql);
      console.log(`Finished running SQL script ${file}.`);
    }

    client.release();
  } catch (err) {
    console.error(err);
  }
}

// Call the function to load SQL scripts
loadSqlScripts();
const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
