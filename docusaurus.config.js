module.exports = {
  title: 'NavVis',
  tagline: 'NavVis Webhelp',
  url: 'https://your-docusaurus-test-site.com',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'NavVis', // Usually your GitHub org/user name.
  projectName: 'navvis-docusaurus-template', // Usually your repo name.
  themeConfig: {
    navbar: {
      title: 'NavVis',
      logo: {
        alt: 'My Site Logo',
        src: 'img/logo.svg',
      },
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Docs',
          items: [
            {
              label: 'Style Guide',
              to: 'docs/',
            },
            {
              label: 'Second Doc',
              to: 'docs/doc2/',
            },
          ],
        },
        {
          title: 'Community',
          items: [
            {
              label: 'Stack Overflow',
              href: 'https://stackoverflow.com/questions/tagged/docusaurus',
            },
            {
              label: 'Discord',
              href: 'https://discordapp.com/invite/docusaurus',
            },
            {
              label: 'Twitter',
              href: 'https://twitter.com/docusaurus',
            },
          ],
        },
        {
          title: 'More',
          items: [
            {
              label: 'Blog',
              to: 'blog',
            },
            {
              label: 'GitHub',
              href: 'https://github.com/facebook/docusaurus',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} NavVis, Inc.`,
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        blog: false,
        pages: false,
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          path: "./docs",
          routeBasePath: "/",
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
};
