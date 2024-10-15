import {
  AcademicCapIcon,
  ArrowDownTrayIcon,
  BuildingOffice2Icon,
  // CalendarIcon,
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
import porfolioImage11 from '../images/portfolio/fighterjet2d.jpg';
import porfolioImage8 from '../images/portfolio/fighterjet3d.jpg';
import porfolioImage5 from '../images/portfolio/musicstream.jpg';
import porfolioImage1 from '../images/portfolio/netflix.jpg';
import porfolioImage9 from '../images/portfolio/shell.png';
import porfolioImage4 from '../images/portfolio/socket.png';
import porfolioImage6 from '../images/portfolio/spaceinvaders.png';
import porfolioImage10 from '../images/portfolio/sqlengine.png';
import porfolioImage7 from '../images/portfolio/subwaysurfers.jpg';
import porfolioImage2 from '../images/portfolio/tinderbot.jpg';
import porfolioImage3 from '../images/portfolio/webscrapping.png';
import profilepic from '../images/profilephoto.jpeg';
import testimonialImage from '../images/testimonial.webp';
import {
  About,
  ContactSection,
  ContactType,
  ExtraCircularSection,
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
  title: "Sunil Anumolus' Website",
  description:
    "Sunil Anumolus' portfolio webiste with about section,career details, projects worked on, extra circular activities, contact details.",
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
  ExtraCircular: 'extraCurricular',
} as const;

export type SectionId = (typeof SectionId)[keyof typeof SectionId];

/**
 * Hero section
 */
export const heroData: Hero = {
  imageSrc: heroImage,
  name: `Sunil Anumolu`,
  description: (
    <>
      <p className="prose-sm text-stone-200 sm:prose-base lg:prose-lg">
        <strong className="text-stone-100">Full Stack Software Engineer</strong>, with a knack to deliver great
        products, specialised in frontend development of Android/iOS/Web applications. Love building products to enhance
        user experience.
      </p>
      <p className="prose-sm text-stone-200 sm:prose-base lg:prose-lg">
        Avid sports enthusiast, actively plays badminton and cricket, also love exploring new places, new cultures &
        meeting people, often embarking on solo adventures.
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
  description: `Driven by a passion for tackling complex tech challenges and crafting great products, with 7 years of extensive experience in frontend & backend development 
  across mobile and web platforms. Proficient in a range of technologies including React Native, React, Next JS, Angular JS, Node JS & Python. Demonstrated adaptability and 
  innovative prowess in diverse environments from startups to multinational corporations.`,
  aboutItems: [
    {label: 'Location', text: 'Atlanta, GA, USA', Icon: MapIcon},
    // {label: 'Age', text: '24', Icon: CalendarIcon},
    {label: 'Nationality', text: 'INDIAN', Icon: FlagIcon},
    {label: 'Interests', text: 'Cricket, Badminton, Formula 1, Biking', Icon: SparklesIcon},
    {label: 'Education', text: 'IIIT Hyderabad', Icon: AcademicCapIcon},
    {label: 'Employment', text: 'Influencer Garage', Icon: BuildingOffice2Icon},
  ],
};

/**
 * Skills section
 */
export const skills: SkillGroup[] = [
  {
    name: 'Programming Languages',
    skills: [
      {name: 'Java Script'},
      {name: 'C'},
      {name: 'C++'},
      {name: 'Python'},
      {name: 'Java'},
      {name: 'Kotlin'},
      {name: 'Bash'},
      {name: 'Swift'},
    ],
  },
  {
    name: 'Database Management',
    skills: [{name: 'SQL'}, {name: 'SQLite'}, {name: 'Neo4J'}, {name: 'XQuery'}, {name: 'MongoDB'}, {name: 'GraphQL'}],
  },
  {
    name: 'Modern Frameworks',
    skills: [{name: 'NodeJS'}, {name: 'NextJS'}, {name: 'ExpressJS'}, {name: 'Angular'}, {name: 'VueJS'}],
  },
  {
    name: 'Frontend',
    skills: [
      {name: 'React'},
      {name: 'React Native'},
      {name: 'HTML'},
      {name: 'CSS'},
      {name: 'Micro Frontend Arch'},
      {name: 'Design Patterns'},
      {name: ''},
    ],
  },
  {
    name: 'Dev Tools',
    skills: [{name: 'Android Studio'}, {name: 'XCode'}, {name: 'AWS'}, {name: 'GCP'}, {name: 'Matlab'}],
  },
  {
    name: 'Graphics',
    skills: [{name: 'OpenGL'}, {name: 'WebGL'}],
  },
];

/**
 * Portfolio section
 */
export const portfolioItems: PortfolioItem[] = [
  {
    title: 'Netflix Backend',
    description: 'Netflix like system backend services with Layered Architecture',
    url: 'https://github.com/sunilanumolu/xflix_backend',
    image: porfolioImage1,
  },
  {
    title: 'Tinder Bot',
    description: 'A bot to help swipe profiles based on commanalities',
    url: 'https://github.com/sunilanumolu/TinderBot',
    image: porfolioImage2,
  },
  {
    title: 'Web Scrapping',
    description: 'Amazon website data collection',
    url: 'https://github.com/sunilanumolu/Web-Scrapping',
    image: porfolioImage3,
  },
  {
    title: 'Client-Server Sockets',
    description: 'A-basic-Server-and-Client-with-Sockets in C++',
    url: 'https://github.com/sunilanumolu/A-basic-Server-and-Client-with-Sockets',
    image: porfolioImage4,
  },
  {
    title: 'Music WebApp',
    description: 'A Music streaming straWebApp using React',
    url: 'https://github.com/sunilanumolu/MusiconWebe',
    image: porfolioImage5,
  },
  {
    title: 'Space Invaders',
    description: 'Space Inavders 2D game built in Python',
    url: 'https://github.com/sunilanumolu/Space-Invaders-2Dgame',
    image: porfolioImage6,
  },
  {
    title: 'Subway Surfers',
    description: '3D game built using WebGL library',
    url: 'https://github.com/sunilanumolu/WebGL-3D-Gamee',
    image: porfolioImage7,
  },
  {
    title: 'Fighter-Jet game',
    description: `It's a 3D game buit with OpenGL library`,
    url: 'https://github.com/sunilanumolu/Graphics-3D-Game',
    image: porfolioImage8,
  },
  {
    title: 'OS Shell',
    description: 'A Terminal which works like an ubuntu termial',
    url: 'https://github.com/sunilanumolu/OS-Shell-Part-2',
    image: porfolioImage9,
  },
  {
    title: 'SQL engine',
    description: 'A mini SQL engine with basic to medium functionality',
    url: 'https://github.com/sunilanumolu/DB-mini-sql',
    image: porfolioImage10,
  },
  {
    title: 'Fighter-Jet 2D',
    description: `It's a 2D verson built with OpenGL library`,
    url: 'https://github.com/sunilanumolu/Graphics-2D-Game',
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
        {/* <p><strong>Major Courses:</strong> : Artificial Intelligence, Statistical Methods in AI, Optimization Methods, Data Structures, Algorithms, Operating Systems, Database Systems, Blockchain, Principles of Information Security.</p>
      <p><strong>Teaching Assistant:</strong> Algorithms Analysis & Design, Internet of Things, Digital Signals & Microcontrollers. </p> */}
      </>
    ),
  },
];

export const experience: TimelineItem[] = [
  {
    date: 'Oct 2023 - May 2024',
    location: 'Influencer Garage (Start-Up)',
    title: 'Senior Software Development Engineer',
    content: <></>,
  },
  {
    date: 'Feb 2021 -  Sept 2023',
    location: 'Rigi (Start-Up)',
    title: 'Senior React Native Engineer & Team Lead',
    content: (
      <>
        {/* <p>
    • Developed a cross-platform community app using React-Native framework, empowering creators to share and monetize their content.
  </p>
  <p>
    • Successfully implemented a dynamic social media feed feature within a tight timeframe, featuring fast image/video rendering and interactive elements like polls, Q&A forums, and quizzes.
  </p>
  <p>
    • Spearheaded a code structure overhaul, resulting in a 30% performance improvement and an upgraded UI with seamless responsiveness.
  </p>
  <p>
    • Played a pivotal role in the Community project by actively participating in product, design, and technical discussions, and consistently delivering new features and updates.
  </p> */}
      </>
    ),
  },
  {
    date: 'July 2019 -  Jan 2021',
    location: 'Reliance JIO',
    title: 'Software Development Engineer',
    content: (
      <>
        {/* <p>
        <strong>JioMeet Integration: </strong>
        Developed an internal communication platform using RocketChat and seamlessly integrated it into JioMeet.
      </p>
      <p><strong>JioGames Contribution: </strong>:  Played a pivotal role in implementing vital features for the development of a live-streaming, video-watching, and video-upload platform within JioGames.</p> */}
      </>
    ),
  },
  {
    date: 'May 2017 -  June 2018',
    location: 'Mondelez International',
    title: 'Software Development Engineer',
    content: <></>,
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
 *  Extra Circular Activities
 */
export const extracirculars: ExtraCircularSection = {
  title: `Extra Curricular Activities`,
  data: [
    {
      title: `General Secretary of Students' Parliament`,
      time: `Mar, 2020 - Apr, 2021`,
      place: `IIIT Hyderabad`,
      description: (
        <>
          <p>
            • As a GenSec I used to run the Parliament & maintain good relation with faculty, staff to swiftly resolve
            students' community issues.{' '}
          </p>
          <p>
            • Covid stuck this year and I've became the Gen Sec, it was difficult times to be a GenSec, but I did my job
            well with the help from student's community and faculty, staff.
          </p>
          <p>
            • I've been awared <strong>BANYAN Award</strong>, the University highest award, for all my contribution
            towards students' community.
          </p>
        </>
      ),
    },
    {
      title: `Speaker of Students' Parliament`,
      time: `Mar, 2019 - Apr, 2020`,
      place: `IIIT Hyderabad`,
      description: (
        <>
          <p>
            • Got elected as an MP by batchmates and elected as Speaker by the Parliament, I'm the first guy to became a
            speaker in their first term.
          </p>
          <p>• As an MP, I've used to conduct regular parliament meetings and follow-up on all students' issues.</p>
          <p>
            • I've also been a core-member of the <strong>FELICITY</strong>, university fest this year and helped in
            smooth orgaization.
          </p>
        </>
      ),
    },
    {
      title: `Co-ordinator of NSS program`,
      time: `Mar, 2018 - Apr, 2019`,
      place: `IIIT Hyderabad`,
      description: (
        <>
          <p>
            • I joined National Service Scheme program, known as NSS in my first year, I've been an active member of it
            thorught out the year.{' '}
          </p>
          <p>
            • As a co-ordinator I've organized multiple <strong>Blood donation camps</strong>, in partnership with the
            trusted Govt hospitals in Hyderabad.
          </p>
          <p>
            • I've also organized Orphanage/OldAge home visits, we used to go and spend an afternoon & have fun with the
            kids / old people{' '}
          </p>
          <p>
            • and also organized Talks by high ranking Govt Officials & cleanliness drives & clothes donation drives
            ...many
          </p>
        </>
      ),
    },
    {
      title: `Co-ordinator of Photography club`,
      time: `Mar, 2018 - Apr, 2019`,
      place: `IIIT Hyderabad`,
      description: (
        <>
          <p>
            • I've been into Photography from the day I started using the camera, I learnt photography from my seniors
            in the club.
          </p>
          <p>
            • I've organized photography classes,events & walks as being a co-ordinator and used to cover most of the
            University events by myself.
          </p>
        </>
      ),
    },
  ],
};

/**
 * Contact section
 */

export const contact: ContactSection = {
  headerText: 'Get in touch',
  description: 'Here are my contact/social links, feel free to reach out. Adios!! Gracias!!',
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
      text: 'Atlanta, GA, USA',
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
