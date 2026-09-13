# Vinay | AI/ML Engineer Portfolio Website

A futuristic, recruiter-ready personal portfolio built for **Vinay** (Chinnam Vinay), an aspiring AI/ML Engineer and 3rd-year B.Tech AIML student at Ramachandra College of Engineering.

Designed with cinematic dark-mode aesthetics inspired by modern developer ecosystems (Vercel, Linear, Awwwards), featuring interactive Framer Motion animations, subtle neural particle canvas, authentic profile portrait presentation, and detailed architectural project modals.

---

## 🚀 Key Features

- **Strictly Factual & Truthful Content**: Complete integration of Vinay's authentic B.Tech AIML background, CGPA 7.6, NPTEL Elite Certification (IIT Kharagpur, 62%), and Prakalp Hackathon 3rd Prize (*DuoXtitans*).
- **Authentic Portrait Presentation**: Uses Vinay's real photo (`src/assets/profile/profile.jpg`) integrated with an interactive cyber frame and floating technical badges.
- **Interactive Project Architecture**: Detailed modal showcasing the problem, solution, ML pipeline, and key capabilities of projects like *Smart Crop Recommendation & Leaf Disease Detection*.
- **Data-Driven Architecture**: All portfolio information (skills, projects, certifications, social links) is maintained in `src/data/portfolioData.js` for effortless updates.
- **Micro-Interactions**: Ambient neural particle background canvas, top scroll progress bar, desktop custom cursor, and smooth hover effects.
- **Production-Ready & Fully Responsive**: Tested across desktop (1440px/1280px), tablet (768px), and mobile (390px/360px).
- **SEO & Accessibility Optimized**: Semantic HTML5 hierarchy, JSON-LD Person schema, OpenGraph tags, and full `prefers-reduced-motion` compliance.

---

## 🛠️ Tech Stack

- **Frontend**: React 19, JavaScript (ES6+)
- **Build Tool**: Vite 8
- **Styling**: Tailwind CSS v4, Vanilla CSS Design System
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Typography**: Space Grotesk, Plus Jakarta Sans, JetBrains Mono

---

## 📂 Project Structure

```
├── public/
│   ├── favicon.svg          # Custom cyber monogram favicon
│   └── profile.jpg          # Social preview image
├── src/
│   ├── assets/
│   │   └── profile/
│   │       └── profile.jpg  # Vinay's authentic photo
│   ├── components/
│   │   ├── Navbar.jsx       # Floating blur navbar + mobile drawer
│   │   ├── Hero.jsx         # Hero section with portrait & badges
│   │   ├── About.jsx        # Honest bio, standing, & status cards
│   │   ├── Skills.jsx       # Categorized skills with truthful levels
│   │   ├── TechStack.jsx    # Core tech icon grid
│   │   ├── Projects.jsx     # Featured projects showcase
│   │   ├── ProjectModal.jsx # Architecture & flow modal
│   │   ├── HackathonSection.jsx # DuoXtitans & Prakalp win
│   │   ├── Certifications.jsx  # NPTEL Elite (IIT Kharagpur) card
│   │   ├── Achievements.jsx # Podium honors & awards
│   │   ├── Education.jsx    # B.Tech AIML timeline
│   │   ├── Focus.jsx        # Active specialization cards
│   │   ├── GithubSection.jsx# Live GitHub stats & repo cards
│   │   ├── Contact.jsx      # Contact CTAs & message form
│   │   ├── Footer.jsx       # Brand signature & copyright
│   │   ├── BackgroundCanvas.jsx # Neural particle canvas
│   │   ├── CustomCursor.jsx # Desktop glowing cursor
│   │   └── ScrollProgress.jsx   # Top scroll progress bar
│   ├── data/
│   │   └── portfolioData.js # Central master data store
│   ├── App.jsx              # Main page assembly
│   ├── index.css            # Cyber dark theme design system
│   └── main.jsx             # React root mount
├── .env.example
├── index.html               # SEO metadata & JSON-LD schema
├── package.json
└── vite.config.js
```

---

## 💻 Local Development

### 1. Install Dependencies
```bash
npm install
```

### 2. Run Local Development Server
```bash
npm run dev
```
Open [http://localhost:5173](http://localhost:5173) in your browser.

### 3. Production Build
```bash
npm run build
```

### 4. Preview Production Build
```bash
npm run preview
```

---

## 🌐 Deploy to Vercel

1. Push your code to GitHub (see below).
2. Go to [vercel.com](https://vercel.com) and click **"Add New Project"**.
3. Import your `portfolio` repository.
4. Framework preset will automatically detect **Vite**.
5. (Optional) Set Environment Variable: `VITE_CONTACT_EMAIL` with your email.
6. Click **Deploy**.

---

## 📦 Push to GitHub

```bash
git init
git add .
git commit -m "Create professional AI/ML engineer portfolio"
git branch -M main
git remote add origin https://github.com/vinayraj75/portfolio.git
git push -u origin main
```

---

## 📝 Customization Guide

To modify projects, certifications, or skills in the future, simply open:
[`src/data/portfolioData.js`](file:///c:/Users/Anshu/OneDrive/Desktop/VINNUPORTI/src/data/portfolioData.js)
and update the relevant objects or arrays. No component code edits are required!
