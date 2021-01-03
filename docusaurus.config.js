module.exports = {
  title: 'VSpaceCode',
  tagline: 'Spacemacs like keybindings for Visual Studio Code',
  url: 'https://vspacecode.github.io/',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  favicon: 'img/favicon.ico',
  organizationName: 'VSpaceCode', // Usually your GitHub org/user name.
  projectName: 'vspacecode.github.io', // Usually your repo name.
  themeConfig: {
    colorMode: {
      respectPrefersColorScheme: true,
    },
    navbar: {
      title: 'VSpaceCode',
      logo: {
        alt: 'VSpaceCode Logo',
        src: 'img/logo.png',
      },
      items: [
        {
          to: 'docs/',
          activeBasePath: 'docs',
          label: 'Docs',
          position: 'left',
        },
        { to: 'blog', label: 'Blog', position: 'left' },
        {
          href: 'https://github.com/VSpaceCode/VSpaceCode',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Marketplace',
          items: [
            {
              label: 'VspaceCode',
              href: 'https://marketplace.visualstudio.com/items?itemName=VSpaceCode.vspacecode',
            },
            {
              label: 'WhichKey',
              href: 'https://marketplace.visualstudio.com/items?itemName=VSpaceCode.whichkey',
            },
          ],
        },
        {
          title: 'GitHub',
          items: [
            {
              label: 'VspaceCode',
              href: 'https://github.com/VSpaceCode/VSpaceCode',
            },
            {
              label: 'WhichKey',
              href: 'https://github.com/VSpaceCode/vscode-which-key',
            },
          ],
        }
      ],
      copyright: `Copyright © ${new Date().getFullYear()} VSpaceCode. Built with Docusaurus.`,
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          editUrl:
            'https://github.com/VSpaceCode/vspacecode.github.io/edit/master/',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          editUrl:
            'https://github.com/VSpaceCode/vspacecode.github.io/edit/master/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
  plugins: [
    [
      require.resolve("@easyops-cn/docusaurus-search-local"),
      {
        hashed: true,
      },
    ],
  ]
};
