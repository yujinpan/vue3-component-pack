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
  appearance: true,
  base: '/your-component/',
  title: 'your-component',
  description: 'your-component description',

  themeConfig: {
    logo: '/logo.svg',

    sidebar,
    nav,

    socialLinks: [
      {
        icon: 'github',
        link: 'https://github.com/your-name/your-component',
      },
    ],

    lastUpdatedText: 'Updated Date',

    footer: {
      message: 'Released under the MIT License.',
      copyright: 'Copyright © 2022-2022 your-name',
    },
  },
};
