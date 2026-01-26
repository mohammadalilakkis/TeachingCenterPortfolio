# Quick Start Guide - Run Locally

## 🚀 Method 1: Simple Double-Click (Fastest)

1. Navigate to the `portfolio` folder
2. Double-click `index.html`
3. It will open in your default browser!

**Note:** Some features might work better with a local server (Method 2).

---

## 🌐 Method 2: Local Web Server (Recommended)

### Option A: Using the provided script (Easiest)

**Windows:**
- Double-click `start-server.bat` OR
- Right-click `start-server.ps1` → Run with PowerShell

The server will start and automatically open your browser at `http://localhost:8000`

### Option B: Manual command

Open PowerShell or Command Prompt in the portfolio folder and run:

```bash
npx --yes http-server -p 8000 -o
```

This will:
- Start a local server on port 8000
- Automatically open your browser
- Show the website at `http://localhost:8000`

### Option C: Using Python (if installed)

```bash
python -m http.server 8000
```

Then open `http://localhost:8000` in your browser.

### Option D: Using PHP (if installed)

```bash
php -S localhost:8000
```

Then open `http://localhost:8000` in your browser.

---

## 🛑 To Stop the Server

Press `Ctrl + C` in the terminal/command prompt window.

---

## ✅ What You Should See

- Beautiful animated hero section
- Smooth scrolling navigation
- Interactive course cards
- Teacher profiles
- Contact form
- All animations and effects working!

---

## 💡 Tips

- **Best Experience**: Use Method 2 (local server) for full functionality
- **Quick Preview**: Use Method 1 (double-click) for instant viewing
- **Port Already in Use?**: Change `8000` to another port like `3000` or `8080`

Enjoy exploring the Synapse Teaching Center portfolio! 🎉
