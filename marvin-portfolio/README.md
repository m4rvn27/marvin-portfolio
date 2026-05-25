# Marvin Ocampo Gonzalez — Personal Portfolio

A warm, scrapbook-aesthetic personal portfolio built with React. No unnecessary libraries — just React, CSS animations, and the Intersection Observer API.

---

## 🚀 Getting Started in VS Code

### 1. Prerequisites
Make sure you have these installed:
- [Node.js](https://nodejs.org/) (v18 or higher)
- [npm](https://www.npmjs.com/) (comes with Node)
- [VS Code](https://code.visualstudio.com/)

Check by running in your terminal:
```bash
node -v
npm -v
```

### 2. Open the project
```bash
# Navigate to the project folder
cd marvin-portfolio

# Install dependencies
npm install

# Start the dev server
npm start
```

Your portfolio will open at **http://localhost:3000** and hot-reload as you edit files.

---

## 📁 Project Structure

```
marvin-portfolio/
├── public/
│   └── index.html          # HTML shell + Google Fonts
├── src/
│   ├── components/
│   │   ├── Nav.js / Nav.css
│   │   ├── Hero.js / Hero.css
│   │   ├── About.js / About.css
│   │   ├── Projects.js / Projects.css
│   │   ├── Experience.js / Experience.css
│   │   ├── Skills.js / Skills.css
│   │   └── Footer.js / Footer.css
│   ├── hooks/
│   │   └── useInView.js    # Scroll-triggered animation hook
│   ├── App.js              # Root component
│   ├── App.css             # Shared styles & utilities
│   ├── index.js            # React entry point
│   └── index.css           # Global styles, CSS variables, fonts
└── package.json
```

---

## ✏️ How to Customize

### Add a new project
Open `src/components/Projects.js` and add to the `projects` array:
```js
{
  num: '02',
  name: 'Your Project Name',
  role: 'Your Role · Date',
  desc: 'Description of your project...',
  tags: ['React', 'Node.js', 'etc'],
  link: 'https://github.com/yourusername/repo',
  wip: false,
},
```

### Add your photo
1. Drop your photo into the `public/` folder (e.g. `photo.jpg`)
2. In `Hero.js`, add inside `.journal-card`:
```jsx
<img src="/photo.jpg" alt="Marvin" className="journal-photo" />
```
3. Style it in `Hero.css`:
```css
.journal-photo {
  width: 80px; height: 80px;
  border-radius: 50%;
  object-fit: cover;
  border: 2px solid var(--warm-tan);
  margin-bottom: 0.75rem;
}
```

### Change colors
All colors live in `src/index.css` under `:root`. Tweak any value there and it updates everywhere.

### Update your info
- **Hero bio**: `src/components/Hero.js` → `journal-text` paragraph
- **About text**: `src/components/About.js` → `about-text` section
- **Facts**: `src/components/About.js` → `facts` array
- **Experience**: `src/components/Experience.js` → `experiences` array
- **Skills**: `src/components/Skills.js` → `skills` array

---

## 🌐 Deploying to Vercel

### Option A: Vercel CLI (fastest)
```bash
# Install Vercel CLI globally
npm install -g vercel

# Build and deploy
npm run build
vercel

# Follow the prompts — it auto-detects Create React App
```

### Option B: GitHub + Vercel (recommended for ongoing updates)
1. Push this project to a GitHub repo:
   ```bash
   git init
   git add .
   git commit -m "initial portfolio"
   git branch -M main
   git remote add origin https://github.com/YOUR_USERNAME/marvin-portfolio.git
   git push -u origin main
   ```
2. Go to [vercel.com](https://vercel.com) → **New Project**
3. Import your GitHub repo
4. Vercel auto-detects React → click **Deploy**
5. Every `git push` to `main` auto-deploys 🎉

### Custom domain (optional)
In Vercel dashboard → your project → **Settings → Domains**
Add something like `marvinocampo.dev` (domains are ~$10–15/yr on Namecheap)

---

## 🛠️ VS Code Extensions (recommended)
- **ES7+ React/Redux/React-Native snippets** — fast component scaffolding
- **Prettier** — auto-formats your code
- **Auto Rename Tag** — renames JSX tags in pairs
- **GitLens** — see git history inline

---

## 📦 Build for production
```bash
npm run build
```
Creates an optimized `build/` folder ready to deploy anywhere.

---

*Built with React · Deployed on Vercel · Powered by thai tea ☕*
