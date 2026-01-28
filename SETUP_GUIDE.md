# Setup Guide for Collaborators

This guide ensures that all team members can clone the repository and run the project successfully with identical configurations.

## Quick Start (5 minutes)

```bash
# 1. Clone the repository
git clone https://github.com/devblaze495-arch/crop-disease.git
cd agrivision

# 2. Install dependencies
npm install

# 3. Start development server
npm run dev

# 4. Open in browser
# Navigate to http://localhost:5173
```

## Detailed Setup Steps

### Step 1: System Requirements
- **Node.js**: v16.0.0 or higher
- **npm**: v7.0.0 or higher
- **Git**: Latest version
- **Browser**: Chrome, Firefox, Safari, or Edge (latest versions)

**Check your versions:**
```bash
node --version
npm --version
git --version
```

### Step 2: Clone Repository
```bash
git clone https://github.com/devblaze495-arch/crop-disease.git
cd agrivision
```

### Step 3: Install Dependencies
```bash
npm install
```

This will install:
- React 19.2.0 & React DOM
- Vite 7.2.4 (build tool)
- Tailwind CSS 3.4.17 (styling)
- Framer Motion 12.29.2 (animations)
- Lucide React 0.563.0 (icons)
- React Router DOM 7.13.0 (routing)
- And all development dependencies (ESLint, Autoprefixer, etc.)

### Step 4: Verify Installation
```bash
npm list
```

Should show all dependencies installed correctly without errors.

### Step 5: Start Development Server
```bash
npm run dev
```

Expected output:
```
  VITE v7.2.4  ready in 123 ms

  ➜  Local:   http://localhost:5173/
  ➜  Press h + enter to show help
```

### Step 6: Open Application
- Open browser and navigate to `http://localhost:5173`
- You should see the AgriVision app loading
- Try navigating through different pages (Dashboard, Scan, Community, etc.)

## Available Commands

```bash
# Development server with hot reload
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview

# Run ESLint to check code quality
npm run lint

# Install new package
npm install [package-name]

# Update packages
npm update
```

## Project Structure

```
agrivision/
├── src/
│   ├── components/        # Reusable UI components
│   ├── pages/            # Page components (routes)
│   ├── lib/              # Utilities
│   ├── App.jsx           # Main router
│   └── main.jsx          # Entry point
├── public/               # Static assets
├── package.json          # Dependencies
├── tailwind.config.js    # Tailwind configuration
├── vite.config.js        # Vite configuration
└── README.md             # Project documentation
```

## Troubleshooting

### Issue: `npm install` fails
**Solution:**
```bash
# Clear npm cache
npm cache clean --force

# Delete node_modules and package-lock.json
rm -r node_modules package-lock.json

# Reinstall
npm install
```

### Issue: Port 5173 already in use
**Solution:**
```bash
# Use different port
npm run dev -- --port 3000
```

### Issue: Dependencies not found after git pull
**Solution:**
```bash
# Always install after pulling new changes
npm install

# Then start dev server
npm run dev
```

### Issue: Build errors or styling issues
**Solution:**
```bash
# Clear vite cache
rm -r node_modules/.vite

# Reinstall and rebuild
npm install
npm run build
```

## Git Workflow

### Before Starting Work
```bash
# Update your local repository
git pull origin main

# Create a new branch for your feature
git checkout -b feature/your-feature-name
```

### After Making Changes
```bash
# Stage all changes
git add .

# Commit with descriptive message
git commit -m "feat: description of what you did"

# Push to GitHub
git push origin feature/your-feature-name

# Create a Pull Request on GitHub
```

### Merge to Main
- All changes go through Pull Requests (no direct pushing to main)
- At least one code review required before merging
- After merging, pull latest changes locally

```bash
git checkout main
git pull origin main
```

## Code Style Guidelines

- Use functional components with React hooks
- Component names should be PascalCase
- File names match component names
- Use Tailwind CSS for styling (no inline styles)
- Use meaningful variable/function names
- Add comments for complex logic

## Testing Your Setup

After completing setup, test these features:

1. **Navigation**: Click all tabs at bottom (mobile) or sidebar (desktop)
2. **Camera**: Try Scan page → camera should open
3. **Gallery**: Try Scan page → gallery picker should open
4. **Community**: Upload an image and create a post
5. **Responsive**: Resize browser to test mobile/desktop views
6. **Console**: Open DevTools (F12) → check for errors

## IDE/Editor Recommendations

- **VS Code** (recommended)
- **WebStorm**
- **Sublime Text**

### VS Code Extensions to Install
- ES7+ React/Redux/React-Native snippets
- Tailwind CSS IntelliSense
- Prettier (code formatter)
- ESLint

## Environment Variables (if needed in future)

Create `.env.local` in project root:
```
VITE_API_URL=http://localhost:3000
VITE_APP_NAME=AgriVision
```

## Performance Optimization

The app includes:
- Fast Refresh (HMR) - instant updates during development
- Tree-shaking - removes unused code in production builds
- Code splitting with React Router

## Need Help?

1. Check the [README.md](README.md) for project overview
2. Check [this file](SETUP_GUIDE.md) for detailed setup help
3. Look at existing code for patterns and examples
4. Ask team members on Discord/Slack
5. Open an issue on GitHub

## Important Notes

- **Always run `npm install` after `git pull`** - new dependencies might have been added
- **Don't commit `node_modules`** - it's in .gitignore
- **Don't commit `.env.local`** - add to .gitignore if created
- **Test on multiple devices** - ensure responsive design works
- **Use meaningful commit messages** - helps team understand changes

## Common Development Tasks

### Add a New Component
```bash
# 1. Create file
src/components/MyComponent.jsx

# 2. Import and use in parent component
import MyComponent from '../components/MyComponent'
```

### Add a New Page/Route
```bash
# 1. Create file
src/pages/MyPage.jsx

# 2. Add route in App.jsx
<Route path="/mypage" element={<MyPage />} />

# 3. Add navigation link in BottomNav.jsx or MainLayout.jsx
```

### Update Tailwind Styles
- Tailwind config: `tailwind.config.js`
- Custom colors already configured in config
- Use `@apply` for custom utility classes in CSS files

## Success Checklist

- [ ] Node.js and npm installed and verified
- [ ] Repository cloned successfully
- [ ] `npm install` completed without errors
- [ ] `npm run dev` started successfully
- [ ] Application loaded in browser at localhost:5173
- [ ] Navigation and pages work correctly
- [ ] No console errors
- [ ] Camera access works (if permissions granted)
- [ ] Responsive design works on mobile view

Once all items are checked, you're ready to start contributing!

---

**Last Updated**: January 28, 2026
**Maintained By**: AgriVision Team
