// This is where project configuration and plugin options are located.
// Learn more: https://gridsome.org/docs/config

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

module.exports = {
  siteName: 'Pliavi',
   plugins: [
    {
      use: `gridsome-plugin-netlify-cms`,
      options: {
        plugins: [`netlify-cms-widget-youtube`],
      }
    },
    // {
    //   use: '@gridsome/source-filesystem',
    //   options: {
    //     typeName: 'BlogPost',
    //     create: true
    //     path: './content/blog/**/*.md',
    //   }
    // },
  ],
  transformers: {
  	remark: {}
  },
  // templates: {
  //   BlogPost: "/blog/:title",
  //   Projects: "/portfolio/:title"
  // }
}
