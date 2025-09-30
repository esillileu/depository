import { QuartzConfig } from "./quartz/cfg"
import * as Plugin from "./quartz/plugins"

/**
 * Quartz 4 Configuration
 *
 * See https://quartz.jzhao.xyz/configuration for more information.
 */
const config: QuartzConfig = {
  configuration: {
    pageTitle: "Depository",
    pageTitleSuffix: "esillileu",
    enableSPA: true,
    enablePopovers: true,
    analytics: {
      provider: "plausible",
    },
    locale: "en-US",
    baseUrl: "quartz.jzhao.xyz",
    ignorePatterns: ["private", "templates", ".obsidian"],
    defaultDateType: "modified",
    theme: {
      fontOrigin: "local",
      cdnCaching: true,
      typography: {
        header: "D2Coding",
        body: "D2Coding",
        code: "D2Coding",
      },
      colors: {
        lightMode: {
          light: "#f0f8fa", // Very light cyan-white
          lightgray: "#dce9ed",
          gray: "#a0a8ab",
          darkgray: "#2f3538",
          dark: "#222222",
          secondary: "#39C5BB", // Miku Teal
          tertiary: "#FF7BAC", // Miku Pink
          highlight: "rgba(57, 197, 187, 0.15)",
          textHighlight: "#b3aa0288",
        },
        darkMode: {
          light: "#182025", // Dark blue-grey
          lightgray: "#2e3d46",
          gray: "#8c9bab",
          darkgray: "#d8e0e6",
          dark: "#ffffff",
          secondary: "#39C5BB", // Miku Teal
          tertiary: "#FF7BAC", // Miku Pink
          highlight: "rgba(57, 197, 187, 0.15)",
          textHighlight: "#b3aa0288",
        },
      },
    },
  },
  plugins: {
    transformers: [
      Plugin.FrontMatter(),
      Plugin.CreatedModifiedDate({
        priority: ["frontmatter", "git", "filesystem"],
      }),
      Plugin.SyntaxHighlighting({
        theme: {
          light: "github-light",
          dark: "github-dark",
        },
        keepBackground: false,
      }),
      Plugin.ObsidianFlavoredMarkdown({ enableInHtmlEmbed: false }),
      Plugin.GitHubFlavoredMarkdown(),
      Plugin.TableOfContents(),
      Plugin.CrawlLinks({ markdownLinkResolution: "shortest" }),
      Plugin.Description(),
      Plugin.Latex({ renderEngine: "katex" }),
    ],
    filters: [Plugin.RemoveDrafts()],
    emitters: [
      Plugin.AliasRedirects(),
      Plugin.ComponentResources(),
      Plugin.ContentPage(),
      Plugin.FolderPage(),
      Plugin.TagPage(),
      Plugin.ContentIndex({
        enableSiteMap: true,
        enableRSS: true,
      }),
      Plugin.Assets(),
      Plugin.Static(),
      Plugin.Favicon(),
      Plugin.NotFoundPage(),
      // Comment out CustomOgImages to speed up build time
      Plugin.CustomOgImages(),
    ],
  },
}

export default config
