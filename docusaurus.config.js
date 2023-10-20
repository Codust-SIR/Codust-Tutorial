// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion
const { inject } = require("@vercel/analytics");

inject();
const lightCodeTheme = require("prism-react-renderer/themes/github");
const darkCodeTheme = require("prism-react-renderer/themes/dracula");

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "Codedust",
  tagline: "Explore Modern Web Development in Depth",
  favicon: "img/codedust.png",

  // Set the production url of your site here
  url: "https://codust-tutorial.vercel.app/",
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: "/",

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: "Codedust", // Usually your GitHub org/user name.
  projectName: "Codedust Tutorial", // Usually your repo name.

  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",
  plugins: [
    [
      "@docusaurus/plugin-pwa",
      {
        debug: true,
        offlineModeActivationStrategies: [
          "appInstalled",
          "standalone",
          "queryString",
        ],
        pwaHead: [
          {
            tagName: "link",
            rel: "icon",
            href: "/img/docusaurus.png",
          },
          {
            tagName: "link",
            rel: "manifest",
            href: "/manifest.json", // your PWA manifest
          },
          {
            tagName: "meta",
            name: "theme-color",
            content: "rgb(37, 194, 160)",
          },
        ],
      },
    ],
  ],
  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".

  presets: [
    [
      "classic",
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve("./sidebars.js"),
        },
        blog: {
          showReadingTime: true,
        },
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
      image: "img/docusaurus-social-card.jpg",
      navbar: {
        title: "Codedust ",
        logo: {
          alt: "Codedust Logo",
          src: "img/codedust.png",
        },
        items: [
          {
            type: "docSidebar",
            sidebarId: "tutorialSidebar",
            position: "left",
            label: "Courses",
          },
          { to: "/blog", label: "Blog", position: "left" },
          { to: "/assignment", label: "Assignment", position: "left" },

          {
            type: "localeDropdown",
          },
          {
            href: "https://github.com/Codust-SIR",
            label: "GitHub",
            position: "right",
          },
        ],
      },
      footer: {
        style: "dark",
        links: [
          {
            items: [
              {
                html: `
                <a
          style="
            display: flex;
            flex: 0.4;
            gap: 10px;
            color: white;
          "
          component={Link}
          href="https://sirafrica.org"
          underline="none"
        >
          <img
            height={100}
            width={100}
            alt="SIR"
            src="img/sirafrica_logo_bw.png"
            style="
              height: 45px;
              width: 45px;
            "
          />
          <div>
            <h3
              variant="h5"
              component="h5"
              style="
                flex-grow: 1;
                color: white;
                font-weight: 800px;
                letter-spacing: 3;
              "
            >
              SIR
            </h3>
            <p
              variant="body2"
              component="p"
              style={{
                flexGrow: 1,
                letter-spacing: 1,
                color: white,
              }}
            >
              Learn, Earn, Innovate
            </p>
          </div>
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
        </a>
                `,
              },
            ],
          },
          {
            title: "Docs",
            items: [
              {
                label: "Tutorial",
                to: "/docs/intro",
              },
            ],
          },
          {
            title: "Community",
            items: [
              {
                label: "Twitter",
                href: "https://twitter.com/SolidarityInit1",
              },
              {
                label: "WhatsApp",
                href: "https://chat.whatsapp.com/F4kTZOgxoiM2AD475drWqS",
              },
            ],
          },
          {
            title: "More",
            items: [
              {
                label: "Blog",
                to: "/blog",
              },
              {
                label: "GitHub",
                href: "https://github.com/Codust-SIR",
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Solidarity Initiative for Refugees`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
      algolia: {
        // The application ID provided by Algolia
        appId: "X7F7HPFI1C",

        // Public API key: it is safe to commit it
        apiKey: "b7f66f7ef62879921d9bde3b2e516160",

        indexName: "codust-tutorial",
      },
      docsSidebars: {
        // Display the "Basic" sidebar when on a page in the "Basic" section
        basic: [
          {
            type: "autogenerated",
            dirName: "./docs/basic-ict",
          },
        ],
        // Display the "Advanced" sidebar when on a page in the "Advanced" section
        advanced: [
          {
            type: "autogenerated",
            dirName: "./docs/advanced-ict",
          },
        ],
      },
    }),
};

module.exports = config;
