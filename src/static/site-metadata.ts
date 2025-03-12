interface ISiteMetadataResult {
  siteTitle: string;
  siteUrl: string;
  description: string;
  keywords: string;
  logo: string;
  navLinks: {
    name: string;
    url: string;
  }[];
}

const data: ISiteMetadataResult = {
  siteTitle: "晨风's Running Page",
  siteUrl: 'https://adongtt.github.io/chenfeng',
  logo: 'https://uk.weika.live/chenfeng.jpg',
  description: 'Personal site and blog',
  keywords: 'workouts, running, cycling, riding, roadtrip, hiking, swimming',
  navLinks: [
    {
      name: 'Blog',
      url: 'https://adongtt.github.io/chenfeng',
    },
    {
      name: 'About',
      url: 'https://adongtt.github.io/chenfeng',
    },
  ],
};

export default data;
