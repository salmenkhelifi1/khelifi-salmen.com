import fs from 'fs';

const POSTHOG_PROJECT_TOKEN = process.env.POSTHOG_PROJECT_TOKEN || '';

const htmlFiles = [
  'index.html',
  'project-chaktech.html',
  'project-luxe-spa.html',
  'project-mobile.html',
  'project-n8n.html',
  'project-rentiora.html',
  'project-stitch-collection.html',
  'project-stitch-mobile.html',
];

let replaced = 0;
for (const file of htmlFiles) {
  if (!fs.existsSync(file)) continue;
  let content = fs.readFileSync(file, 'utf8');
  const updated = content.replaceAll('{{POSTHOG_PROJECT_TOKEN}}', POSTHOG_PROJECT_TOKEN);
  if (updated !== content) {
    fs.writeFileSync(file, updated);
    replaced++;
  }
}
console.log(`PostHog: injected env vars into ${replaced} HTML file(s).`);
