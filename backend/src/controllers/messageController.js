// Import the processing service (which you'll create next)
const processingService = require('../services/processingService');

const messageController = {
  async processMessage(req, res) {
    try {
      const input = req.body.input;
      const result = await processingService.processInput(input);
      res.json({ message: result });
    } catch (error) {
      res.status(500).send('Error processing message');
    }
  }
};

module.exports = messageController;
