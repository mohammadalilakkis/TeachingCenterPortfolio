# Synapse Teaching Center - Portfolio Website

A modern, animated portfolio website for Synapse Teaching Center located in Baalbeck, Lebanon. This website showcases the center's courses, teachers, facilities, and provides a contact form for enrollment.

## 🎨 Features

- **Modern Design**: Clean, professional design with gradient accents and smooth animations
- **Fully Responsive**: Works seamlessly on desktop, tablet, and mobile devices
- **Smooth Animations**: Scroll-triggered animations, hover effects, and interactive elements
- **Interactive Elements**: Cursor glow effect, animated counters, parallax scrolling
- **Course Showcase**: Display up to 10 courses including IoT, Arduino, Robotics, 3D Printing, Math, Physics, Programming, CNC Working, and more
- **Teacher Profiles**: Showcase 6 expert teachers with their specializations
- **Contact Form**: Functional contact form for enrollment inquiries
- **GitHub Pages Ready**: Optimized for static hosting on GitHub Pages

## 🚀 Getting Started

### Local Development

1. Clone or download this repository
2. Open `index.html` in your web browser
3. No build process required - it's a pure HTML/CSS/JS website!

### Hosting on GitHub Pages

1. **Create a GitHub Repository**
   - Go to GitHub and create a new repository
   - Name it (e.g., `synapse-portfolio`)

2. **Upload Files**
   ```bash
   git init
   git add .
   git commit -m "Initial commit: Synapse portfolio website"
   git branch -M main
   git remote add origin https://github.com/yourusername/synapse-portfolio.git
   git push -u origin main
   ```

3. **Enable GitHub Pages**
   - Go to your repository on GitHub
   - Click on **Settings**
   - Scroll down to **Pages** section
   - Under **Source**, select `main` branch
   - Click **Save**
   - Your site will be available at: `https://yourusername.github.io/synapse-portfolio/`

## 📁 Project Structure

```
portfolio/
├── index.html          # Main HTML file
├── styles.css          # All styles and animations
├── script.js           # Interactive JavaScript
└── README.md           # This file
```

## 🎯 Sections

1. **Hero Section**: Eye-catching introduction with stats and call-to-action
2. **About**: Information about Synapse Teaching Center
3. **Courses**: Grid display of all available courses
4. **Teachers**: Profiles of expert instructors
5. **Labs & Facilities**: Showcase of available facilities
6. **Testimonials**: Student success stories
7. **Contact**: Contact form and location information

## 🎨 Customization

### Colors
Edit the CSS variables in `styles.css`:
```css
:root {
  --primary: #6366f1;
  --secondary: #ec4899;
  --accent: #f59e0b;
  /* ... */
}
```

### Content
- **Teachers**: Edit the teacher cards in `index.html` (lines 198-233)
- **Courses**: Modify course cards in `index.html` (lines 135-184)
- **Contact Info**: Update contact details in `index.html` (lines 305-317)

### Animations
All animations are defined in `styles.css`. You can adjust:
- Animation durations
- Easing functions
- Transform effects
- Hover states

## 📱 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## 🔧 Technologies Used

- **HTML5**: Semantic markup
- **CSS3**: Modern styling with animations, gradients, and flexbox/grid
- **Vanilla JavaScript**: No dependencies, pure JavaScript for interactivity
- **Google Fonts**: Manrope and Outfit font families

## 📝 License

This project is open source and available for use.

## 🤝 Contributing

Feel free to fork this project and customize it for your needs!

## 📧 Contact

For questions about Synapse Teaching Center:
- **Location**: Baalbeck City, Lebanon
- **Email**: hello@synapse.lb
- **Phone**: +961 70 000 000

---

Built with ❤️ for Synapse Teaching Center
