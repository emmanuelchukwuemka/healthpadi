import OpenAI from 'openai';

// Initialize OpenAI client
const openai = new OpenAI({
  apiKey: import.meta.env.VITE_OPENAI_API_KEY,
  dangerouslyAllowBrowser: true // Note: In production, you should use a backend proxy
});

/**
 * Analyze symptoms using OpenAI
 * @param {string} symptoms - User's symptom description
 * @returns {Promise<Object>} Analysis results
 */
export const analyzeSymptoms = async (symptoms) => {
  try {
    const prompt = `
      As a medical symptom analyzer, please analyze the following symptoms and provide:
      1. A brief summary of the reported symptoms
      2. An urgency level (Low, Moderate, High)
      3. Recommended next steps
      4. Basic first aid advice if applicable
      5. A disclaimer that this is not a diagnosis
      
      Symptoms: "${symptoms}"
      
      Response format:
      Summary: [brief summary]
      Urgency: [Low/Moderate/High]
      Next Steps: [recommended actions]
      First Aid: [basic first aid advice]
      Disclaimer: [standard medical disclaimer]
    `;

    const completion = await openai.chat.completions.create({
      model: "gpt-3.5-turbo",
      messages: [
        {
          role: "system",
          content: "You are a helpful medical symptom analyzer. Always provide factual, cautious responses and include appropriate disclaimers."
        },
        {
          role: "user",
          content: prompt
        }
      ],
      temperature: 0.7,
      max_tokens: 300
    });

    const response = completion.choices[0].message.content;
    
    // Parse the response
    const lines = response.split('\n');
    const result = {
      summary: '',
      urgency: 'Moderate',
      nextSteps: '',
      firstAid: '',
      disclaimer: 'This is not a diagnosis. Always consult a doctor for serious symptoms.'
    };

    lines.forEach(line => {
      if (line.startsWith('Summary:')) {
        result.summary = line.replace('Summary:', '').trim();
      } else if (line.startsWith('Urgency:')) {
        result.urgency = line.replace('Urgency:', '').trim();
      } else if (line.startsWith('Next Steps:')) {
        result.nextSteps = line.replace('Next Steps:', '').trim();
      } else if (line.startsWith('First Aid:')) {
        result.firstAid = line.replace('First Aid:', '').trim();
      } else if (line.startsWith('Disclaimer:')) {
        result.disclaimer = line.replace('Disclaimer:', '').trim();
      }
    });

    return { data: result, error: null };
  } catch (error) {
    console.error('AI symptom analysis error:', error);
    return { 
      data: null, 
      error: error.message || 'Failed to analyze symptoms' 
    };
  }
};

/**
 * Save symptom conversation to Supabase
 * @param {string} userId - User ID
 * @param {Object} conversation - Conversation data
 * @returns {Promise<Object>} Save result
 */
export const saveSymptomConversation = async (userId, conversation) => {
  try {
    // This would typically save to Supabase
    // Implementation depends on your Supabase setup
    
    // Mock implementation for now
    console.log('Saving conversation for user:', userId, conversation);
    
    return { data: { success: true }, error: null };
  } catch (error) {
    console.error('Error saving conversation:', error);
    return { data: null, error };
  }
};