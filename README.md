# 🚀 Personal Portfolio Website

A modern, responsive personal portfolio website built with Next.js, React, TypeScript, and Tailwind CSS.

![Next.js](https://img.shields.io/badge/Next.js-14-black?style=for-the-badge&logo=next.js)
![React](https://img.shields.io/badge/React-18-blue?style=for-the-badge&logo=react)
![TypeScript](https://img.shields.io/badge/TypeScript-5-blue?style=for-the-badge&logo=typescript)
![Tailwind CSS](https://img.shields.io/badge/Tailwind-3-38bdf8?style=for-the-badge&logo=tailwind-css)

## ✨ Features

- 🎨 **Modern Design** - Clean, professional, and eye-catching interface
- 📱 **Fully Responsive** - Perfect on all devices (mobile, tablet, desktop)
- ⚡ **Fast Performance** - Built with Next.js 14 App Router
- 🎭 **Smooth Animations** - Framer Motion powered interactions
- 🎯 **SEO Optimized** - Meta tags and semantic HTML
- 🌙 **Dark Theme** - Professional dark mode design
- 💼 **Portfolio Showcase** - Display your projects beautifully
- 📧 **Contact Section** - Easy ways for people to reach you

## 📋 Sections

1. **Hero** - Eye-catching introduction with your name and title
2. **About** - Your story, background, and what you do
3. **Projects** - Showcase your best work
4. **Skills** - Visual display of your tech stack
5. **Contact** - Multiple ways to get in touch

## 🛠️ Tech Stack

- **Framework:** Next.js 14 (App Router)
- **UI Library:** React 18
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **Animations:** Framer Motion
- **Icons:** Lucide React & React Icons

## 📦 Installation

### Prerequisites

- Node.js 18+ and npm/yarn/pnpm
- Git

### Steps

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

## 🎨 Customization

### Update Personal Information

Edit these files to customize with your information:

**1. app/layout.tsx** - Update meta tags (title, description, keywords)

**2. components/Hero.tsx** - Change name and title
```typescript
<h1>Your Name</h1>
<span>Your Title</span>
```

**3. components/About.tsx** - Update your story and background

**4. components/Projects.tsx** - Add your projects
```typescript
const projects = [
  {
    title: 'Your Project',
    description: 'Description',
    tech: ['Tech', 'Stack'],
    liveLink: 'https://...',
    githubLink: 'https://github.com/...'
  }
]
```

**5. components/Skills.tsx** - Update your skills

**6. components/Contact.tsx** - Update contact information

### Change Colors

Edit `tailwind.config.js`:

```javascript
colors: {
  primary: {
    DEFAULT: '#FF0558',  // Your primary color
    dark: '#CC0446',
    light: '#FF3D7F',
  },
}
```

### Add Your Photo (Optional)

1. Add your photo to `/public` folder
2. Update Hero or About component to display it

## 🚀 Deployment

### Deploy to Vercel (Recommended)

1. Push your code to GitHub
2. Go to [vercel.com](https://vercel.com)
3. Import your repository
4. Click Deploy
5. Done! 🎉

Your site will be live at: `https://your-site.vercel.app`

### Deploy to Netlify

1. Push to GitHub
2. Go to [netlify.com](https://netlify.com)
3. Import repository
4. Deploy

## 📁 Project Structure

```
portfolio-website/
├── app/
│   ├── globals.css          # Global styles
│   ├── layout.tsx            # Root layout
│   └── page.tsx              # Main page
├── components/
│   ├── Navbar.tsx            # Navigation bar
│   ├── Hero.tsx              # Hero section
│   ├── About.tsx             # About section
│   ├── Projects.tsx          # Projects showcase
│   ├── Skills.tsx            # Skills display
│   ├── Contact.tsx           # Contact section
│   └── Footer.tsx            # Footer
├── public/                   # Static assets
├── package.json
├── tsconfig.json
├── tailwind.config.js
└── next.config.js
```

## 🎯 Performance

- ✅ Lighthouse Score: 90+
- ✅ Fast page loads
- ✅ Optimized images
- ✅ SEO friendly
- ✅ Mobile responsive

## 📝 License

This project is open source and available under the MIT License.

## 👨‍💻 Author

**Peram Geethanjanreddy**
- GitHub: [@Geethanjanreddy](https://github.com/Geethanjanreddy)
- LinkedIn: [geethanjan27](https://www.linkedin.com/in/geethanjan27)

## 🙏 Acknowledgments

- Next.js Team
- Tailwind CSS
- Framer Motion
- Vercel

---

**Made with 💙 and ☕ by Geethanjanreddy**

Happy coding! 🚀
