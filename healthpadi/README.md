# HealthPadi

HealthPadi is a comprehensive healthcare application built with React.js that provides users with instant health guidance and connects them with healthcare professionals.

## Features

### 1. App Entry & Onboarding
- Splash screen with HealthPadi logo and tagline
- Welcome screen with introduction
- Permissions screen for location and notifications
- Sign-up/Login choice screen

### 2. Authentication Flow
- Phone number authentication with OTP verification
- Email and password authentication
- Basic profile setup after login

### 3. Main Dashboard
- Home dashboard with personalized greeting
- Quick action cards for symptom checking, emergency first aid, hospital finding, and doctor booking
- Recent activity tracking
- Daily health tips carousel

### 4. Symptom Checker
- Chat-style interface for describing symptoms
- Suggested quick symptoms chips
- AI-powered response with symptom summary, urgency level, and recommended next steps
- First-aid advice when applicable
- Option to save conversations to health records

### 5. Emergency First-Aid Guide
- Searchable emergency guides for 10 common medical emergencies
- Step-by-step instructions with illustrations
- Prominent emergency contact buttons

### 6. Hospital Finder
- Map and list views for finding nearby hospitals
- Filtering options by distance, 24-hour availability, emergency units, and verification status
- Hospital details with services offered
- Direct call and navigation options

### 7. Doctor Listing & Booking
- Searchable doctor directory by specialty or name
- Detailed doctor profiles with ratings and availability
- Mock appointment booking functionality

### 8. Profile & Health Records
- User profile management with emergency contacts and medical information
- Health records section with past symptom logs and consultations
- Prescription upload functionality

### 9. Additional Features
- Settings screen with privacy policy, terms of service, and account management
- About page with app information
- Responsive design for all device sizes
- Loading states and error handling

## Technical Implementation

### Frontend
- Built with React.js and React Router for navigation
- Styled with CSS custom properties for consistent theming
- Mobile-first responsive design
- Component-based architecture for maintainability

### Color Scheme
- Primary color: Teal / Cyan (#00C4B4)
- Emergency elements: Red (#ff4d4d)
- Clean, modern, spacious layout

## Getting Started

### Prerequisites
- Node.js (version 14 or higher)
- npm (comes with Node.js)

### Installation
1. Clone the repository
2. Navigate to the project directory
3. Install dependencies:
   ```
   npm install
   ```

### Running the Application
1. Start the development server:
   ```
   npm run dev
   ```
2. Open your browser and visit `http://localhost:5173`

### Building for Production
To create a production build:
```
npm run build
```

To preview the production build:
```
npm run preview
```

## Project Structure
```
src/
├── components/        # Reusable UI components
├── pages/             # Page components for each screen
├── App.jsx            # Main application component with routing
├── main.jsx           # Application entry point
└── App.css            # Global styles and component styles
```

## Development Notes
This is a frontend prototype implementation that includes all the specified screens and functionality. In a production environment, you would need to integrate with backend services for:
- User authentication and profile management
- Real hospital and doctor data
- Symptom checker AI integration
- Emergency contact services
- Health record storage

## License
This project is proprietary and confidential. All rights reserved.