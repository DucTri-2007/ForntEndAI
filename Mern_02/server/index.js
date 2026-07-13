const express = require('express');
const cors = require('cors');
const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// APIs
app.use('/api/admin', require('./api/admin.js'));

// Home API check
app.get('/', (req, res) => {
  res.send('MERN Stack - Shopping Online API is running...');
});

// Start server
app.listen(PORT, () => {
  console.log(`[Express] Server is running on http://localhost:${PORT}`);
});
