# GitHub Pages Not Updating? Fix It Here

If you pushed changes but the hosted website didn't update, follow these checks **in order**.

---

## 1. Verify GitHub Pages is enabled and correct

1. Open your repo on GitHub: `https://github.com/YOUR_USERNAME/YOUR_REPO_NAME`
2. Click **Settings** (tab)
3. In the left sidebar, click **Pages**
4. Under **"Build and deployment"**:
   - **Source** must be: **"Deploy from a branch"** (not "GitHub Actions" unless you use a workflow)
   - **Branch** must be: **main** (or **master** — must match the branch you push to)
   - **Folder** must be: **/ (root)**
5. Click **Save** if you changed anything.

**Very common mistake:** Pushing to `main` but Pages is set to `master` (or the other way around). They must match.

---

## 2. Confirm you pushed to the same branch

In your project folder, run:

```bash
git branch
```

You should see something like `* main`. The `*` is your current branch.

Then run:

```bash
git status
```

It should say "Your branch is up to date with 'origin/main'" (or origin/master).

**If you see "master" but Pages uses "main":** Either:
- Push to main: `git push origin main`, or
- Change Pages in Settings → Pages to use the **master** branch and Save.

---

## 3. Wait for the deployment (1–5 minutes)

After each push, GitHub rebuilds the site. This can take **1–5 minutes**.

- Wait 2–3 minutes, then hard refresh: **Ctrl+Shift+R** (Windows) or **Cmd+Shift+R** (Mac).
- Or try in an **Incognito/Private** window.

---

## 4. Check the Actions tab for errors

1. In your repo, click the **Actions** tab.
2. You should see workflow runs (e.g. "pages build and deployment").
3. Open the latest run and check if it **succeeded** (green) or **failed** (red).
4. If it failed, open the failed job and read the error message.

If **Source** in Settings → Pages is **"Deploy from a branch"**, there may be no workflow run; the deployment is automatic. If you see a run, ensure it’s green.

---

## 5. Clear cache and hard refresh

Your browser or CDN might be showing an old version:

- **Hard refresh:** Ctrl+Shift+R (Windows) or Cmd+Shift+R (Mac).
- Or open the site in **Incognito/Private** mode.
- Or add a query string: `https://yourusername.github.io/your-repo/?v=2`

---

## 6. Confirm the correct URL

- **Project repo** (e.g. repo name `portfolio` or `synapse-portfolio`):  
  `https://YOUR_USERNAME.github.io/REPO_NAME/`  
  Example: `https://johndoe.github.io/portfolio/`

- **User/org site** (repo name must be `USERNAME.github.io`):  
  `https://YOUR_USERNAME.github.io/`  
  Example: `https://johndoe.github.io/`

Open the exact URL in a new tab; avoid old bookmarks.

---

## 7. Ensure all files were pushed

Run locally:

```bash
git status
```

- If files show as "modified" or "untracked", add and push them:

```bash
git add .
git commit -m "Update site content"
git push origin main
```

(Use `master` if that’s your branch.)

---

## 8. Check repository visibility (private vs public)

- **Public repo:** GitHub Pages works for free.
- **Private repo:** On free accounts, GitHub Pages is **disabled** for private repos. Either:
  - Make the repo **Public** (Settings → General → Danger Zone → Change visibility), or
  - Use a paid GitHub plan if you need Pages on a private repo.

---

## Quick checklist

- [ ] Settings → Pages: Source = "Deploy from a branch"
- [ ] Branch in Pages = same branch you push to (e.g. **main**)
- [ ] Folder = **/ (root)**
- [ ] Waited 2–3 minutes after push
- [ ] Hard refresh (Ctrl+Shift+R) or Incognito
- [ ] Opened correct URL: `https://USERNAME.github.io/REPO_NAME/`
- [ ] All changes committed and pushed (`git status` clean, `git push` done)
- [ ] Repo is Public if you’re on a free account

---

## Still not updating?

1. In the repo **Settings → Pages**, temporarily set **Source** to **None**, Save, then set it back to **Deploy from a branch**, choose **main** (or **master**), **/ (root)**, and Save again.
2. Make a small change (e.g. add a comment in `index.html`), commit, and push again. Wait 3–5 minutes and hard refresh.

If you tell me:
- Your GitHub username and repo name,
- The branch you push to (`main` or `master`),
- And what you see under Settings → Pages (Source, Branch, Folder),

I can point to the exact setting that’s wrong.
