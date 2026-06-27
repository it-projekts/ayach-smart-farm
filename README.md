# Ayach Smart Farm Website

A professional React website for **Ayach Smart Farm** — built without WordPress,
deployable for free on Vercel and connected to your domain `ayachsmartfarm.online`.

---

## 📁 Project Structure

```
ayach-smart-farm/
├── public/
│   ├── index.html          ← Main HTML shell
│   └── logo.png            ← PUT YOUR LOGO HERE
├── src/
│   ├── index.js            ← React entry point
│   ├── index.css           ← Global styles & CSS variables
│   ├── App.js              ← Router (links all pages)
│   ├── hooks/
│   │   └── useReveal.js    ← Scroll animation hook
│   ├── components/
│   │   ├── Navbar.js / .css
│   │   └── Footer.js / .css
│   └── pages/
│       ├── Home.js / .css
│       ├── About.js / .css
│       ├── Products.js / .css
│       ├── Community.js / .css
│       └── Contact.js / .css
└── package.json
```

---

## 🚀 Getting Started in VS Code

### Step 1 — Install Node.js (if you don't have it)
Download from: https://nodejs.org (choose the LTS version)

### Step 2 — Open this folder in VS Code
```
File → Open Folder → select ayach-smart-farm
```

### Step 3 — Install dependencies
Open the VS Code terminal (Ctrl + ` ) and run:
```bash
npm install
```

### Step 4 — Start the development server
```bash
npm start
```
The site will open at http://localhost:3000 in your browser.
Every time you save a file, the browser auto-refreshes.

---

## 🖼️ Adding Your Content

### Logo
1. Put your logo file in the `/public` folder as `logo.png`
2. In `Navbar.js`, find the comment about the logo and replace:
   ```jsx
   <div className="navbar-logo-icon">🌿</div>
   ```
   with:
   ```jsx
   <img src="/logo.png" alt="Ayach Smart Farm" className="navbar-logo-img" />
   ```
3. Do the same in `Footer.js`

### Photos
1. Create a folder: `public/images/`
2. Drop your photos in there (e.g. `public/images/farm-overview.jpg`)
3. In each page file, look for comments marked `IMAGE PLACEHOLDER` and replace:
   ```jsx
   <div className="img-placeholder">...</div>
   ```
   with:
   ```jsx
   <img src="/images/farm-overview.jpg" alt="Farm overview" className="home-about-img" />
   ```

### Videos
1. Put your video in `public/videos/farm-story.mp4`
2. In `Community.js`, find the video placeholder comment and replace with:
   ```jsx
   <video controls width="100%" poster="/images/video-poster.jpg">
     <source src="/videos/farm-story.mp4" type="video/mp4" />
   </video>
   ```

### Google Maps
1. Go to https://maps.google.com
2. Search "Amach Town Council, Lira District, Uganda"
3. Click Share → Embed a map → Copy HTML
4. In `Contact.js` and `About.js`, find the map placeholder comment and paste the `<iframe>` code

### Team Members (About page)
In `About.js`, find the `TEAM_PLACEHOLDER` array and update:
```js
{ initials: 'AF', role: 'Farm Director & Founder' }
```
Replace `initials` with `name` and add a photo:
```jsx
<img src="/images/team-john.jpg" alt="John Doe" className="team-photo" />
<div className="team-name">John Doe</div>
```

### Contact Form (make it actually send emails)
1. Go to https://formspree.io and create a free account
2. Create a new form — you'll get a Form ID like `xpzvwkqr`
3. In `Contact.js`, find the `handleSubmit` function and replace:
   ```js
   setSubmitted(true);
   ```
   with:
   ```js
   await fetch('https://formspree.io/f/YOUR_FORM_ID', {
     method: 'POST',
     headers: { 'Content-Type': 'application/json' },
     body: JSON.stringify(form),
   });
   setSubmitted(true);
   ```

### Social Media Links
Search for `https://facebook.com`, `https://x.com`, etc. in:
- `Navbar.js`
- `Footer.js`
- `Contact.js`

Replace with your actual profile URLs.

### Impact Stats (Community page)
In `Community.js`, update the `IMPACT_STATS` array with your real numbers:
```js
{ num: '200+', label: 'Farmers Trained' }
```

---

## 🌐 Free Deployment on Vercel

### Step 1 — Build the site
```bash
npm run build
```

### Step 2 — Create a free Vercel account
Go to https://vercel.com and sign up (use GitHub for easiest setup)

### Step 3 — Push to GitHub
```bash
git init
git add .
git commit -m "Initial Ayach Smart Farm website"
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/ayach-smart-farm.git
git push -u origin main
```

### Step 4 — Import on Vercel
1. Go to https://vercel.com/new
2. Click "Import Git Repository"
3. Select your `ayach-smart-farm` repo
4. Framework: **Create React App** (auto-detected)
5. Click "Deploy"

Your site will be live on a vercel.app URL in 2 minutes!

### Step 5 — Connect your domain `ayachsmartfarm.online`
1. In Vercel dashboard → your project → Settings → Domains
2. Add `ayachsmartfarm.online` and `www.ayachsmartfarm.online`
3. Vercel gives you DNS records (A record and CNAME)
4. Go to your domain registrar (where you bought the domain)
5. Update the DNS records as instructed by Vercel
6. Wait 10–60 minutes for DNS to propagate — done!

---

## 🎨 Customising Colors

All colors are defined as CSS variables in `src/index.css`:

```css
:root {
  --green-deep:   #1a4a1f;   /* Dark green — navbar, hero bg */
  --green-mid:    #2d7a35;   /* Medium green — buttons, links */
  --green-bright: #3da647;   /* Bright green — accents */
  --green-light:  #c8eacc;   /* Light green — chips, pale areas */
  --gold:         #c8891a;   /* Gold — highlights, accents */
  --cream:        #faf8f3;   /* Cream — alternate section bg */
}
```

Change any hex value to update the entire site.

---

## ✅ Checklist Before Going Live

- [ ] Replace emoji logo with real logo image
- [ ] Add all farm photos (at least 3–5)
- [ ] Add team member photos and names
- [ ] Update social media links with real profile URLs
- [ ] Set up Formspree for the contact form
- [ ] Embed Google Maps for your location
- [ ] Update community impact numbers (farmers trained, youth employed, etc.)
- [ ] Add farm video (Community page)
- [ ] Test on mobile phone
- [ ] Deploy to Vercel
- [ ] Connect domain ayachsmartfarm.online

---

Built with React · Hosted free on Vercel · No WordPress needed
