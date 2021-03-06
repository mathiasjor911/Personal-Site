/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

module.exports = {
  /* Your site config here */
  siteMetadata: {
    title: `Mathias Jørgensen`,
    description: `Personal site belonging to Mathias Jørgensen, who is studying a Bachelor in Web Development.`,
    author: `Mathias Jørgensen`,
  },
  plugins: [
    `gatsby-plugin-sass`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: "gatsby-plugin-robots-txt",
      options: {
        host: "https://www.example.com",
        sitemap: "https://www.example.com/sitemap.xml",
        policy: [
          {
            userAgent: "*",
            allow: "/",
          },
        ],
      },
    },
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [
          `mukta\:300,400,500,600,800`, // you can also specify font weights and styles
        ],
        display: "swap",
      },
    },
    {
      resolve: `gatsby-source-spotify`,
      options: {
        clientId: `805392f8136c4323a0d3dc408487f1c4`,
        clientSecret: `0c477f612fa741ccb2b0901c6ef4ca91`,
        refreshToken: `AQBGaIfyWm81LzADPfrICHUoRjtR02r7HPPAZsnmVnGp21eM6YSkBnVC0AWwyZJuRujIQ6Buih5_R8pv8wNtmx7zxlDfPqawvHRzRyRZf03C7xZuN0cjlH9Vi3xLHryeUsE`,

        fetchPlaylists: false, // optional. Set to false to disable fetching of your playlists
        fetchRecent: true, // optional. Set to false to disable fetching of your recently played tracks
        timeRanges: ["short_term", "medium_term"], // optional. Set time ranges to be fetched
      },
    },
  ],
}
