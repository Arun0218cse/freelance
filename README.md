# 💼 Arun's Professional Portfolio

A modern, fully-featured freelancer portfolio website built with React.js, featuring a working contact form with email functionality.

## 🌟 Features

### 📄 Pages
- **Home** - Hero section with stats, features, and tech stack
- **About** - Personal introduction and core values
- **Services** - Detailed service offerings
- **Portfolio** - Filterable project showcase
- **Skills** - Technical skills with progress bars
- **Testimonials** - Client reviews
- **Contact** - Working contact form with email functionality

### 🎨 Design
- Modern dark theme with gradients
- Glassmorphism effects
- Smooth animations and transitions
- Fully responsive (mobile, tablet, desktop)
- Premium aesthetics

### ✉️ Contact Form
- Sends emails to: tech18arun@gmail.com
- Auto-reply to clients
- Beautiful HTML email templates
- Success/Error handling
- Works in development and production

## 🚀 Quick Start

### Development

```bash
# Install dependencies
npm install

# Run frontend and backend together
npm run dev:all

# OR run separately:

# Terminal 1 - Frontend
npm run dev

# Terminal 2 - Backend
npm run server
```

Visit: http://localhost:5174

### Production Build

```bash
npm run build
```

## 📧 Email Configuration

The contact form uses **Nodemailer** with Gmail:
- Sending from: lordarun5201@gmail.com
- Receiving at: tech18arun@gmail.com
- Credentials stored in `.env` file

## 🌐 Deploy to Vercel

See [VERCEL_DEPLOYMENT.md](./VERCEL_DEPLOYMENT.md) for complete deployment instructions.

**Quick Deploy:**
1. Push to GitHub
2. Import to Vercel
3. Add environment variables:
   - `EMAIL_USER` = lordarun5201@gmail.com
   - `EMAIL_PASS` = qysk hfjr dsjg nmjf
4. Deploy!

## 📱 Contact Information

- **Email**: tech18arun@gmail.com
- **Phone**: +91 8608630388
- **Location**: Rasipuram, Namakkal, Tamil Nadu, India

## 🛠️ Tech Stack

### Frontend
- React.js with TypeScript
- Vite (Build tool)
- React Router (Navigation)
- React Icons
- CSS3 (Custom styling)

### Backend
- Express.js
- Nodemailer (Email service)
- CORS
- Vercel Serverless Functions

### Deployment
- Vercel (Frontend & API)
- Environment variables for security

---

**Built with ❤️ using React.js and modern web technologies**

For deployment help, see [VERCEL_DEPLOYMENT.md](./VERCEL_DEPLOYMENT.md)
