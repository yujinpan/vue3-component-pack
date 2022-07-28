import * as shiki from 'shiki/dist/index.js';

/**
 * fork from node_modules/vitepress/dist/node-cjs/serve-f2029a83.cjs
 */
export async function codeToHighlight(
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
