# Abdul Hadi Khan Portfolio Website (V1)

<a href="https://abdulhadikhan.netlify.app/" target="_blank" rel="noreferrer">
  <img height="400" src="./images/Screenshot.avif" alt="Portfolio Website Screenshot">
</a>

## Overview

This is my personal portfolio website showcasing my projects, skills, and professional experience. Built with vanilla HTML, CSS, and JavaScript, the site emphasizes clean code, accessibility, and performance optimization.

## Features

- **Responsive Design**: Fully responsive layout that works seamlessly across desktop, tablet, and mobile devices
- **Dynamic Content**: Projects and skills are loaded dynamically from JSON files for easy maintenance
- **Custom Animations**: Smooth transitions and hover effects using Materialize CSS ripple effects
- **Contact Form**: Integrated Formspree form for direct communication
- **Parallax Effects**: Engaging visual experience on supported screen sizes
- **Performance Optimized**: Achieved excellent Google Lighthouse scores across all metrics

## Sections

- **Hero Section**: Eye-catching introduction with animated text and background
- **About Me**: Personal introduction, background, and interests with tabbed navigation
- **Skills**: Grid display of technical skills with technology logos
- **Experience**: Timeline of work experience and education
- **Expertise**: Three main focus areas - Web Development, UI/UX Design, and Software Development
- **Portfolio**: Categorized showcase of projects with live demos and GitHub links
- **Contact**: Contact form, email addresses, and social media links

## Performance & Accessibility

This website has been optimized for performance and accessibility following Google Lighthouse best practices:

<img src="./images/Lighthouse.avif" alt="Google Lighthouse Performance Scores">

**Optimizations include:**

- Meta description and proper semantic HTML for SEO
- Alt attributes on all images for accessibility
- Proper heading hierarchy (h1 → h2 → h3)
- ARIA labels on icon-only links for screen readers
- Semantic list structures (`<ul>` → `<li>` → `<a>`)
- Deferred JavaScript loading to prevent render-blocking
- LCP (Largest Contentful Paint) optimization with `fetchpriority="high"` on hero image
- Accessible forms with proper labels and focus states

## Technologies Used

- **HTML5**: Semantic markup and structure
- **CSS3**: Custom styling with animations and responsive design
- **JavaScript (ES6+)**: Dynamic content loading and interactivity
- **Materialize CSS**: Ripple effects and UI enhancements
- **Formspree**: Contact form backend
- **FontAwesome**: Icons for social media and UI elements
- **JSON**: Data storage for projects and skills

## Project Structure

```

├── index.html              # Main HTML file
├── styles/
│   ├── style.css          # Core styles (scrollbar, selection, materialize)
│   └── sections.css       # Section-specific styles
├── javascript/
│   ├── script.js          # Tab navigation and form handling
│   ├── sections.js        # Dynamic content loading
│   └── materialize.js     # Materialize ripple effects
├── constants/
│   ├── projects.json      # Project data
│   └── logos.json         # Skills/technology logos
└── images/                # Images and assets

```

## Local Development

1. Clone the repository:

```bash
git clone https://github.com/AbdulDevHub/Personal-Portfolio-Website.git
```

2. Open `index.html` in your browser or use a local server:

```bash
# Using Python
python -m http.server 8000

# Using Node.js
npx http-server
```

3. Navigate to `http://localhost:8000` in your browser

## Deployment

The website is deployed on Netlify and automatically updates when changes are pushed to the main branch.

**Live Site**: [abdulhadikhan.netlify.app](https://abdulhadikhan.netlify.app/)

## Contact

Feel free to reach out if you have any questions or would like to collaborate!

- **Email**: <ahkn63@gmail.com>
- **LinkedIn**: [abdul-hadi-khan](https://www.linkedin.com/in/abdul-hadi-khan/)
- **GitHub**: [AbdulDevHub](https://github.com/AbdulDevHub)
- **YouTube**: [Learning Expressway](https://www.youtube.com/@learningexpressway/videos)

## License

This project is open source and available under the [MIT License](LICENSE).

---

⭐ If you found this helpful, please consider giving it a star!
