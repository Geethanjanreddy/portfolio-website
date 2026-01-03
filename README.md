# 🚀 Peram Geethanjanreddy - Personal Portfolio

A modern, responsive personal portfolio website showcasing my projects, skills, and experience as a Junior Frontend Developer.

[![Live Demo](https://img.shields.io/badge/Live-Demo-success?style=for-the-badge&logo=vercel)](https://portfolio-website-reddy.vercel.app)
[![GitHub](https://img.shields.io/badge/GitHub-Source-blue?style=for-the-badge&logo=github)](https://github.com/Geethanjanreddy/portfolio-website)

![Next.js](https://img.shields.io/badge/Next.js-14-black?style=for-the-badge&logo=next.js)
![React](https://img.shields.io/badge/React-18-blue?style=for-the-badge&logo=react)
![TypeScript](https://img.shields.io/badge/TypeScript-5-blue?style=for-the-badge&logo=typescript)
![Tailwind CSS](https://img.shields.io/badge/Tailwind-3-38bdf8?style=for-the-badge&logo=tailwind-css)

---

## 🌐 Live Website

**[👉 View Portfolio →](https://portfolio-website-reddy.vercel.app)**

---

## 👨‍💻 About This Project

This is my personal portfolio website where I showcase my projects, skills, and journey as a developer. Built with modern web technologies and designed with attention to detail.

**Who I Am:**
- 🎓 CSE AI & ML student at Kalasalingam University, Tamil Nadu
- 💻 Junior Frontend Developer
- 🎨 Passionate about React, Next.js, TypeScript, and Tailwind CSS
- 🚀 Always learning and building

## ✨ Features

- 🎨 **Modern Design** - Clean, professional, and eye-catching interface with dark theme
- 📱 **Fully Responsive** - Perfect experience on mobile, tablet, and desktop
- ⚡ **Fast Performance** - Built with Next.js 14 App Router for optimal speed
- 🎭 **Smooth Animations** - Framer Motion powered interactions throughout
- 🎯 **SEO Optimized** - Proper meta tags and semantic HTML
- 💼 **Project Showcase** - Featuring my Productivity Dashboard and more
- 📧 **Easy Contact** - Multiple ways to get in touch

## 📋 Sections

1. **Hero** - Introduction with my name and call-to-action
2. **About** - My background, education, and what I do
3. **Projects** - Showcase of my best work including:
   - [Productivity Dashboard](https://productivity-dashboard-2026.vercel.app)
   - More projects coming soon!
4. **Skills** - Visual display of my tech stack:
   - Frontend: React, Next.js, TypeScript, JavaScript
   - Styling: Tailwind CSS, Framer Motion, CSS3
   - Backend: Python, Flask
   - Tools: Git, GitHub, VS Code, Vercel, Figma
5. **Contact** - Get in touch via email, LinkedIn, or GitHub

## 🛠️ Tech Stack

**Frontend:**
- Next.js 14 (App Router)
- React 18
- TypeScript 5
- Tailwind CSS 3

**Animations & UI:**
- Framer Motion
- Lucide React
- React Icons

**Development:**
- ESLint
- PostCSS
- Autoprefixer

## 📦 Installation & Setup

### Prerequisites

- Node.js 18+ and npm
- Git

### Local Development

1. **Clone the repository**
   ```bash
   git clone https://github.com/Geethanjanreddy/portfolio-website.git
   cd portfolio-website
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Run development server**
   ```bash
   npm run dev
   ```

4. **Open browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

### Build for Production

```bash
npm run build
npm start
```

## 🎨 Customization Guide

Want to use this template for your own portfolio? Here's how:

### 1. Update Personal Information

**Hero Section** (`components/Hero.tsx`):
```typescript
// Update your name
<h1>Your Name</h1>
<span>Your Title</span>
```

**About Section** (`components/About.tsx`):
- Update your education, background, and story
- Customize the feature cards

**Projects Section** (`components/Projects.tsx`):
```typescript
const projects = [
  {
    title: 'Your Project Name',
    description: 'Project description',
    tech: ['React', 'TypeScript', 'Tailwind'],
    liveLink: 'https://your-project.vercel.app',
    githubLink: 'https://github.com/yourusername/project'
  }
]
```

**Contact Section** (`components/Contact.tsx`):
- Update email, LinkedIn, GitHub links
- Change location

### 2. Change Color Scheme

Edit `tailwind.config.js`:
```javascript
colors: {
  primary: {
    DEFAULT: '#FF0558',  // Main color
    dark: '#CC0446',     // Darker shade
    light: '#FF3D7F',    // Lighter shade
  },
}
```

### 3. Update SEO

Edit `app/layout.tsx`:
```typescript
export const metadata: Metadata = {
  title: 'Your Name | Your Title',
  description: 'Your description',
  keywords: ['Your', 'Keywords'],
}
```

## 🚀 Deployment

### Deploy to Vercel (Recommended)

1. Push your code to GitHub
2. Go to [vercel.com](https://vercel.com)
3. Sign in with GitHub
4. Import your repository
5. Click Deploy
6. Done! 🎉

Your site will be live at: `https://your-site.vercel.app`

**This project is deployed at:** [portfolio-website-reddy.vercel.app](https://portfolio-website-reddy.vercel.app)

## 📁 Project Structure

```
portfolio-website/
├── app/
│   ├── globals.css          # Global styles and animations
│   ├── layout.tsx            # Root layout with metadata
│   └── page.tsx              # Main page component
├── components/
│   ├── Navbar.tsx            # Navigation bar with smooth scroll
│   ├── Hero.tsx              # Hero section with CTA
│   ├── About.tsx             # About me section
│   ├── Projects.tsx          # Projects showcase
│   ├── Skills.tsx            # Tech stack display
│   ├── Contact.tsx           # Contact information
│   └── Footer.tsx            # Footer with social links
├── public/                   # Static assets
├── package.json              # Dependencies
├── tsconfig.json             # TypeScript config
├── tailwind.config.js        # Tailwind CSS config
├── postcss.config.js         # PostCSS config
└── next.config.js            # Next.js config
```

## 🎯 Performance

- ✅ Lighthouse Score: 95+ (Performance, Accessibility, Best Practices, SEO)
- ✅ Fast page loads with Next.js optimization
- ✅ Optimized animations with Framer Motion
- ✅ SEO friendly with proper meta tags
- ✅ Mobile responsive design

## 🔗 Connect With Me

- 🌐 **Portfolio:** [portfolio-website-reddy.vercel.app](https://portfolio-website-reddy.vercel.app)
- 📧 **Email:** [geethanjanperam@gmail.com](mailto:geethanjanperam@gmail.com)
- 💼 **LinkedIn:** [geethanjan27](https://www.linkedin.com/in/geethanjan27)
- 💻 **GitHub:** [@Geethanjanreddy](https://github.com/Geethanjanreddy)
- 🚀 **Featured Project:** [Productivity Dashboard](https://productivity-dashboard-2026.vercel.app)

## 📊 Featured Projects

### [Productivity Dashboard](https://productivity-dashboard-2026.vercel.app)
A modern task management dashboard with real-time filtering, priority management, and beautiful animations.

**Tech Stack:** Next.js 14, React 18, TypeScript, Tailwind CSS, Framer Motion

**Features:**
- Real-time task filtering
- Priority management (High, Medium, Low)
- Status tracking (Todo, In Progress, Completed)
- Responsive glassmorphism UI
- Smooth animations

[View Live](https://productivity-dashboard-2026.vercel.app) | [View Code](https://github.com/Geethanjanreddy/productivity-dashboard)

## 📝 License

This project is open source and available under the MIT License. Feel free to use it as a template for your own portfolio!

## 🙏 Acknowledgments

Built with amazing technologies:
- [Next.js](https://nextjs.org/) - React framework
- [React](https://react.dev/) - UI library
- [TypeScript](https://www.typescriptlang.org/) - Type safety
- [Tailwind CSS](https://tailwindcss.com/) - Styling
- [Framer Motion](https://www.framer.com/motion/) - Animations
- [Vercel](https://vercel.com/) - Hosting

Special thanks to the open-source community for the amazing tools and libraries.

---

<div align="center">

### ⭐ If you find this project helpful, please give it a star!

**Made with 💙 and ☕ by [Geethanjanreddy](https://github.com/Geethanjanreddy)**

[![GitHub stars](https://img.shields.io/github/stars/Geethanjanreddy/portfolio-website?style=social)](https://github.com/Geethanjanreddy/portfolio-website)
[![GitHub forks](https://img.shields.io/github/forks/Geethanjanreddy/portfolio-website?style=social)](https://github.com/Geethanjanreddy/portfolio-website/fork)

</div>

---

## 🚀 Quick Start Commands

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Start production server
npm start

# Lint code
npm run lint
```

---

**Happy Coding! 💻✨**

**Live Site:** [https://portfolio-website-reddy.vercel.app](https://portfolio-website-reddy.vercel.app)