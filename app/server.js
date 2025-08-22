const express = require('express');
const { Pool } = require('pg');

const app = express();
const port = 3000;

// PostgreSQL config
const pool = new Pool({
  user: process.env.POSTGRES_USER,
  host: 'db',
  database: process.env.POSTGRES_DB,
  password: process.env.POSTGRES_PASSWORD,
  port: 5432,
});

// Simple API endpoint
app.get('/', async (req, res) => {
  try {
    const result = await pool.query('SELECT NOW()');
    res.send(`Hello from Node.js! DB time: ${result.rows[0].now}`);
  } catch (err) {
    res.status(500).send('Database error: ' + err);
  }
});

app.listen(port, () => {
  console.log(`App running on port ${port}`);
});

