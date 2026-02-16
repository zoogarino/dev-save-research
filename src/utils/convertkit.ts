// ConvertKit public API key (safe for client-side use)
const CONVERTKIT_API_KEY = 'YOUR_API_KEY'; // Replace with your ConvertKit public API key
const CONVERTKIT_FORM_ID = 'YOUR_FORM_ID'; // Replace with your ConvertKit form ID

interface SubscribeResult {
  success: boolean;
  data?: any;
  error?: string;
}

export const subscribeToNewsletter = async (
  email: string,
  source = 'unknown',
  firstName = '',
  tags: string[] = []
): Promise<SubscribeResult> => {
  try {
    const response = await fetch(
      `https://api.convertkit.com/v3/forms/${CONVERTKIT_FORM_ID}/subscribe`,
      {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          api_key: CONVERTKIT_API_KEY,
          email,
          first_name: firstName,
          tags,
          fields: {
            source,
            signup_date: new Date().toISOString(),
          },
        }),
      }
    );

    const data = await response.json();

    if (data.subscription) {
      return { success: true, data };
    } else {
      throw new Error(data.error || 'Subscription failed');
    }
  } catch (error: any) {
    console.error('ConvertKit subscription error:', error);
    return { success: false, error: error.message };
  }
};
