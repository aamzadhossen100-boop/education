# 🎓 LearnHub - Modern Responsive Learning Video Platform

A high-performance, dark-charcoal & emerald-green themed educational video website built with **React**, **Vite**, and pure responsive **CSS**. Fully optimized for mobile visitors (including traffic arriving directly from **Telegram**) and prepared for free 1-click deployment on **Vercel**.

---

## 🚀 Key Features

- **HTML5 Video Player:**
  - Streams directly from `/videos/lesson.mp4` (no YouTube dependency).
  - Preloads only metadata (`preload="metadata"`) for blazing fast initial loading.
  - No intrusive autoplay.
  - Perfect responsive **16:9** aspect ratio on mobile, tablet, and desktop.
  - Native controls (play/pause, seek bar, volume, fullscreen).
  - Quick action toolbar: -10s / +10s skip and 1x / 1.25x / 1.5x / 2x playback speed controls.
  - Helpful visual error card with instructions if the video file is missing.
- **Monetization (Adsterra Integration Ready):**
  - Modular `AdSlot.jsx` component for Top Banner, Bottom Banner, Sidebar, and Content areas.
  - Isolated from video playback and controls.
  - Safe script injection that prevents duplicate script execution during React re-renders.
  - Clean, neutral development placeholders during setup.
- **Mobile & Telegram Optimized:**
  - Fast touch targets and lightweight bundle (~52 kB gzip).
  - Prominent "Join Telegram Channel" actions.
  - In-app browser friendly (Telegram iOS & Android webviews).
- **SEO & Legal Compliance:**
  - Complete meta tags, OpenGraph tags, and favicon.
  - Built-in accessible modals for **Privacy Policy**, **Terms of Service**, and **Contact Support** (crucial for Adsterra publisher approval).

---

## 📁 Project Structure

```
education/
├── public/
│   ├── images/
│   │   └── lesson-poster.svg      # Branded high-res video poster
│   └── videos/
│       ├── README.txt             # Video guide
│       └── lesson.mp4             # 👈 PLACE YOUR 16 MB MP4 VIDEO FILE HERE
├── src/
│   ├── components/
│   │   ├── Header.jsx             # Top bar, logo, and Telegram button
│   │   ├── VideoPlayer.jsx        # HTML5 16:9 video player with error card
│   │   ├── AdSlot.jsx             # Reusable Adsterra ad container
│   │   ├── Footer.jsx             # Footer with navigation and policy links
│   │   └── InfoModal.jsx          # Contact, Privacy Policy & Terms modal
│   ├── config/
│   │   └── siteConfig.js          # 👈 EDIT SITE TEXT, TELEGRAM, & ADSTERRA ADS HERE
│   ├── pages/
│   │   └── Home.jsx               # Main page layout & sidebar
│   ├── App.jsx                    # Root app component
│   ├── main.jsx                   # React entry point
│   └── styles.css                 # Dark charcoal & emerald design system
├── index.html                     # HTML5 template with SEO & font tags
├── package.json                   # Scripts & dependencies
├── vercel.json                    # Vercel SPA routing & video cache headers
├── vite.config.js                 # Vite build configuration
└── README.md
```

---

## 🎬 1. Where to Place Your Video File

Place your **16 MB MP4 video file** in this exact directory:

```
E:\education\public\videos\lesson.mp4
```

> **Why this works:** Vite and Vercel automatically serve everything in the `public/` directory from the root domain. When your video is saved at `public/videos/lesson.mp4`, it will be available immediately at:
> ```
> /videos/lesson.mp4
> ```

---

## 💻 2. How to Run Locally

1. Open PowerShell or Command Prompt in the `E:\education` folder:
   ```powershell
   cd E:\education
   ```

2. If dependencies are not yet installed:
   ```powershell
   npm install
   ```

3. Start the local development server:
   ```powershell
   npm run dev
   ```

4. Open `http://localhost:3000` in your browser.

---

## 🛠️ 3. How to Customize Text & Telegram Link

All titles, headings, descriptions, and links are located in one single file:
👉 **`src/config/siteConfig.js`**

Open that file to update:
- Website Name (`siteConfig.siteName`)
- Page Title & Headings (`siteConfig.hero.mainHeading`)
- Telegram Channel Link (`siteConfig.telegram.channelUrl`)
- Contact Email (`siteConfig.contact.email`)

---

## 💰 4. How to Add Your Real Adsterra Ad Codes

Once you receive your Adsterra publisher approval and banner codes:

1. Open `src/config/siteConfig.js`.
2. Locate the `ads.slots` section:
   ```javascript
   ads: {
     showPlaceholders: false, // Set to false when your ads are live
     slots: {
       topBanner: {
         id: "top-banner",
         enabled: true,
         label: "Top Banner",
         // Paste your Adsterra code snippet here:
         scriptSnippet: `
           <script type="text/javascript">
             atOptions = {
               'key' : 'YOUR_ADSTERRA_KEY',
               'format' : 'iframe',
               'height' : 90,
               'width' : 728,
               'params' : {}
             };
           </script>
           <script type="text/javascript" src="//www.topcreativeformat.com/YOUR_ADSTERRA_KEY/invoke.js"></script>
         `,
       },
       // You can also add bottomBanner, sidebarBanner, and inContentBanner
     }
   }
   ```
3. Save the file. The `AdSlot` component will automatically mount and render the ad without duplicate scripts or page reloads.

---

## 🌐 5. Deploying to Vercel (Step-by-Step)

### Step A: Push to GitHub

1. Initialize git in `E:\education`:
   ```powershell
   cd E:\education
   git init
   git add .
   git commit -m "Initial commit of LearnHub"
   ```

2. Create a new repository on your GitHub account (e.g. `learnhub`).

3. Link and push to GitHub:
   ```powershell
   git remote add origin https://github.com/YOUR_USERNAME/learnhub.git
   git branch -M main
   git push -u origin main
   ```

> 💡 **Note on Video File Size:** GitHub easily supports files up to 100 MB. Your 16 MB MP4 file will push to GitHub and deploy to Vercel smoothly.

### Step B: Connect to Vercel

1. Go to [https://vercel.com](https://vercel.com) and log in (or sign up for free).
2. Click **"Add New..."** ➔ **"Project"**.
3. Import your **`learnhub`** repository from GitHub.
4. Vercel will automatically detect **Vite**:
   - **Framework Preset:** Vite
   - **Build Command:** `npm run build`
   - **Output Directory:** `dist`
5. Click **Deploy**.
6. In less than 1 minute, your website will be live with a free SSL certificate at:
   `https://your-project.vercel.app`

---

## 🧪 Production Build Verification

To verify the production build locally at any time:
```powershell
npm run build
```
This generates the optimized static assets in the `dist` folder.
