const express = require('express');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json({ limit: '10mb' }));
app.use(express.static(path.join(__dirname)));

// Legacy API endpoints — sync is now handled by Firebase client-side
app.get('/api/sync',  (_req, res) => res.json({}));
app.post('/api/sync', (_req, res) => res.json({ ok: true }));

app.listen(PORT, () => console.log(`Album del Amor corriendo en puerto ${PORT}`));
