/**
 * Backend API endpoint for handling contact form submissions
 * 
 * This example uses Twilio to send WhatsApp messages
 * Install Twilio: npm install twilio
 * 
 * Setup:
 * 1. Create a Twilio account at https://www.twilio.com/
 * 2. Get your Account SID, Auth Token, and WhatsApp Number
 * 3. Set environment variables:
 *    - TWILIO_ACCOUNT_SID
 *    - TWILIO_AUTH_TOKEN
 *    - TWILIO_WHATSAPP_NUMBER (your Twilio WhatsApp number, e.g., whatsapp:+1234567890)
 * 4. Use this endpoint in your backend
 */

// Example using Express.js
const express = require('express');
const twilio = require('twilio');
const app = express();

app.use(express.json());

// Initialize Twilio client
const twilioClient = twilio(
  process.env.TWILIO_ACCOUNT_SID,
  process.env.TWILIO_AUTH_TOKEN
);

// Contact form endpoint
app.post('/api/contact', async (req, res) => {
  try {
    const { name, email, phone, projectType, message, recipientPhone } = req.body;

    // Validate required fields
    if (!name || !email || !phone || !message || !recipientPhone) {
      return res.status(400).json({ error: 'Missing required fields' });
    }

    // Send WhatsApp message via Twilio
    const result = await twilioClient.messages.create({
      from: process.env.TWILIO_WHATSAPP_NUMBER,
      to: `whatsapp:+${recipientPhone}`,
      body: message,
    });

    console.log(`WhatsApp message sent. SID: ${result.sid}`);

    // Optionally: Save to database here
    // await saveContactToDatabase({ name, email, phone, projectType, message });

    res.json({ 
      success: true, 
      messageSid: result.sid,
      message: 'Your inquiry has been sent successfully!' 
    });
  } catch (error) {
    console.error('Error sending WhatsApp message:', error);
    res.status(500).json({ 
      error: 'Failed to send inquiry. Please try again.' 
    });
  }
});

module.exports = app;
