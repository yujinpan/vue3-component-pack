const path = require('path');
const shiki = require('shiki');
const fs = require('fs');
const glob = require('glob');
const prettier = require('prettier');

async function generateJSON() {
  const markdowns = await getComponentsMarkdowns();
  const json = prettier.format(JSON.stringify(markdowns), { parser: 'json' });
  fs.writeFileSync(path.resolve(__dirname, './raws.json'), json);
}

async function getComponentsMarkdowns() {
  const modules = glob.sync(path.resolve(__dirname, '../components/*.vue'));
  const raws = {};
  await Promise.all(
    modules.map(async (id) => {
      raws[getFileName(id)] = await codeToHighlight(
        fs.readFileSync(id).toString(),
        'vue'
      );
    })
  );
  return raws;
}

/**
 * fork from node_modules/vitepress/dist/node-cjs/serve-f2029a83.cjs
 */
async function codeToHighlight(
  str,
  lang = 'text',
  theme = 'material-palenight'
) {
  const highlighter = await shiki.getHighlighter({
    themes: [theme],
    langs: ['vue'],
  });
  const preRE = /^<pre.*?>/;

  const html = highlighter
    .codeToHtml(str, { lang, theme })
    .replace(preRE, '<pre>');

  return `<div class="language-${lang}"><span class="copy"></span>${html}</div>`;
}

function getFileName(id) {
  return path.basename(id).replace(path.extname(id), '');
}

generateJSON();
