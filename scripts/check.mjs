import {readFileSync, existsSync, readdirSync, lstatSync} from 'node:fs';
import {resolve, dirname} from 'node:path';
import assert from 'node:assert/strict';
import {createHash} from 'node:crypto';
const root = resolve(import.meta.dirname, '..');
const pages = ['index.html', 'features.html', 'guide.html', 'download.html', 'privacy.html'];
let assertions = 0;
function check(condition, message) {assert(condition, message); assertions++;}
for (const page of pages) {
  const html = readFileSync(resolve(root, page), 'utf8');
  check(html.includes('lang="zh-CN"'), `${page}: language`);
  check(html.includes('name="viewport"'), `${page}: viewport`);
  check((html.match(/<h1[ >]/g) || []).length === 1, `${page}: one H1`);
  check(html.includes('© 2026 Nankong'), `${page}: copyright`);
  const ids = [...html.matchAll(/\bid="([^"]+)"/g)].map(x=>x[1]);
  check(new Set(ids).size === ids.length, `${page}: duplicate IDs`);
  check(!/https?:\/\/[^"\s]+\.(js|css)["?]/.test(html), `${page}: no remote script/style`);
  check(!/\/Users\/|PRIVATE KEY|github_pat_|ghp_|sk-[A-Za-z0-9]{20}/.test(html), `${page}: sensitive pattern`);
  for(const match of html.matchAll(/(?:href|src|poster)="([^"]+)"/g)) {
    const url = match[1];
    check(!url.startsWith('/'), `${page}: project-path safe ${url}`);
    if (/^https?:/.test(url)) { check(url.startsWith('https://'), `${page}: HTTPS`); continue; }
    const [path, fragment] = url.split('#');
    const target = resolve(root, path === './' ? 'index.html' : (path || page));
    check(existsSync(target), `${page}: missing ${url}`);
    if(fragment) check(readFileSync(target,'utf8').includes(`id="${fragment}"`), `${page}: missing fragment ${url}`);
  }
}
const homepage = readFileSync(resolve(root, 'index.html'), 'utf8');
check((homepage.match(/<video /g)||[]).length === 2, 'two real operation videos');
check(!/<video[^>]*autoplay/.test(homepage), 'no automatic playback');
check(homepage.includes('build15') && homepage.includes('不是4K'), 'history / sample boundaries visible');
check(homepage.includes('好电影，一搜就有。') && homepage.includes('精彩，一键分享。'), 'campaign product narrative');
check(homepage.indexOf('id="features"') < homepage.indexOf('id="gif-4k"'), 'whole product before GIF detail');
for (const image of homepage.matchAll(/<img\b([^>]+)>/g)) check(/alt="[^"]*"/.test(image[1]), 'image has alternative text');
const manifest = JSON.parse(readFileSync(resolve(root,'media-manifest.json'),'utf8'));
check(manifest.files.length === 8, 'eight allowlisted real media assets');
check(manifest.websiteVersion === JSON.parse(readFileSync(resolve(root,'release.json'),'utf8')).website.version, 'media and site version match');
for (const asset of manifest.files) {
  const data = readFileSync(resolve(root,asset.path));
  check(data.length === asset.bytes, asset.path + ': byte size');
  check(createHash('sha256').update(data).digest('hex') === asset.sha256, asset.path + ': digest');
}
const release = JSON.parse(readFileSync(resolve(root,'release.json'),'utf8'));
const download = readFileSync(resolve(root,'download.html'),'utf8');
check(download.includes(release.software.sha256), 'download hash matches manifest');
check(download.includes(release.software.download), 'download URL matches manifest');
for(const file of ['assets/app-icon.png','assets/cosmic.jpg']) check(lstatSync(resolve(root,file)).isFile(), `asset ${file}`);
for(const entry of readdirSync(root)) check(!lstatSync(resolve(root,entry)).isSymbolicLink(), `no symlink ${entry}`);
console.log(`PASS ${assertions} static assertions across ${pages.length} pages`);
