type Social = {
  label: string;
  link: string;
};

type Presentation = {
  mail: string;
  title: string;
  description: string;
  socials: Social[];
  profile?: string;
};

const presentation: Presentation = {
  mail: 'punithify@gmail.com',
  title: 'Hi, I’m Punith Raj S P 👋',
  // profile: "/profile.webp",
  description:
    "I'm a web developer interested in JS,curently learning Next js and astro",
  socials: [
    {
      label: 'Github',
      link: 'https://github.com/Punithify',
    },
  ],
};

export default presentation;
