/**
 * Firebase Cloud Function to handle WhatsApp messages
 * 
 * Setup:
 * 1. Create a Firebase project at https://firebase.google.com/
 * 2. Enable Cloud Functions
 * 3. Install Firebase CLI: npm install -g firebase-tools
 * 4. Deploy this function using: firebase deploy --only functions
 * 
 * This uses Firebase + Twilio integration
 */

const functions = require('firebase-functions');
const twilio = require('twilio');

// Environment variables (set in Firebase Console)
const TWILIO_ACCOUNT_SID = functions.config().twilio.account_sid;
const TWILIO_AUTH_TOKEN = functions.config().twilio.auth_token;
const TWILIO_WHATSAPP_NUMBER = functions.config().twilio.whatsapp_number;

const twilioClient = twilio(TWILIO_ACCOUNT_SID, TWILIO_AUTH_TOKEN);

// Cloud Function: Handle contact form submissions
exports.handleContactSubmission = functions.https.onRequest(async (req, res) => {
  // Enable CORS
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
  res.header('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'OPTIONS') {
    res.status(200).send();
    return;
  }

  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const { name, email, phone, projectType, message, recipientPhone } = req.body;

    // Validate required fields
    if (!name || !email || !phone || !message || !recipientPhone) {
      return res.status(400).json({ error: 'Missing required fields' });
    }

    // Send WhatsApp message via Twilio
    const result = await twilioClient.messages.create({
      from: TWILIO_WHATSAPP_NUMBER,
      to: `whatsapp:+${recipientPhone}`,
      body: message,
    });

    console.log(`WhatsApp message sent. SID: ${result.sid}`);

    // Optionally: Save to Firestore
    // const db = admin.firestore();
    // await db.collection('contacts').add({
    //   name, email, phone, projectType, message,
    //   timestamp: admin.firestore.FieldValue.serverTimestamp(),
    //   messageSid: result.sid
    // });

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
