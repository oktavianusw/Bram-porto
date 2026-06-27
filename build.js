/* ============================================================
   Build step: compile the CMS source files into content.json
   ------------------------------------------------------------
   Sources (edited via the CMS):
     content/site.json          -> profile, readme, photos, cv
     content/projects/<slug>.json -> one file per project (folder collection)
   Output (read by the static site at runtime):
     content.json               -> { profile, readme, photos, cv, projects:[...] }

   Runs on every Netlify deploy (see netlify.toml). Run locally with:
     node build.js     (or: npm run build)
   ============================================================ */
const fs = require('fs');
const path = require('path');

const ROOT = __dirname;
const sitePath = path.join(ROOT, 'content', 'site.json');
const projectsDir = path.join(ROOT, 'content', 'projects');

const site = JSON.parse(fs.readFileSync(sitePath, 'utf8'));

let projects = [];
if (fs.existsSync(projectsDir)) {
  projects = fs.readdirSync(projectsDir)
    .filter((f) => f.endsWith('.json'))
    .map((f) => {
      const data = JSON.parse(fs.readFileSync(path.join(projectsDir, f), 'utf8'));
      data.id = f.replace(/\.json$/, '');     // stable id = filename
      return data;
    })
    .sort((a, b) =>
      (a.order ?? 0) - (b.order ?? 0) ||
      String(a.label || '').localeCompare(String(b.label || '')));
}

const out = {
  profile: site.profile,
  readme: site.readme,
  photos: site.photos,
  cv: site.cv,
  projects,
};

fs.writeFileSync(path.join(ROOT, 'content.json'), JSON.stringify(out, null, 2) + '\n');
console.log(`Built content.json — ${projects.length} projects.`);
