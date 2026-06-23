# Bram — Desktop Portfolio

A personal showcase styled as a macOS desktop (inspired by [viv-li.com](https://viv-li.com)).
Vanilla HTML/CSS/JS — no build step. Content is edited through a **web dashboard**
(Decap CMS) so a non-technical person never has to touch code.

```
index.html        the desktop
styles.css        all styling
script.js         the engine (window manager) + fallback content
content.json      ← all editable content lives here (the CMS writes this)
admin/            the CMS dashboard (login + forms)
assets/uploads/   uploaded images land here
```

---

## ✏️ For the editor (non-technical) — how to change the site

1. Go to **`https://YOUR-SITE.netlify.app/admin/`**
2. Log in (you'll get an email invite the first time).
3. Open **Website → Desktop Content**. You'll see simple forms:
   - **Profile & Contact** — name, Instagram, email, profile photo
   - **Read Me** — the letter; add/remove paragraphs
   - **Photos** — upload images; they scatter into the collage automatically
   - **CV** — work, education, skills
   - **Projects (desktop folders)** — **click “Add Project”** to add a new folder
     to the desktop. Fill in the name, title, synopsis, a background image **or a
     background video** (upload an `.mp4` to “Background video” — it autoplays muted
     on loop behind the text, like the reference site).
4. Click **Publish → Publish now**. The site updates in ~1 minute. ✅

> **Add a folder** = add a Project. **Add a photo** = add a Photo. No code, ever.

### Arrange the desktop (drag & save)
Visitors can drag icons around for fun (resets on reload). To set the **default
arrangement everyone sees**, use the **Layout Editor**:

1. Open `/admin`, then click **Arrange layout** in the sidebar (path: `/admin/arrange/`).
2. Drag the folders/files where you want them.
3. Click **💾 Save layout**. Done — visitors now open the site with that arrangement.

Positions are saved as percentages in `layout.json` (a separate file, so editing
content in the CMS never disturbs your layout). **Shuffle** randomizes; **Reset**
reverts to the last save. New projects you add later start scattered until you
re-arrange and save again.

---

## 🚀 One-time setup (technical — do this once)

### 1. Put the code on GitHub
Create a repo and push this folder to it (default branch `main`).

### 2. Deploy on Netlify
- [app.netlify.com](https://app.netlify.com) → **Add new site → Import from GitHub** →
  pick the repo. No build command, publish directory = `/` (root). Deploy.

### 3. Turn on the login (Netlify Identity + Git Gateway)
In the Netlify site dashboard:
- **Integrations / Identity → Enable Identity**
- Identity → **Registration: Invite only** (so only your friend can log in)
- Identity → **Services → Git Gateway → Enable**
- Identity → **Invite users** → enter your friend's email

Your friend clicks the email link, sets a password, and can now edit at `/admin/`.

> If your repo's default branch is `master`, change `branch: main` → `master` in
> [`admin/config.yml`](admin/config.yml).

---

## 🖥️ Run / test locally

Plain preview (CMS login won't work locally, content still loads):
```bash
python3 -m http.server 4321
# open http://localhost:4321
```

Test the CMS forms **and the Layout Editor** locally (needs Node):
```bash
npx decap-server          # terminal 1 — local backend (writes content.json / layout.json)
python3 -m http.server 4321   # terminal 2
# CMS:           http://localhost:4321/admin/
# Layout Editor: http://localhost:4321/admin/arrange/  (or click "Arrange layout" in the sidebar; no login locally)
```
Locally the Layout Editor saves straight to `layout.json` via decap-server.
On the deployed site it commits via Netlify Git Gateway (hence the login).

---

## Notes for developers
- Content shape is defined once in [`content.json`](content.json) and mirrored as a
  fallback (`DEFAULT_DATA`) in [`script.js`](script.js) — if `content.json` fails to
  load (e.g. opening the file directly), the fallback renders so the page never breaks.
- The CMS form fields are defined in [`admin/config.yml`](admin/config.yml). Add a field
  there + read it in `script.js` to expose new editable content.
- Images left empty fall back to generated colored placeholders (`pic()` / `ph()`).
- Icon positions are randomized each load (`scatterPositions()` in `script.js`),
  unless a saved layout exists in `layout.json`.
- Projects support `bg` (image) and `bgVideo` (.mp4). A video overrides the image
  and uses it as its poster; rendered by `openProject()` in `script.js`.
- `styles.css` / `script.js` are loaded with a `?v=N` query for cache-busting —
  bump `N` in `index.html` and `admin/arrange/index.html` after editing them.

## Features
- Live menu-bar clock, Instagram + email links
- Double-click icons to open windows (single-tap on mobile)
- Draggable windows, traffic-light close/minimize/maximize, focus z-order
- TextEdit "Read Me", draggable auto-scattered photo collage, full-bleed project pages
- Responsive: scattered desktop on wide screens, icon grid on mobile
