// src/services/ApiService.js

const API_URL = 'http://localhost:3001'; // Adjust the URL based on your backend server address

export const ApiService = {
  async sendInput(input) {
    try {
      const response = await fetch(`${API_URL}/message`, { // Replace '/your-endpoint' with your actual backend endpoint
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ input }), // Send input as JSON
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data = await response.json();
      return data; // Returns the response from the server
    } catch (error) {
      console.error('Error sending input:', error);
      // Handle error accordingly
    }
  }
};
