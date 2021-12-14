/** @type {import('@docusaurus/types').DocusaurusConfig} */

module.exports = {
  title: "Piracy",
  tagline: "It's illegal cuz they can't tax you!",
  url: "https://piracy.now.sh",
  baseUrl: "/",
  onBrokenLinks: "warn",
  onBrokenMarkdownLinks: "warn",
  favicon: "img/favicon.ico",
  themeConfig: {
    image: "img/ogimage.png",
    navbar: {
      title: "Piracy",
      logo: {
        alt: "",
        src: "img/logo.svg",
        srcDark: "img/darklogo.svg",
      },
      items: [
        { to: "/blog", label: "Blog", position: "left" },
        {
          href: "https://gitlab.com/piracy/piracy",
          label: "GitLab",
          position: "right",
        },
      ],
    },
    algolia: {
      appId: 'WYRH3S2A0X',
      apiKey: "0a6a45016a48150080777cd972b18420",
      indexName: "awesome_piracy",
    },
    prism: {
      theme: require("prism-react-renderer/themes/dracula"),
    },
    googleAnalytics: {
      trackingID: "UA-131672698-5",
      anonymizeIP: true,
    },
    gtag: {
      trackingID: "UA-131672698-5",
      anonymizeIP: true,
    },
    announcementBar: {
      id: "star",
      content:
        '<b><a target="_blank" href="https://gitlab.com/piracy/piracy#:~:text=star">PLEASE LEAVE A STAR ON GITLAB</a></b>',
      backgroundColor: "var(--ifm-background-surface-color)",
      textColor: "var(--ifm-color-primary)",
    },
  },
  presets: [
    [
      "@docusaurus/preset-classic",
      {
        docs: {
          routeBasePath: "/",
          sidebarPath: require.resolve("./sidebars.js"),
          editUrl: "https://gitlab.com/piracy/piracy/-/edit/master/docs/",
        },
        blog: {
          showReadingTime: true,
          feedOptions: {
            type: "all",
            copyright: "It's free real estate! (CC0)",
          },
          editUrl: "https://gitlab.com/piracy/piracy/-/edit/master/blog/",
        },
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
      },
    ],
  ],
};
