export default {
  mode: "universal",
  /*
   ** Headers of the page
   */
  head: {
    title: process.env.npm_package_name || "",
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      {
        hid: "description",
        name: "description",
        content: process.env.npm_package_description || ""
      }
    ],
    link: [
      { rel: "icon", type: "image/x-icon", href: "/favicon.ico" },
      {
        rel: "stylesheet",
        href:
          "https://cdn.jsdelivr.net/npm/@tailwindcss/ui@latest/dist/tailwind-ui.min.css"
      },
      {
        rel: "stylesheet",
        href:
          "//fonts.googleapis.com/css?family=Roboto:400,500,700,400italic|Material+Icons"
      },
      {
        rel: "stylesheet",
        href:
          "https://fonts.googleapis.com/css?family=Barlow:400,700|Poppins:300,400&display=swap"
      },
      {
        rel: "stylesheet",
        href:
          "https://cdnjs.cloudflare.com/ajax/libs/animate.css/3.7.0/animate.min.css"
      },
      // {
      //   rel: "stylesheet",
      //   href:
      //     "https://fonts.googleapis.com/css?family=Playfair+Display&display=swap"
      // },
      {
        rel: "stylesheet",
        href:
          "https://cdn.jsdelivr.net/npm/@tailwindcss/ui@latest/dist/tailwind-ui.min.css"
      }
      // { rel: "stylesheet", href: "/src/assets/dist/tailwind.css" }

      // <link rel="stylesheet" href="/src/assets/dist/tailwind.css" />
    ],
    script: [
      {
        src:
          "https://cdn.jsdelivr.net/gh/alpinejs/alpine@v2.0.1/dist/alpine.js",
        defer: ""
      }
    ]
  },
  /*
   ** Customize the progress-bar color
   */
  loading: { color: "#fff" },
  /*
   ** Global CSS
   */
  css: [],
  /*
   ** Plugins to load before mounting the App
   */
  plugins: [
    // "~/plugins/directives.js "
  ],
  /*
   ** Nuxt.js dev-modules
   */
  buildModules: [
    // Doc: https://github.com/nuxt-community/nuxt-tailwindcss
    "@nuxtjs/tailwindcss"
  ],
  /*
   ** Nuxt.js modules
   */
  modules: [],
  /*
   ** Build configuration
   */
  build: {
    /*
     ** You can extend webpack config here
     */
    extend(config, ctx) {}
  }
};
