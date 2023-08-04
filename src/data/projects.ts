export type Project = {
  title: string;
  techs: string[];
  link: string;
  isComingSoon?: boolean;
};

const projects: Project[] = [
  {
    title: 'Checkout Page',
    techs: ['NextJS', 'middleware', 'zod'],
    link: 'https://github.com/Punithify/multiple-checkout',
  },
  {
    title: 'Syntaxia',
    techs: ['NextJS', 'ReactBoostrap'],
    link: 'https://github.com/Punithify/syntaxia-2021',
  },
];

export default projects;
