# SanchitVerse 🌟

**By Sanchit** - A premium digital marketplace and blog platform

## Overview

SanchitVerse is a full-stack web application that combines a digital product marketplace with a modern blog platform. Built with React, Express, and MongoDB, it features a sleek metallic chic design with smooth animations and comprehensive functionality.

## Features

### 🎨 Frontend
- **React + Vite** for fast development
- **Tailwind CSS** for styling with metallic chic theme
- **Framer Motion** for smooth animations
- **Responsive Design** that works on all devices
- **Firebase Authentication** with Google and Email/Password
- **Modern UI/UX** with gradient backgrounds and glassmorphism

### 🔧 Backend
- **Express.js** RESTful API
- **MongoDB** database with Mongoose ODM
- **JWT Authentication** for secure endpoints
- **Nodemailer** for contact form email notifications
- **CORS** enabled for cross-origin requests
- **Environment Variables** for secure configuration

### 📱 Core Features
- **Digital Product Marketplace** - Browse and purchase digital products
- **Blog Platform** - Read insightful articles and tutorials
- **Contact Form** - Get in touch with integrated email notifications
- **User Authentication** - Secure login/register with Firebase
- **Admin Dashboard** - Manage products and blog posts
- **Search & Filter** - Find products and blogs easily

## Tech Stack

### Frontend
- **React 18** with Vite
- **Tailwind CSS** for styling
- **Framer Motion** for animations
- **React Router** for navigation
- **Axios** for API calls
- **Firebase** for authentication
- **React Hook Form** for form handling

### Backend
- **Node.js** with Express
- **MongoDB** database
- **Mongoose** ODM
- **JWT** for authentication
- **Bcryptjs** for password hashing
- **Nodemailer** for email functionality
- **CORS** for cross-origin requests

## Project Structure

```
SanchitVerse/
├── frontend/          # React frontend
│   ├── src/
│   │   ├── components/
│   │   ├── pages/
│   │   ├── hooks/
│   │   ├── utils/
│   │   └── styles/
│   └── package.json
├── backend/           # Express backend
│   ├── models/
│   ├── routes/
│   ├── middleware/
│   ├── server.js
│   └── package.json
├── README.md
└── .env
```

## Getting Started

### Prerequisites
- Node.js (v16 or higher)
- MongoDB (local or MongoDB Atlas)
- Firebase account for authentication

### Backend Setup

1. Navigate to the backend directory:
   ```bash
   cd backend
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Create a `.env` file in the backend directory:
   ```bash
   cp .env.example .env
   ```

4. Update the `.env` file with your configuration:
   ```
   PORT=5000
   MONGODB_URI=mongodb://localhost:27017/sanchitverse
   JWT_SECRET=your-super-secret-jwt-key
   EMAIL_USER=your-email@gmail.com
   EMAIL_PASS=your-app-password
   ```

5. Start the backend server:
   ```bash
   npm run dev
   ```

### Frontend Setup

1. Navigate to the frontend directory:
   ```bash
   cd frontend
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Create a `.env` file in the frontend directory:
   ```bash
   VITE_API_URL=http://localhost:5000/api
   VITE_FIREBASE_API_KEY=your-firebase-api-key
   VITE_FIREBASE_AUTH_DOMAIN=your-firebase-auth-domain
   VITE_FIREBASE_PROJECT_ID=your-firebase-project-id
   VITE_FIREBASE_STORAGE_BUCKET=your-firebase-storage-bucket
   VITE_FIREBASE_MESSAGING_SENDER_ID=your-firebase-messaging-sender-id
   VITE_FIREBASE_APP_ID=your-firebase-app-id
   ```

4. Start the frontend development server:
   ```bash
   npm run dev
   ```

## API Endpoints

### Authentication
- `POST /api/auth/register` - Register new user
- `POST /api/auth/login` - Login user
- `GET /api/auth/me` - Get current user profile
- `PUT /api/auth/me` - Update user profile

### Blogs
- `GET /api/blogs` - Get all blogs
- `GET /api/blogs/:id` - Get single blog
- `GET /api/blogs/featured/all` - Get featured blogs
- `GET /api/blogs/categories/all` - Get all categories

### Products
- `GET /api/products` - Get all products
- `GET /api/products/:id` - Get single product
- `GET /api/products/featured/all` - Get featured products
- `GET /api/products/categories/all` - Get all categories

### Contact
- `POST /api/contact` - Submit contact form
- `GET /api/contact` - Get all contact messages (admin)
- `PUT /api/contact/:id/status` - Update contact status (admin)

## Environment Variables

### Backend (.env)
```
PORT=5000
MONGODB_URI=mongodb://localhost:27017/sanchitverse
JWT_SECRET=your-super-secret-jwt-key
EMAIL_HOST=smtp.gmail.com
EMAIL_PORT=587
EMAIL_USER=your-email@gmail.com
EMAIL_PASS=your-app-password
EMAIL_FROM=your-email@gmail.com
EMAIL_TO=your-receiving-email@gmail.com
```

### Frontend (.env)
```
VITE_API_URL=http://localhost:5000/api
VITE_FIREBASE_API_KEY=your-firebase-api-key
VITE_FIREBASE_AUTH_DOMAIN=your-firebase-auth-domain
VITE_FIREBASE_PROJECT_ID=your-firebase-project-id
VITE_FIREBASE_STORAGE_BUCKET=your-firebase-storage-bucket
VITE_FIREBASE_MESSAGING_SENDER_ID=your-firebase-messaging-sender-id
VITE_FIREBASE_APP_ID=your-firebase-app-id
```

## Deployment

### Frontend (Vercel/Netlify)
1. Push your code to GitHub
2. Connect your repository to Vercel or Netlify
3. Set environment variables in the deployment platform
4. Deploy automatically on push

### Backend (Render/Heroku)
1. Create a new web service on Render or Heroku
2. Connect your GitHub repository
3. Set environment variables in the platform
4. Deploy automatically on push

## Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Contact

For any questions or suggestions, please reach out to:
- Email: your-email@example.com
- LinkedIn: [Your LinkedIn Profile]
- Twitter: [Your Twitter Handle]

---

**Built with ❤️ by Sanchit**
