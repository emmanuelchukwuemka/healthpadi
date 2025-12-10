# API Configuration Guide for HealthPadi

## Required Environment Variables

Add these to your `.env` file for full functionality:

### 1. Supabase (Authentication & Database) ✅
```env
VITE_SUPABASE_URL=https://xzidabaayjoxjtjkvqxx.supabase.co
VITE_SUPABASE_ANON_KEY=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...
```
**Status**: Already configured

---

### 2. Google Maps API (Hospital Locator)
```env
VITE_GOOGLE_MAPS_API_KEY=your_google_maps_api_key_here
```

**How to get it**:
1. Go to [Google Cloud Console](https://console.cloud.google.com/)
2. Create a new project or select existing
3. Enable these APIs:
   - Maps JavaScript API
   - Places API
   - Geocoding API
4. Go to "Credentials" → "Create Credentials" → "API Key"
5. Copy the API key

**Used in**: `EnhancedHospitalLocatorScreen.jsx` for showing hospitals on map

---

### 3. OpenAI API (AI Chat/Help Widget)
```env
VITE_OPENAI_API_KEY=sk-your_openai_api_key_here
```

**How to get it**:
1. Go to [OpenAI Platform](https://platform.openai.com/)
2. Sign up or log in
3. Navigate to API Keys section
4. Click "Create new secret key"
5. Copy and save it (you won't see it again!)

**Used in**: `AIHelpWidget.jsx` for intelligent health assistance

**Alternative - Free Option**: Use Gemini API instead
```env
VITE_GEMINI_API_KEY=your_gemini_api_key_here
```
Get it from [Google AI Studio](https://makersuite.google.com/app/apikey)

---

### 4. Optional: Analytics & Monitoring

#### Google Analytics
```env
VITE_GA_MEASUREMENT_ID=G-XXXXXXXXXX
```

#### Sentry (Error Tracking)
```env
VITE_SENTRY_DSN=https://your_sentry_dsn_here
```

---

## Complete `.env` File Template

```env
# Supabase Configuration
VITE_SUPABASE_URL=https://xzidabaayjoxjtjkvqxx.supabase.co
VITE_SUPABASE_ANON_KEY=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inh6aWRhYmFheWpveGp0amt2cXh4Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjUyODM1OTQsImV4cCI6MjA4MDg1OTU5NH0.YY4auYDkbpvm5Q1mRSI0I8NDnhginucrUkyjN4xiCXs

# Google Maps API (for Hospital Locator)
VITE_GOOGLE_MAPS_API_KEY=your_google_maps_api_key_here

# AI Configuration (choose one)
VITE_OPENAI_API_KEY=sk-your_openai_api_key_here
# OR
VITE_GEMINI_API_KEY=your_gemini_api_key_here

# Optional: Analytics
VITE_GA_MEASUREMENT_ID=G-XXXXXXXXXX

# Optional: Error Tracking
VITE_SENTRY_DSN=https://your_sentry_dsn_here
```

---

## Usage in Code

### Google Maps
```javascript
// In EnhancedHospitalLocatorScreen.jsx
const GOOGLE_MAPS_API_KEY = import.meta.env.VITE_GOOGLE_MAPS_API_KEY;

// Load Google Maps script
const script = document.createElement('script');
script.src = `https://maps.googleapis.com/maps/api/js?key=${GOOGLE_MAPS_API_KEY}&libraries=places`;
```

### AI Chat
```javascript
// In AIHelpWidget.jsx
const OPENAI_API_KEY = import.meta.env.VITE_OPENAI_API_KEY;
// OR
const GEMINI_API_KEY = import.meta.env.VITE_GEMINI_API_KEY;

// Make API call
const response = await fetch('https://api.openai.com/v1/chat/completions', {
  headers: {
    'Authorization': `Bearer ${OPENAI_API_KEY}`,
    'Content-Type': 'application/json'
  },
  // ... rest of configuration
});
```

---

## Important Notes

1. **Never commit `.env` file to Git** - It's already in `.gitignore`
2. **Restart dev server** after changing `.env` variables
3. **Use environment variables** for production deployment
4. **Secure your API keys** - Add domain restrictions where possible

---

## Current Implementation Status

✅ **Supabase**: Configured and ready
✅ **Authentication Service**: Enhanced with role-based support
⏳ **Google Maps**: Needs API key configuration
⏳ **AI Chat**: Needs API key configuration

---

## Next Steps

1. Add your Google Maps API key to `.env`
2. Add your OpenAI or Gemini API key to `.env`
3. Restart the development server
4. Test the Hospital Locator map functionality
5. Test the AI Help Widget chat

All the code is ready - you just need to add the API keys!
