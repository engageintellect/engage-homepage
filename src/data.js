import { getPermalink, getBlogPermalink, getAsset } from './utils/permalinks';

export const headerData = {
  links: [
    {
      text: 'blog',
      href: getBlogPermalink(),
    },

    {
      text: 'tech',
      href: '/#technologies',
    },

    {
      text: 'articles',
      href: '/category/articles',
    },

    {
      text: 'projects',
      href: '/category/projects',
    },

    {
      text: 'faq',
      href: '/#faq',
    },
  ],
  actions: [
    { type: 'button', text: 'GitHub', href: 'https://github.com/engageintellect', icon: 'tabler:brand-facebook' },
  ],
};

export const footerData = {
  links: [
    {
      title: 'Site',
      links: [
        { text: 'Home', href: '/' },
        { text: 'Blog', href: '/blog' },
        { text: 'Articles', href: '/category/articles' },
        { text: 'Projects', href: '/category/projects' },
        { text: 'FAQs', href: '/#faq' },
      ],
    },
    {
      title: 'Technology',
      links: [
        { text: 'Astro', href: 'https://astro.build' },
        { text: 'Tailwind', href: 'https://tailwindcss.com' },
        { text: 'Vercel', href: 'https://vercel.com' },
      ],
    },
  ],
  secondaryLinks: [
    { text: 'Terms', href: getPermalink('/terms') },
    { text: 'Privacy Policy', href: getPermalink('/privacy') },
  ],
  socialLinks: [
    { ariaLabel: 'Twitter', icon: 'tabler:brand-twitter', href: 'https://twitter.com/engageintellect' },
    { ariaLabel: 'Instagram', icon: 'tabler:brand-instagram', href: 'https://instagram.com/engage_intellect' },
    { ariaLabel: 'Medum', icon: 'tabler:brand-medium', href: 'https://medium.com/@engageintellect' },
    { ariaLabel: 'RSS', icon: 'tabler:rss', href: getAsset('/rss.xml') },
    { ariaLabel: 'Github', icon: 'tabler:brand-github', href: 'https://github.com/engageintellect' },
  ],
  // footNote: `
  //   <span class="w-5 h-5 md:w-6 md:h-6 md:-mt-0.5 bg-cover mr-1.5 float-left rounded-sm bg-[url(https://onwidget.com/favicon/favicon-32x32.png)]"></span>
  //   Made by <a class="text-blue-600 hover:underline dark:text-zinc-200" href="https://onwidget.com/"> onWidget</a> · All rights reserved.
  // `,

  footNote: `
    <span class="w-5 h-5 md:w-6 md:h-6 md:-mt-0.5 bg-cover mr-1.5 float-left rounded-sm"></span>
    Made by <a class="text-blue-600 hover:underline dark:text-zinc-200" href="https://github.com/engageintllect">@engageintellect</a> · All rights reserved.
  `,
};
