const express = require('express');
const path = require('path');

const app = express();
const FRONTEND_DIR = path.join(__dirname, 'frontend');

// Serve static frontend files
app.use(express.static(FRONTEND_DIR));

// SPA fallback — serve index.html for any unmatched route
app.get('*all', (req, res) => {
  res.sendFile(path.join(FRONTEND_DIR, 'index.html'));
});

const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
