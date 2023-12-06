const express = require('express');
const path = require('path');
const app = express();
const port = 3001; // Use a different port from the frontend

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

app.listen(port, () => console.log(`Backend running on http://localhost:${port}`));
