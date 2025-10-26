# Coder.Next - Modern Web Design & Development Agency

A fully responsive, animated business website built with React.js, Tailwind CSS, and Framer Motion. Features a complete multi-page layout with smooth animations, modern design, and optimized performance.

## 🚀 Features

### Pages
- **Home** - Animated hero section with stats and featured services
- **About** - Company story, values, and team information
- **Services** - Complete service offerings (UI/UX Design, Web Development, App Development)
- **Projects** - Portfolio grid with detailed project pages
- **Industries** - Industry-specific solutions and expertise
- **Blog** - Article listing with individual blog post pages
- **Contact** - Functional contact form with validation

### Technical Features
- ✅ React.js with Vite for fast development
- ✅ React Router for seamless navigation
- ✅ Framer Motion for smooth 60fps animations
- ✅ Tailwind CSS with custom design system
- ✅ Fully responsive mobile-first design
- ✅ Accessible (ARIA labels, focus states, keyboard navigation)
- ✅ Form validation with Zod
- ✅ Reusable component architecture
- ✅ SEO optimized with meta tags
- ✅ Performance optimized

## 🎨 Design System

### Color Palette
- **Primary**: `#2563EB` (Blue) - Main brand color
- **Secondary**: `#111827` (Dark Gray) - Contrast color
- **Gradients**: Custom gradients for hero sections
- **Shadows**: Elegant shadows for depth

### Typography
- Sans-serif font family
- Consistent spacing and sizing
- Bold headings with clear hierarchy

## 📦 Project Structure

```
src/
├── components/
│   ├── ui/               # Reusable UI components (Button, Card, Input, etc.)
│   ├── Navbar.tsx        # Navigation with mobile menu
│   ├── Footer.tsx        # Site footer with links
│   ├── PageTransition.tsx # Smooth page transitions
│   ├── ServiceCard.tsx   # Reusable service card
│   ├── ProjectCard.tsx   # Reusable project card
│   └── BlogCard.tsx      # Reusable blog card
├── pages/
│   ├── Home.tsx          # Homepage with hero
│   ├── About.tsx         # About us page
│   ├── Services.tsx      # Services listing
│   ├── Projects.tsx      # Projects grid
│   ├── ProjectDetail.tsx # Individual project page
│   ├── Industries.tsx    # Industries we serve
│   ├── Blog.tsx          # Blog listing
│   ├── BlogPost.tsx      # Individual blog post
│   └── Contact.tsx       # Contact form
├── hooks/                # Custom React hooks
├── lib/                  # Utility functions
├── App.tsx               # Main app component with routing
└── index.css             # Global styles and design tokens
```

## 🛠️ Setup & Installation

### Prerequisites
- Node.js (v18 or higher)
- npm or yarn

### Installation Steps

1. **Clone the repository**
   ```bash
   git clone <YOUR_GIT_URL>
   cd <YOUR_PROJECT_NAME>
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npm run dev
   ```

4. **Open in browser**
   ```
   http://localhost:8080
   ```

## 📝 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build locally
- `npm run lint` - Run ESLint

## 🚀 Deployment

### Deploy to Vercel

1. **Install Vercel CLI**
   ```bash
   npm install -g vercel
   ```

2. **Deploy**
   ```bash
   vercel
   ```

3. **Follow the prompts** to configure your project

Or use the [Vercel Dashboard](https://vercel.com):
- Import your Git repository
- Vercel will auto-detect the Vite configuration
- Click "Deploy"

### Deploy to Netlify

1. **Install Netlify CLI**
   ```bash
   npm install -g netlify-cli
   ```

2. **Build the project**
   ```bash
   npm run build
   ```

3. **Deploy**
   ```bash
   netlify deploy --prod
   ```

Or use the [Netlify Dashboard](https://netlify.com):
- Connect your Git repository
- Build command: `npm run build`
- Publish directory: `dist`
- Click "Deploy"

### Deploy to Lovable

Simply open [Lovable](https://lovable.dev) and click on Share → Publish for instant deployment.

## ♿ Accessibility

This project follows WCAG 2.1 guidelines:
- Semantic HTML elements
- ARIA labels on interactive elements
- Keyboard navigation support
- Focus states on all interactive elements
- Sufficient color contrast ratios
- Alt text on all images

## ⚡ Performance Optimizations

- Code splitting with React lazy loading
- Optimized images with proper sizing
- Minified CSS and JavaScript
- Tree-shaking for smaller bundle size
- Efficient re-renders with React optimization

## 🎭 Animations

Smooth animations powered by Framer Motion:
- Page transitions (fade and slide)
- Scroll-triggered animations
- Hover effects on cards and buttons
- Hero section floating elements
- Mobile menu animations

All animations run at 60fps for smooth performance.

## 🔧 Customization

### Update Colors
Edit `src/index.css` to change the design tokens:
```css
:root {
  --primary: 217 91% 60%;      /* Your brand color */
  --secondary: 222 47% 11%;     /* Secondary color */
  /* ... */
}
```

### Add New Pages
1. Create component in `src/pages/`
2. Add route in `src/App.tsx`
3. Add navigation link in `src/components/Navbar.tsx`

### Modify Content
All content is in the page components. Simply edit the text, images, and data in each page file.

## 📱 Responsive Design

- **Mobile**: < 768px - Single column, hamburger menu
- **Tablet**: 768px - 1024px - Two columns, full navigation
- **Desktop**: > 1024px - Three columns, full navigation

## 🤝 Contributing

Feel free to submit issues and enhancement requests!

## 📄 License

This project is open source and available under the MIT License.

## 🆘 Support

For support, email hello@Coder.Next.com or visit our [documentation](https://docs.lovable.dev/).

---

Built with ❤️ using React, Tailwind CSS, and Framer Motion
