module.exports = {
  // where it all starts -- the site's root Notion page (required)
  rootNotionPageId: '7abbddd040ca4a00af2989a6afd9c7c6',

  // if you want to restrict pages to a single notion workspace (optional)
  // (this should be a Notion ID; see the docs for how to extract this)
  rootNotionSpaceId: null,

  // basic site info (required)
  name: 'Joshua Kang',
  domain: 'joshua-kang.com',
  author: 'Joshua Kang',

  // open graph metadata (optional)
  description: 'Joshua Kang Website',
  socialImageTitle: 'Joshua Kang',
  socialImageSubtitle: 'Hello World! 👋',

  // social usernames (optional)
  twitter: 'YoshuaKang',
  github: 'joshuakzl',
  linkedin: 'joshua-swe',

  // default notion icon and cover images for site-wide consistency (optional)
  // page-specific values will override these site-wide defaults
  defaultPageIcon: 'https://ssfy.io/https%3A%2F%2Fwww.notion.so%2Fimage%2Fhttps%253A%252F%252Fs3-us-west-2.amazonaws.com%252Fsecure.notion-static.com%252F31ba6e27-b746-478d-b1ba-1a7afd8f0812%252Fpp.png%3Ftable%3Dblock%26id%3D7abbddd0-40ca-4a00-af29-89a6afd9c7c6%26cache%3Dv2',
  defaultPageCover: 'https://ssfy.io/https%3A%2F%2Fimages.unsplash.com%2Fphoto-1498050108023-c5249f4df085%3Fixlib%3Drb-1.2.1%26q%3D85%26fm%3Djpg%26crop%3Dentropy%26cs%3Dsrgb',
  defaultPageCoverPosition: 0.1862,

  // image CDN host to proxy all image requests through (optional)
  // NOTE: this requires you to set up an external image proxy
  imageCDNHost: 'https://ssfy.io',

  // Utteranc.es comments via GitHub issue comments (optional)
  utterancesGitHubRepo: 'joshuakzl/blog-comments',

  // whether or not to enable support for LQIP preview images (optional)
  // NOTE: this requires you to set up Google Firebase and add the environment
  // variables specified in .env.example
  isPreviewImageSupportEnabled: false,

  // map of notion page IDs to URL paths (optional)
  // any pages defined here will override their default URL paths
  // example:
  //
  // pageUrlOverrides: {
  //   '/foo': '067dd719a912471ea9a3ac10710e7fdf',
  //   '/bar': '0be6efce9daf42688f65c76b89f8eb27'
  // }
  pageUrlOverrides: null
}
