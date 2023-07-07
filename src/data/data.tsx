import {
  AcademicCapIcon,
  ArrowDownTrayIcon,
  BuildingOffice2Icon,
  CalendarIcon,
  FlagIcon,
  MapIcon,
  SparklesIcon,
} from '@heroicons/react/24/outline';

import GithubIcon from '../components/Icon/GithubIcon';
import InstagramIcon from '../components/Icon/InstagramIcon';
import LinkedInIcon from '../components/Icon/LinkedInIcon';
// import StackOverflowIcon from '../components/Icon/StackOverflowIcon';
// import TwitterIcon from '../components/Icon/TwitterIcon';
import heroImage from '../images/header-background.webp';
import porfolioImage1 from '../images/portfolio/portfolio-1.jpg';
import porfolioImage2 from '../images/portfolio/portfolio-2.jpg';
import porfolioImage3 from '../images/portfolio/portfolio-3.jpg';
import porfolioImage4 from '../images/portfolio/portfolio-4.jpg';
import porfolioImage5 from '../images/portfolio/portfolio-5.jpg';
import porfolioImage6 from '../images/portfolio/portfolio-6.jpg';
import porfolioImage7 from '../images/portfolio/portfolio-7.jpg';
import porfolioImage8 from '../images/portfolio/portfolio-8.jpg';
import porfolioImage9 from '../images/portfolio/portfolio-9.jpg';
import porfolioImage10 from '../images/portfolio/portfolio-10.jpg';
import porfolioImage11 from '../images/portfolio/portfolio-11.jpg';
import profilepic from '../images/profilepic.jpg';
import testimonialImage from '../images/testimonial.webp';
import {
  About,
  ContactSection,
  ContactType,
  Hero,
  HomepageMeta,
  PortfolioItem,
  SkillGroup,
  Social,
  TestimonialSection,
  TimelineItem,
} from './dataDef';

/**
 * Page meta data
 */
export const homePageMeta: HomepageMeta = {
  title: "Sunil Anumolus' resume",
  description: "Sunils' resume webiste to make it interesting than a regular resume",
};

/**
 * Section definition
 */
export const SectionId = {
  Hero: 'hero',
  About: 'about',
  Contact: 'contact',
  Portfolio: 'portfolio',
  Resume: 'resume',
  Skills: 'skills',
  Stats: 'stats',
  Testimonials: 'testimonials',
} as const;

export type SectionId = typeof SectionId[keyof typeof SectionId];

/**
 * Hero section
 */
export const heroData: Hero = {
  imageSrc: heroImage,
  name: `I'm Sunil Anumolu`,
  description: (
    <>
      <p className="prose-sm text-stone-200 sm:prose-base lg:prose-lg">
        I'm a Hyderabad based <strong className="text-stone-100">Full Stack Software Engineer</strong>, currently working
        at <strong className="text-stone-100">Rigi</strong> building a modern app & web platform enabling creators grow their communities.
      </p>
      <p className="prose-sm text-stone-200 sm:prose-base lg:prose-lg">
        In my free time time, I'll involve myself in sports mostly badminton, cricket &
        goes out explore new places around, once in a while I'll set myself on a trip either solo or with friends.
      </p>
    </>
  ),
  actions: [
    {
      href: '/resume.pdf',
      text: 'Resume',
      primary: true,
      Icon: ArrowDownTrayIcon,
      target: '_blank',
    },
    {
      href: `#${SectionId.Contact}`,
      text: 'Contact',
      primary: false,
      target: '_self',
    },
  ],
};

/**
 * About section
 */
export const aboutData: About = {
  profileImageSrc: profilepic,
  description: `I am a fully stack engineer. I like to code. My fav frameworks are React, React-Native. I have been a student leader for 2 years at my University, I like to work in-front. In my free time I go out to play any sport and likes to explore new places, meet new people, find new tastes in food.`,
  aboutItems: [
    {label: 'Location', text: 'Hyderabad, IND', Icon: MapIcon},
    {label: 'Age', text: '24', Icon: CalendarIcon},
    {label: 'Nationality', text: 'INDIAN', Icon: FlagIcon},
    {label: 'Interests', text: 'Cricket, Badminton, Formula 1, Biking', Icon: SparklesIcon},
    {label: 'Study', text: 'IIIT Hyderabad', Icon: AcademicCapIcon},
    {label: 'Employment', text: 'RIGI', Icon: BuildingOffice2Icon},
  ],
};

/**
 * Skills section
 */
export const skills: SkillGroup[] = [
  {
    name: 'Programming Languages', 
    skills: [ {name: 'Java Script'}, {name: 'C'}, {name: 'C++'}, {name: 'Python'}, {name: 'Java'}, {name: 'Kotlin'}, {name: 'Bash'}, {name: 'Matlab'}],
  },
  {
    name: 'Frontend', 
    skills: [ {name: 'React'}, {name: 'React Native'}, {name: 'HTML'}, {name: 'CSS'}],
  },
  {
    name: 'Database Management', 
    skills: [ {name: 'MySQL'}, {name: 'SQLite'}, {name: 'Neo4J'}, {name: 'XQuery'}, {name: 'MongoDB'}],
  },
  {
    name: 'Backend', 
    skills: [ {name: 'Node JS'}, {name: 'Express JS'},],
  },
  {
    name: 'Graphics', 
    skills: [ {name: 'OpenGL'}, {name: 'WebGL'},],
  },
];

/**
 * Portfolio section
 */
export const portfolioItems: PortfolioItem[] = [
  {
    title: 'Project title 1',
    description: 'Give a short description of your project here.',
    url: 'https://timbaker.me',
    image: porfolioImage1,
  },
  {
    title: 'Project title 2',
    description: 'Give a short description of your project here.',
    url: 'https://timbaker.me',
    image: porfolioImage2,
  },
  {
    title: 'Project title 3',
    description: 'Give a short description of your project here.',
    url: 'https://timbaker.me',
    image: porfolioImage3,
  },
  {
    title: 'Project title 4',
    description: 'Give a short description of your project here.',
    url: 'https://timbaker.me',
    image: porfolioImage4,
  },
  {
    title: 'Project title 5',
    description: 'Give a short description of your project here.',
    url: 'https://timbaker.me',
    image: porfolioImage5,
  },
  {
    title: 'Project title 6',
    description: 'Give a short description of your project here.',
    url: 'https://timbaker.me',
    image: porfolioImage6,
  },
  {
    title: 'Project title 7',
    description: 'Give a short description of your project here.',
    url: 'https://timbaker.me',
    image: porfolioImage7,
  },
  {
    title: 'Project title 8',
    description: 'Give a short description of your project here.',
    url: 'https://timbaker.me',
    image: porfolioImage8,
  },
  {
    title: 'Project title 9',
    description: 'Give a short description of your project here.',
    url: 'https://timbaker.me',
    image: porfolioImage9,
  },
  {
    title: 'Project title 10',
    description: 'Give a short description of your project here.',
    url: 'https://timbaker.me',
    image: porfolioImage10,
  },
  {
    title: 'Project title 11',
    description: 'Give a short description of your project here.',
    url: 'https://timbaker.me',
    image: porfolioImage11,
  },
];

/**
 * Resume section -- TODO: Standardize resume contact format or offer MDX
 */
export const education: TimelineItem[] = [
  {
    date: 'April 2021',
    location: 'International Institute of Information Technology, Hyderabad',
    title: 'Bachelors in Computer Science and Engineering',
    content: (
      <>
      <p><strong>Major Courses:</strong> : Artificial Intelligence, Statistical Methods in AI, Optimization Methods, Data Structures, Algorithms, Operating Systems, Database Systems, Blockchain, Principles of Information Security.</p>
      <p><strong>Teaching Assistant:</strong> Algorithms Analysis & Design, Internet of Things, Digital Signals & Microcontrollers. </p>
    </>
    )
  },
];

export const experience: TimelineItem[] = [
  {
    date: 'December 2022 - Present',
    location: 'RIGI',
    title: 'Sr.SDE, React Native Engineer',
    content: (
     <>
  <p>
    • Built a Community cross-platform app with React-Native Framewrok, enabling creators to build their communities by sharing & monetizing their
    content.
  </p>
  <p>
    • Developed social-media feed feature in less than 2 months, containing dynamic images/videos rendering with minimal
    latency and interactive elements like Polls, QnA forums, Quizs.
  </p>
  <p>
    • Revamped the existing code structure and improved the performance by 30% and upgraded UI with buttery-smooth
    responsiveness.
  </p>
  <p>
    • Playing an integral role in building Community app with by involving in product, design & tech discussions and weekly releasing new features/updates.
  </p>
    </>
    ),
  },
  {
    date: 'July 2021 - November 2022',
    location: 'Reliance JIO',
    title: 'SDE, React Native Engineer',
    content: (
      <>
      <p>
        <strong>JioMeet: </strong>
        developed an internal communication platform using RocketChat and integrated it into JioMeet.
      </p>
      <p><strong>JioGames: </strong>: Implemented crucial features as part of developing a live-streaming and video-watching, video upload platform.</p>
      </>
    ),
  },
];

/**
 * Testimonial section
 */
export const testimonial: TestimonialSection = {
  imageSrc: testimonialImage,
  testimonials: [
    {
      name: 'John Doe',
      text: 'Use this as an opportunity to promote what it is like to work with you. High value testimonials include ones from current or past co-workers, managers, or from happy clients.',
      image: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/169.jpg',
    },
    {
      name: 'Jane Doe',
      text: 'Here you should write some nice things that someone has said about you. Encourage them to be specific and include important details (notes about a project you were on together, impressive quality produced, etc).',
      image: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/14.jpg',
    },
    {
      name: 'Someone else',
      text: 'Add several of these, and keep them as fresh as possible, but be sure to focus on quality testimonials with strong highlights of your skills/work ethic.',
      image: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/69.jpg',
    },
  ],
};

/**
 * Contact section
 */

export const contact: ContactSection = {
  headerText: 'Get in touch.',
  description: 'Here are my social links, feel free to reach out. Adios!! Gracias!!',
  items: [
    {
      type: ContactType.Email,
      text: 'sunilanumolu11@gmail.com',
      href: 'mailto:sunilanumolu11@gmail.com',
    },
    {
      type: ContactType.Github,
      text: 'sunilanumolu',
      href: 'https://github.com/sunilanumolu',
    },
    {
      type: ContactType.LinkedIn,
      text: 'anumolusunil',
      href: 'https://www.linkedin.com/in/anumolusunil/',
    },
    {
      type: ContactType.Instagram,
      text: 'sunilinus_anumolu',
      href: 'https://www.instagram.com/sunilinus_anumolu/',
    },
    {
      type: ContactType.Location,
      text: 'Hyderabad, India',
      href: 'https://goo.gl/maps/48oScjvajz2gYRwR9',
    },
  ],
};

/**
 * Social items
 */
export const socialLinks: Social[] = [
  {label: 'Github', Icon: GithubIcon, href: 'https://github.com/sunilanumolu'},
  // {label: 'Stack Overflow', Icon: StackOverflowIcon, href: 'https://stackoverflow.com/users/8553186/tim-baker'},
  {label: 'LinkedIn', Icon: LinkedInIcon, href: 'https://www.linkedin.com/in/anumolusunil/'},
  {label: 'Instagram', Icon: InstagramIcon, href: 'https://www.instagram.com/sunilinus_anumolu/'},
  // {label: 'Twitter', Icon: TwitterIcon, href: 'https://twitter.com/TimBakerx'},
];
