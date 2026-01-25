# WhatsApp Integration Setup Guide

Your contact form is now configured to send inquiries to your WhatsApp **without redirecting users**. Follow one of these setup options:

---

## Option 1: Firebase (Recommended for beginners)

### Step 1: Set up Firebase
1. Go to [firebase.google.com](https://firebase.google.com/)
2. Click "Get Started" and create a new project
3. Enable **Cloud Functions** in the Firebase Console
4. Copy your project ID

### Step 2: Install Firebase Tools
```bash
npm install -g firebase-tools
firebase login
firebase init functions
```

### Step 3: Set up Twilio for WhatsApp
1. Create a Twilio account at [twilio.com](https://twilio.com/)
2. Get your:
   - Account SID
   - Auth Token
   - WhatsApp-enabled phone number

### Step 4: Configure Firebase
```bash
firebase functions:config:set twilio.account_sid="your_sid" twilio.auth_token="your_token" twilio.whatsapp_number="whatsapp:+your_number"
firebase deploy --only functions
```

### Step 5: Update Your API Endpoint
In `src/lib/whatsapp.ts`, update the API URL:
```typescript
const response = await fetch('https://YOUR_FIREBASE_FUNCTION_URL/handleContactSubmission', {
```

---

## Option 2: Express.js Server

### Step 1: Install Dependencies
```bash
npm install express twilio cors dotenv
```

### Step 2: Create Environment Variables
Create a `.env` file:
```
TWILIO_ACCOUNT_SID=your_sid
TWILIO_AUTH_TOKEN=your_token
TWILIO_WHATSAPP_NUMBER=whatsapp:+your_number
```

### Step 3: Set up Server
Use the code from `API_SETUP_TWILIO.js` and deploy to Heroku, Render, or any Node.js hosting

### Step 4: Update API Endpoint
In `src/lib/whatsapp.ts`, update to your server URL:
```typescript
const response = await fetch('https://your-server.com/api/contact', {
```

---

## Option 3: Quick Test (Using Make.com or Zapier)

If you don't want to set up a backend right away:

1. Create a free [Make.com](https://make.com/) account
2. Set up a webhook that receives your form data
3. Connect it to WhatsApp via Make's integrations
4. Update the API endpoint in `src/lib/whatsapp.ts` to your Make webhook URL

---

## Twilio Setup Details

Your WhatsApp Number: **9574699881**

### Get Twilio Credentials:
1. Sign up at [twilio.com](https://twilio.com/)
2. Navigate to Console Dashboard
3. Find **Account SID** and **Auth Token**
4. Go to **WhatsApp Sandbox** to get a Twilio WhatsApp number
5. Add your personal WhatsApp number as a participant

---

## Testing the Integration

1. Fill out the contact form on your website
2. Click "Send Inquiry via WhatsApp"
3. You should receive the message on your WhatsApp without any page redirect
4. The user stays on the form and sees a success message

---

## Troubleshooting

- **Message not arriving?** Check that your Twilio WhatsApp number is properly configured
- **CORS errors?** Make sure your backend includes proper CORS headers
- **API endpoint 404?** Verify the URL matches your deployed backend
- **Missing fields?** Ensure all form fields are filled before submission

---

## Security Tips

- Never commit your `.env` file with secrets
- Use environment variables for all API keys
- Add rate limiting to your backend endpoint
- Validate all form data on the backend
- Use HTTPS for your API requests

---

Need help? Check the API setup files in your project root:
- `API_SETUP_FIREBASE.js` - Firebase Cloud Functions approach
- `API_SETUP_TWILIO.js` - Express.js server approach
