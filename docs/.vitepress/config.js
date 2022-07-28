const path = require('path');

const nav = [
  { text: 'Guide', link: '/guide/' },
  { text: 'API', link: '/api/' },
  { text: 'Components', link: '/components/' },
];

const sidebar = {
  '/guide/': [
    {
      text: 'Guide',
      items: [
        {
          text: 'getting-started',
          link: '/guide/getting-started',
        },
        {
          text: 'feature-1',
          link: '/guide/feature-1',
        },
      ],
    },
  ],
  '/api/': [
    {
      text: 'api',
      items: [
        {
          text: 'api-1',
          link: '/api/api-1',
        },
      ],
    },
  ],
  '/components/': [
    {
      text: 'Components',
      items: [
        {
          text: 'component-1',
          link: '/components/component-1',
        },
      ],
    },
  ],
};

module.exports = {
  base: '/your-component/dist/',
  title: 'your-component',
  description: 'your-component description',
  dest: path.resolve(__dirname, '../../dist'),

  themeConfig: {
    logo: '/logo.svg',

    repo: 'your-component',
    lastUpdatedText: 'Updated Date',

    sidebar,
    nav,
  },
};
