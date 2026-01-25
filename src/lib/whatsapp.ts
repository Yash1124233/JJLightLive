// WhatsApp Integration Service
const WHATSAPP_NUMBER = '9574699881';
const WHATSAPP_PHONE_WITH_CODE = `91${WHATSAPP_NUMBER}`;

interface ContactFormData {
  name: string;
  email: string;
  phone: string;
  projectType: string;
  message: string;
}

/**
 * Format contact form data into WhatsApp message
 */
function formatWhatsAppMessage(data: ContactFormData): string {
  return `Hello! I have a new inquiry from your website:

*Name:* ${data.name}
*Email:* ${data.email}
*Phone:* ${data.phone}
*Project Type:* ${data.projectType || 'Not specified'}
*Message:* ${data.message}`;
}

/**
 * Submit inquiry to backend API
 * The backend will send the message to WhatsApp
 * No page redirect - user stays on the form
 */
export async function submitInquiry(formData: ContactFormData): Promise<{ success: boolean; error?: string }> {
  try {
    const message = formatWhatsAppMessage(formData);
    
    const response = await fetch('/api/contact', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        ...formData,
        message: message,
        recipientPhone: WHATSAPP_PHONE_WITH_CODE,
      }),
    });
    
    const data = await response.json();
    
    if (!response.ok) {
      throw new Error(data.error || 'Failed to submit inquiry');
    }

    return { success: true };
  } catch (error) {
    const errorMessage = error instanceof Error ? error.message : 'Failed to submit inquiry';
    console.error('Error submitting inquiry:', errorMessage);
    return { 
      success: false, 
      error: errorMessage 
    };
  }
}
