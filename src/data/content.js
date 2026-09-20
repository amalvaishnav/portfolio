// All site copy lives here so it can be edited without touching components.
// Rule: only real facts about Amal. Anything unknown stays a TODO.

export const identity = {
  name: 'Amal Vaishnav',
  role: 'Frontend Developer',
  company: 'United Wholesale Mortgage',
  location: 'Metro Detroit, Michigan',
  tagline: 'I build friendly, careful interfaces for the web, then go play pickleball.',
  bio: [
    "I'm a frontend developer at United Wholesale Mortgage in Metro Detroit.",
    "My path runs from a computer engineering degree in Gujarat and a master's in computer science at UNC Charlotte, through engineering roles at NextGen Healthcare, Credible and Marlabs, to where I am today.",
    'Off the clock you will find me playing volleyball, pickleball, cricket or soccer, or gathered around a board game.',
  ],
};

export const links = {
  email: 'amal.vaishnav96@gmail.com',
  github: 'https://github.com/amalvaishnav',
  linkedin: 'https://www.linkedin.com/in/amalvaishnav',
};

export const experience = [
  {
    id: 'uwm',
    company: 'United Wholesale Mortgage',
    type: 'Full-time',
    location: 'Detroit metro area · On-site',
    roles: [{ title: 'Frontend Developer', start: 'Oct 2023', end: 'Present' }],
    bullets: [], // No public description available.
  },
  {
    id: 'marlabs',
    company: 'Marlabs LLC',
    type: 'Full-time',
    location: 'Raleigh-Durham area · Hybrid',
    roles: [{ title: 'Software Engineer', start: 'Mar 2023', end: 'Sep 2023' }],
    bullets: [],
  },
  {
    id: 'credible',
    company: 'Credible',
    type: 'Full-time',
    location: 'Raleigh-Durham area',
    roles: [
      { title: 'Software Engineer II', start: 'Jul 2022', end: 'Jan 2023' },
      { title: 'Software Engineer', start: 'Feb 2020', end: 'Jul 2022' },
    ],
    bullets: [],
  },
  {
    id: 'nextgen',
    company: 'NextGen Healthcare',
    type: 'Internship',
    location: 'Cary, NC',
    roles: [{ title: 'Software Engineer Intern', start: 'Jun 2019', end: 'Nov 2019' }],
    bullets: [
      'Built the front end of the Medfusion Administration tool in React, Redux and Sass. Client-relations and sales teams use it to keep records of the hospitals and clients the organization works with.',
      'Built core features, including creating and fetching Appointment Settings and a Customer Interaction API integration.',
      'Worked to coding standards and design principles, using JIRA and Bitbucket, pair programming and Crucible code reviews in an Agile team. Explored API resources with SwaggerUI.',
    ],
  },
  {
    id: 'uncc',
    company: 'University of North Carolina at Charlotte',
    type: 'Department of Mathematics',
    location: '', // TODO: no location given for this role.
    roles: [{ title: 'Undergraduate Teaching Assistant', start: 'Jan 2019', end: 'May 2019' }],
    bullets: [
      'Oversaw assignments and class tests, graded them, and helped the professor with coursework.',
    ],
  },
  {
    id: 'lintel',
    company: 'Lintel Technologies Pvt Ltd',
    type: 'Internship',
    location: 'Greater Ahmedabad area',
    roles: [{ title: 'Software Development Intern', start: 'Dec 2017', end: 'May 2018' }],
    bullets: [
      'Built a Contact Center Dialer web app for customer relationship management, using Django, Twisted and PostgreSQL.',
      'Integrated the telephony agent and admin databases so they stay in sync.',
      'Researched how to deploy and maintain Linux servers.',
    ],
  },
  {
    id: 'mobilefirst',
    company: 'MobileFirst Applications',
    type: 'Internship',
    location: 'Greater Ahmedabad area',
    roles: [{ title: 'Data Mining Intern', start: 'May 2017', end: 'Aug 2017' }],
    bullets: [
      'Built a text-mining tool that pulls information from job portals.',
      'Built a data-mining tool that predicts Tokyo Stock Exchange daily prices using machine learning and NLP.',
    ],
  },
];

export const education = [
  {
    school: 'University of North Carolina at Charlotte',
    degree: 'Master of Science, Computer Science',
    start: '2018',
    end: '2019',
  },
  {
    school: 'LDRP Institute of Technology & Research, Gujarat Technological University',
    degree: 'Bachelor of Engineering, Computer Engineering',
    start: '2014',
    end: '2018',
  },
];

export const skills = [
  { group: 'Frontend', items: ['React', 'Redux', 'Sass'] },
  {
    group: 'Backend & data',
    items: [
      'Python',
      'Django',
      'PostgreSQL',
      'Web Scraping',
      'Machine Learning',
      'Natural Language Processing',
    ],
  },
  { group: 'Ways of working', items: ['Agile', 'JIRA', 'Bitbucket', 'SwaggerUI'] },
];

export const testimonial = {
  // TODO: confirm Cass Baltz is OK with this being shown before launch.
  quote:
    'Great to work with, with an excellent attitude, and always willing to take on extra work and help teammates.',
  name: 'Cass Baltz',
  role: 'Software Engineer, colleague at Credible',
};

export const offTheClock = {
  sports: ['Volleyball', 'Pickleball', 'Cricket', 'Soccer'],
  games: ['Board games'],
};

export const projects = [
  // TODO: Amal to add real projects. Each project is one object, for example:
  // { id: 'slug', title: '', summary: '', tags: [], href: '' }
];
