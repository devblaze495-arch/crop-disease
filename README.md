# AgriVision - Crop Disease Detection App

AgriVision is a mobile-first web application that helps farmers detect and identify crop diseases through image scanning and AI analysis. Features include community sharing, scan history, and farmer notifications.

## Tech Stack

- **Framework**: React 19 with Vite
- **Styling**: Tailwind CSS with custom color palette
- **Navigation**: React Router v7
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Build Tool**: Vite (ESBuild)
- **Package Manager**: npm

## Project Structure

```
src/
├── components/
│   ├── layout/
│   │   └── MainLayout.jsx      # Root layout with sidebar & navigation
│   └── ui/
│       ├── BottomNav.jsx       # Mobile 5-tab navigation
│       ├── Button.jsx          # Reusable button component
│       └── WeatherWidget.jsx   # Weather display widget
├── pages/
│   ├── Community.jsx           # Community feed & sharing
│   ├── Dashboard.jsx           # Home page with quick actions
│   ├── Scan.jsx                # Real camera/gallery image capture
│   ├── Results.jsx             # AI analysis results
│   ├── History.jsx             # Scan history list
│   ├── Profile.jsx             # User profile
│   ├── LanguageSelection.jsx   # Language picker
│   └── Onboarding.jsx          # App onboarding flow
├── lib/
│   └── utils.js                # Utility functions
├── App.jsx                     # Main router
├── main.jsx                    # Entry point
└── index.css & App.css         # Styles
```

## Installation & Setup

### Prerequisites
- Node.js 16+ and npm

### Getting Started

1. **Clone the repository**
   ```bash
   git clone https://github.com/devblaze495-arch/crop-disease.git
   cd agrivision
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npm run dev
   ```
   The app will be available at `http://localhost:5173`

4. **Build for production**
   ```bash
   npm run build
   ```

5. **Preview production build**
   ```bash
   npm run preview
   ```

## Features

- **📸 Real Camera Integration**: Live camera access with image capture from video stream
- **🖼️ Gallery Support**: Select images from device gallery
- **🌾 Community Feed**: Share crop status and disease findings with other farmers
- **❤️ Social Engagement**: Like and comment on community posts
- **📊 Scan History**: Track all scans with dates and results
- **🌦️ Weather Widget**: Display current weather conditions
- **📱 Responsive Design**: Optimized for mobile and desktop
- **🎨 Beautiful UI**: Modern design with Tailwind CSS and Framer Motion animations

## Key Components

### WeatherWidget
Real-time weather display with temperature, wind speed, and humidity stats.

### Community
Share crop status with images, crop type, disease info, and descriptions. Like and interact with other farmers' posts.

### Scan
Capture crop leaf images using:
- Device camera (with real-time feed)
- Gallery picker
- Flash toggle

### Dashboard
Quick access to scanning, recent scans, and quick actions.

## Responsive Design

- **Mobile (< 1024px)**: Single column layout with bottom navigation
- **Desktop (≥ 1024px)**: Sidebar navigation with main content area

## Development

### Code Style
- Uses ESLint for code quality
- Tailwind CSS for styling
- React hooks for state management

### Common Tasks

**Run linter:**
```bash
npm run lint
```

## Browser Support

- Chrome/Edge (latest)
- Firefox (latest)
- Safari (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## Future Enhancements

- Backend API integration for persistent data
- Real AI/ML disease detection
- User authentication system
- Push notifications
- Image processing and optimization
- Offline support

## Contributors

Thanks to all team members working on AgriVision!

## License

MIT License - see LICENSE file for details

## Support

For issues and feature requests, please open an issue on GitHub.
