const express = require('express');
const router = express.Router();

const messageController = require('../controllers/messageController');

// POST endpoint for receiving messages
router.post('/', messageController.processMessage);

module.exports = router;
