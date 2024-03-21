const express = require('express');
const axios = require('axios');
const app = express();
const PORT = process.env.PORT || 5000;
app.use(express.json());
// Handle payment initiation request
app.post('/api/initiate-payment', async (req, res) => {
  try {
    // Make a request to Flouci's API to initiate payment
    const flouciResponse = await axios.post(
      'https://api.flouci.com/payments/initiate',
      req.body, 
      
      {
        headers: {
          Authorization: `Bearer YOUR_FLOUCI_API_KEY`,
        },
      } 
    );
    // Send Flouci's response back to the client
    res.json(flouciResponse.data);
  } catch (error) {
    // Handle errors
    console.error('Error initiating payment:', error.message);
    res.status(500).json({ error: 'An error occurred. Please try again later.' });
  }
});
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
