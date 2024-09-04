// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config



import {themes as prismThemes} from 'prism-react-renderer';

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'My Site',
  tagline: 'Thanks for Docusaurus',
  favicon: 'img/favicon.ico',

  // Set the production url of your site here
  url: 'https://my-website-eight-lilac.vercel.app/',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'facebook', // Usually your GitHub org/user name.
  projectName: 'docusaurus', // Usually your repo name.

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'zh',
    locales: ['zh'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: './sidebars.js',
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
        
        },
        blog: {
          path: './blog',
          routeBasePath: 'blog',
          postsPerPage: 'ALL', // 显示所有文章
          blogSidebarTitle: 'All Blog Posts',
          blogSidebarCount: 'ALL', // 在侧边栏中显示所有文章
          showReadingTime: true,
          onUntruncatedBlogPosts: 'ignore',

          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
      image: 'img/docusaurus-social-card.jpg',
      navbar: {
        title: 'My Site',
        logo: {
          alt: 'My Site Logo',
          src: 'img/logo.svg',
        },
        items: [
          {
            type: 'docSidebar',
            sidebarId: 'tutorialSidebar',
            position: 'left',
            label: 'Tutorial',
          },
          {to: '/blog', label: 'Blog', position: 'left'},
         
        ],
      },

      algolia: {
        // Algolia 提供的应用 ID
        appId: 'CH4PQ521NJ',
  
        //  公开 API 密钥：提交它没有危险
        apiKey: 'f91dbe548d6442146bcd8283c6f852df',
  
        indexName: 'my-web-eight-lilac',

        start_urls: "https://my-website-eight-lilac.vercel.app/",

        sitemap_urls: "https://my-website-eight-lilac.vercel.app/sitemap.xml",
        
  
        // 可选：见下文
        contextualSearch: true,
  
        // 可选：声明哪些域名需要用 window.location 型的导航而不是 history.push。 适用于 Algolia 配置会爬取多个文档站点，而我们想要用 window.location.href 在它们之间跳转时。
        externalUrlRegex: 'external\\.com|domain\\.com',
  
        // 可选：替换 Algolia 的部分网址。 在使用相同搜索索引支持多个不同 baseUrl 的部署时非常有用。 你可以在 “from” 中使用正则表达式或字符串。 比方说，localhost:3000 和 myCompany.com/docs
       
  
        // 可选：Algolia 搜索参数
        searchParameters: {},
  
        // 可选：默认启用的搜索页路径（传递 `false` 以禁用它）
        searchPagePath: 'search',
  
        // 可选：Docsearch 的 insights 功能是否启用（默认为 `false`）
        insights: false,
  
        //... 其他 Algolia 参数
      },

      colorMode:{
        defaultMode:"dark",
      },

      footer: {
        style: 'dark',
        links: [
          {
            title: '文章',
            items: [
              {
                label: 'Notion',
                href: 'https://www.notion.so/73364864d93a4d2ead0d1b26883c0561',
              },

              {
                label: 'Tutorial',
                to: '/docs/intro',
              },
            ],
          },

          {
            title: '外援',
            items: [

              {
                label: '腾讯文档',
                href: 'https://docs.qq.com/home',
              },
              
              {
                label: 'GitHub',
                href: 'https://github.com',
              },
              
              
            ],
          },
          {
            title: '博客',
            items: [
              {
                label: '备忘录',
                href: 'https://www.icloud.com.cn/',
              },

              {
                label: 'Blog',
                to: '/blog',
              },
              
              
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} My Project, Inc. Built with Docusaurus.`,
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
    }),
};

export default config;

