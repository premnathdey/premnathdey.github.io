const { hot } = require("react-hot-loader/root")

// prefer default export if available
const preferDefault = m => m && m.default || m


exports.components = {
  "component---node-modules-gatsby-plugin-offline-app-shell-js": hot(preferDefault(require("/Users/premnathdey/premnathdey.github.io/node_modules/gatsby-plugin-offline/app-shell.js"))),
  "component---src-pages-404-js": hot(preferDefault(require("/Users/premnathdey/premnathdey.github.io/src/pages/404.js"))),
  "component---src-pages-elements-js": hot(preferDefault(require("/Users/premnathdey/premnathdey.github.io/src/pages/elements.js"))),
  "component---src-pages-generic-js": hot(preferDefault(require("/Users/premnathdey/premnathdey.github.io/src/pages/generic.js"))),
  "component---src-pages-index-js": hot(preferDefault(require("/Users/premnathdey/premnathdey.github.io/src/pages/index.js"))),
  "component---src-pages-landing-js": hot(preferDefault(require("/Users/premnathdey/premnathdey.github.io/src/pages/landing.js"))),
  "component---src-pages-photos-js": hot(preferDefault(require("/Users/premnathdey/premnathdey.github.io/src/pages/photos.js"))),
  "component---src-pages-project-2-js": hot(preferDefault(require("/Users/premnathdey/premnathdey.github.io/src/pages/project2.js"))),
  "component---src-pages-project-3-js": hot(preferDefault(require("/Users/premnathdey/premnathdey.github.io/src/pages/project3.js")))
}

