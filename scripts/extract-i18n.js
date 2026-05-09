// Extract the i18n object from minecraft/docs/index.html (site source of truth)
// and emit:
//   - app/assets/lang/site/<locale>.json   — raw JSON per locale
//   - app/assets/lang/site/<locale>.toml   — TOML under [site.*] sections
//
// These are reference translations for the future landing.ejs rewrite in Phase 4.
// Existing en_US.toml / _custom.toml (Helios) are left untouched.
//
// Usage:
//   node scripts/extract-i18n.js [path-to-index.html]
// Default path assumes the site lives at ../minecraft-project/minecraft/docs/index.html.

const fs = require('fs');
const path = require('path');

const DEFAULT_SITE_PATH = path.resolve(
  __dirname, '..', '..', 'minecraft-project', 'minecraft-project', 'minecraft', 'docs', 'index.html'
);

const SITE_PATH = process.argv[2] || DEFAULT_SITE_PATH;
const OUT_DIR   = path.resolve(__dirname, '..', 'app', 'assets', 'lang', 'site');

// Map site locale codes → Helios-style codes.
const LOCALE_MAP = {
  ru: 'ru_RU',
  ua: 'uk_UA',
  en: 'en_US',
  de: 'de_DE',
  pl: 'pl_PL'
};

if (!fs.existsSync(SITE_PATH)) {
  console.error(`Site HTML not found: ${SITE_PATH}`);
  process.exit(1);
}

const html = fs.readFileSync(SITE_PATH, 'utf8');

// Locate `const i18n = { ... };` using brace-matching (regex fails on nested quotes).
const START = html.indexOf('const i18n');
if (START < 0) {
  console.error('`const i18n` not found in site HTML.');
  process.exit(1);
}
const BRACE_START = html.indexOf('{', START);
let depth = 0, i = BRACE_START;
let inStr = null;       // holds quote char when inside a string literal
for (; i < html.length; i++) {
  const c = html[i];
  if (inStr) {
    if (c === '\\') { i++; continue; }
    if (c === inStr) inStr = null;
    continue;
  }
  if (c === '"' || c === "'" || c === '`') { inStr = c; continue; }
  if (c === '{') depth++;
  else if (c === '}') { depth--; if (depth === 0) { i++; break; } }
}
const objectSrc = html.slice(BRACE_START, i);

// Evaluate it safely — no free variables, no function calls, just an object literal.
let i18n;
try {
  i18n = new Function(`return ${objectSrc};`)();
} catch (e) {
  console.error('Failed to parse i18n object:', e.message);
  process.exit(1);
}

fs.mkdirSync(OUT_DIR, { recursive: true });

function tomlEscape(str) {
  // Basic TOML string escaping. Preserves HTML (e.g. <span>), just escapes " and \
  return String(str).replace(/\\/g, '\\\\').replace(/"/g, '\\"').replace(/\n/g, '\\n');
}

for (const [siteCode, strings] of Object.entries(i18n)) {
  const helios = LOCALE_MAP[siteCode] || siteCode;

  fs.writeFileSync(
    path.join(OUT_DIR, `${helios}.json`),
    JSON.stringify(strings, null, 2) + '\n'
  );

  const tomlLines = [
    `# Auto-generated from minecraft/docs/index.html — DO NOT EDIT BY HAND.`,
    `# Source locale: "${siteCode}" → Helios code: "${helios}"`,
    `# Regenerate: node scripts/extract-i18n.js`,
    ``,
    `[site]`
  ];
  for (const [k, v] of Object.entries(strings)) {
    tomlLines.push(`${k} = "${tomlEscape(v)}"`);
  }
  fs.writeFileSync(path.join(OUT_DIR, `${helios}.toml`), tomlLines.join('\n') + '\n');

  console.log(`  ${siteCode} → ${helios}  (${Object.keys(strings).length} keys)`);
}

console.log(`\nWrote ${Object.keys(i18n).length} locales to ${OUT_DIR}`);
