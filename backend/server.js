const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const port = 3001;

// Import the message routes
const messageRoutes = require('./src/routes/messageRoutes');

// Middleware
app.use(cors()); // Enable CORS for frontend requests
app.use(bodyParser.json()); // Parse JSON request body

// Static file serving (index.html)
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

// Use the message routes for any '/message' requests
app.use('/message', messageRoutes);

app.listen(port, () => console.log(`Backend running on http://localhost:${port}`));
