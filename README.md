# TitanCore Gym Website

This is a professional, responsive website for **TitanCore Gym**, a martial arts and fitness center inspired by elite performance and discipline.

## Features

- **Responsive Design:** Fully optimized for desktop and mobile devices.
- **Interactive Modals:** "Join Now" application form with validation.
- **Toast Notifications:** Real-time feedback for user actions using `sonner`.
- **Course Catalog:** Detailed information on MMA, Muay Thai, BJJ, Fitness, and Boxing with high-quality imagery.
- **Trainer Profiles:** Professional bios and expertise for our elite coaching staff.
- **Pricing Plans:** Clear membership tiers for every athlete.

## Tech Stack

- **React 19**
- **Vite**
- **Tailwind CSS 4**
- **Framer Motion (motion/react)**
- **Lucide React Icons**

---

## How to Upload to GitHub

1. **Create a Repository:**
   - Go to [GitHub](https://github.com) and create a new repository named `titancore-gym`.
   - Keep it public or private as per your preference.

2. **Initialize Git Locally:**
   - Open your terminal in the project root.
   - Run the following commands:
     ```bash
     git init
     git add .
     git commit -m "Initial commit: TitanCore Gym Website"
     ```

3. **Connect to GitHub:**
   - Copy the remote repository URL from GitHub.
   - Run:
     ```bash
     git remote add origin <YOUR_GITHUB_REPO_URL>
     git branch -M main
     git push -u origin main
     ```

---

## How to Publish for Free

### 1. Vercel (Recommended)
Vercel is the easiest way to deploy Vite/React apps.
- Go to [Vercel](https://vercel.com).
- Click **"Add New"** > **"Project"**.
- Import your GitHub repository.
- Vercel will automatically detect Vite. Click **"Deploy"**.
- Your site will be live on a `.vercel.app` domain.

### 2. Netlify
- Go to [Netlify](https://netlify.com).
- Click **"Add new site"** > **"Import from existing project"**.
- Connect to GitHub and select your repo.
- Set the build command to `npm run build` and publish directory to `dist`.
- Click **"Deploy site"**.

### 3. GitHub Pages
- Install the `gh-pages` package: `npm install gh-pages --save-dev`.
- Add a `homepage` field to `package.json`: `"homepage": "https://<username>.github.io/<repo-name>"`.
- Add these scripts to `package.json`:
  ```json
  "predeploy": "npm run build",
  "deploy": "gh-pages -d dist"
  ```
- Run `npm run deploy`.

---

## Development

To run the project locally:

```bash
npm install
npm run dev
```

The server will start at `http://localhost:3000`.
