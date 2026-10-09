const express = require('express');
const { Pool } = require('pg');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

// PostgreSQL
const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
  ssl: process.env.DATABASE_URL ? { rejectUnauthorized: false } : false,
});

app.use(express.json({ limit: '10mb' }));
app.use(express.static(path.join(__dirname)));

// Init table
async function initDB() {
  try {
    await pool.query(`
      CREATE TABLE IF NOT EXISTS app_data (
        key TEXT PRIMARY KEY,
        value TEXT,
        updated_at TIMESTAMPTZ DEFAULT NOW()
      )
    `);
    console.log('DB ready');
  } catch (e) {
    console.error('DB init error:', e.message);
  }
}

// GET /api/sync — returns all stored keys
app.get('/api/sync', async (req, res) => {
  try {
    const result = await pool.query('SELECT key, value FROM app_data');
    const data = {};
    result.rows.forEach(row => {
      try { data[row.key] = JSON.parse(row.value); } catch {}
    });
    res.json(data);
  } catch (e) {
    res.status(500).json({ error: e.message });
  }
});

// POST /api/sync — save a single key/value
app.post('/api/sync', async (req, res) => {
  const { key, value } = req.body;
  if (!key) return res.status(400).json({ error: 'Missing key' });
  try {
    await pool.query(
      `INSERT INTO app_data (key, value, updated_at)
       VALUES ($1, $2, NOW())
       ON CONFLICT (key) DO UPDATE SET value = $2, updated_at = NOW()`,
      [key, JSON.stringify(value)]
    );
    res.json({ ok: true });
  } catch (e) {
    res.status(500).json({ error: e.message });
  }
});

initDB().then(() => {
  app.listen(PORT, () => console.log(`Album del Amor corriendo en puerto ${PORT}`));
});
