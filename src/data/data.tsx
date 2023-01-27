import {
  AcademicCapIcon,
  CalendarIcon,
  DownloadIcon,
  FlagIcon,
  MapIcon,
  OfficeBuildingIcon,
  SparklesIcon,
} from '@heroicons/react/outline';

import GithubIcon from '../components/Icon/GithubIcon';
import InstagramIcon from '../components/Icon/InstagramIcon';
import LinkedInIcon from '../components/Icon/LinkedInIcon';
import StackOverflowIcon from '../components/Icon/StackOverflowIcon';
import TwitterIcon from '../components/Icon/TwitterIcon';
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
import testimonialImage from '../images/testimonial.png';
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
  title: 'React Resume Template',
  description: "Example site built with Tim Baker's react resume template",
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
  name: `I'm Wenqian Zhao.`,
  description: (
    <>
      <p className="prose-sm text-stone-200 sm:prose-base lg:prose-lg">
        I'm a <strong className="text-stone-100">Data Scientist</strong> from China, currently pursuing Bachelor degree 
        at <strong className="text-stone-100">University of California, San Diego</strong> major in  
        <strong className="text-stone-100"> Data Science</strong>.
      </p>
      <p className="prose-sm text-stone-200 sm:prose-base lg:prose-lg">
        Outside my enthusiam in Data Science and Machine learning, I am a huge fan of music and sport.
        I have been playing cello for 13 years, bass for 7 years, and tennis for 16 years. I think having a 
        balance of interests, like music and sports, makes for a well-rounded person, 
        and I try to bring that balance to my studies as well.
      </p>
    </>
  ),
  actions: [
    {
      href: '../assets/resume.pdf',
      text: 'Resume',
      primary: true,
      Icon: DownloadIcon,
    },
    {
      href: `#${SectionId.Contact}`,
      text: 'Contact',
      primary: false,
    },
  ],
};

/**
 * About section
 */
export const aboutData: About = {
  profileImageSrc: profilepic,
  description: `As a data science student at the University of California, San Diego,
   I am driven to understand and utilize the power of data to make a difference. 
   My major in data science has sparked a deep interest in machine learning and artificial intelligence.
    Alongside my academic pursuits, I am also a dedicated musician and athlete. With 13 
    years of experience playing cello and 7 years playing bass, music has been a fundamental 
    part of my life. Similarly, tennis has been a passion of mine for 16 years, providing me with a 
    balance of discipline and competition. My diverse interests and experiences have helped shape me 
    into a well-rounded and dedicated individual.`,
  aboutItems: [
    {label: 'Location', text: 'La Jolla, CA, US / Jinan, Shandong, China', Icon: MapIcon},
    {label: 'Age', text: '22', Icon: CalendarIcon},
    {label: 'Nationality', text: 'China', Icon: FlagIcon},
    {label: 'Interests', text: 'Blues, The Beatles, F1, Tennis', Icon: SparklesIcon},
    {label: 'Study', text: 'University of Califronia, San Diego', Icon: AcademicCapIcon},
  ],
};

/**
 * Skills section
 */
export const skills: SkillGroup[] = [
  {
    name: 'Programming Language',
    skills: [
      {
        name: 'Python',
        level: 10,
      },
      {
        name: 'Java',
        level: 8,
      },
      {
        name: 'JavaScript',
        level: 5
      }
    ],
  },
  {
    name: 'Data Science/Machine Learning Tools',
    skills: [
      {
        name: 'Numpy & Pandas',
        level: 10,
      },
      {
        name: 'Pytorch',
        level: 7,
      },
      {
        name: 'Visualization (matplotlib, seaborn, d3.js)',
        level: 8,
      },

    ],
  },
  {
    name: 'Spoken languages',
    skills: [
      {
        name: 'English',
        level: 8,
      },
      {
        name: 'Chinese (Mandarin)',
        level: 10,
      },
    ],
  },
  {
    name: 'Other',
    skills: [
      {
        name: 'Git',
        level: 7,
      },
      {
        name: 'SQL',
        level: 7,
      },
      {
        name: 'Docker',
        level: 4
      },
      {
        name: 'Bash',
        level: 5
      },
    ],
  },
  
  
  
];

/**
 * Portfolio section
 */
export const portfolioItems: PortfolioItem[] = [
  {
    title: 'Datahack 2021 - Anomalous Cryptocurrency Detector',
    description: 'Classify anomalous in cryptocurrency transactions',
    url: 'https://github.com/wenqian-zhao/Datahack_GMSTeam',
    image: porfolioImage1,
  },
  {
    title: 'Image-Caption Generator',
    description: 'Image Caption Generator that is constructed based on encoder-decoder architecture network with pre-trained ResNet-50 and LSTM based on PyTorch.',
    url: 'https://github.com/wenqian-zhao/Image-Caption-Generator-with-ResNet-50-and-LSTM',
    image: porfolioImage2,
  },
  {
    title: 'Heterogeneous Casual Relationship with Honest Forest',
    description: 'determine the association between educational attainment and income level.',
    url: 'tbd',
    image: porfolioImage3,
  },
  
  {
    title: 'User Intent Classification on Amazon Massive Dataset',
    description: 'Classify users\' intent with fine-tuned BERT',
    url: 'https://github.com/wenqian-zhao/User-Intent-Classification',
    image: porfolioImage4,
  },
  {
    title: 'New York Airbnb Price Prediction',
    description: 'Predict the price of New York Airbnbs using ensemble ML methods',
    url: 'https://github.com/wenqian-zhao/NYC-Airbnb-Price-Prediction',
    image: porfolioImage5,
  },
  // {
  //   title: 'Project title 6',
  //   description: 'Give a short description of your project here.',
  //   url: 'https://timbaker.me',
  //   image: porfolioImage6,
  // },
  // {
  //   title: 'Project title 7',
  //   description: 'Give a short description of your project here.',
  //   url: 'https://timbaker.me',
  //   image: porfolioImage7,
  // },
  // {
  //   title: 'Project title 8',
  //   description: 'Give a short description of your project here.',
  //   url: 'https://timbaker.me',
  //   image: porfolioImage8,
  // },
  // {
  //   title: 'Project title 9',
  //   description: 'Give a short description of your project here.',
  //   url: 'https://timbaker.me',
  //   image: porfolioImage9,
  // },
  // {
  //   title: 'Project title 10',
  //   description: 'Give a short description of your project here.',
  //   url: 'https://timbaker.me',
  //   image: porfolioImage10,
  // },
  // {
  //   title: 'Project title 11',
  //   description: 'Give a short description of your project here.',
  //   url: 'https://timbaker.me',
  //   image: porfolioImage11,
  // },
];

/**
 * Resume section -- TODO: Standardize resume contact format or offer MDX
 */
export const education: TimelineItem[] = [
  {
    date: 'September 2015 - June 2019',
    location: 'Saint George\'s School @ Spokane, WA',
    title: 'High School',
    content: <p>I have acquired a deeper understanding of various academic subjects, honed 
    my language skills in English, and developed strong problem-solving and critical 
    thinking abilities, leadership, and cross-cultural communication skills.</p>,
  },
  {
    date: 'September 2019 - Present',
    location: 'UCSA @ La Jolla, CA',
    title: 'Undergraduate - Data Science',
    content: <p>My experience at UCSD has been focused on acquiring 
       knowledge and skills in foundational data science
       concepts and techniques, including statistics, programming, and machine learning. Through 
       coursework and projects, I also gained proficiency in using tools and libraries such as 
       Pandas, Numpy, Scikit-learn, Pytorch, Keras and others. Additionally, I have developed my critical 
       thinking and problem-solving skills. 
    </p>,
  },
];

export const experience: TimelineItem[] = [
  
  {
    date: 'June 2021 - September 2021',
    location: 'Inspur Group',
    title: 'Product Manager',
    content: (
        <ul>
        <li>
        Conduct a competitive study with coworkers in order to discover the customer's demands based on user satisfaction
statistics and research.
        </li>
        <li>
        Make prototypes of the software's new features by Axure10 and communicate with back-end engineer.
        </li>
        <li>
        With back-end engineers and front-end engineers to investigate and reproduce user-reported bugs and assist them in
fixing the bugs.
        </li>
        </ul>
    ),
  },
  {
    date: 'May 2022 - September 2022',
    location: 'ByteDance',
    title: 'Data Analyst',
    content: (
      <ul>
        <li>
        Build up preprocessing and visualization pipeline for diffusion networks over 100k edges with SQL, Python, and
JavaScript.
        </li>
        <li>
        Utilize web-scraper to collect musician account data and construct a natural language classification model on musician
detection based on content creators' biography and video descriptions with domain expertise on music, NLP, and
parametric/non-parametric models.
        </li>
      </ul>
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
  description: 'Email is my mainstay,\
  Calls take a backseat today.\
  WeChat is fine, if that\'s your tool,\
  A message sent, our connection cool.',
  items: [
    {
      type: ContactType.Email,
      text: 'wez0012@outlook.com',
      href: 'mailto:wez0012@outlook.com',
    },
    {
      type: ContactType.Phone,
      text: '(+1)858-888-6970 ',
      href: 'tel:+18588886970',
    },
    {
      type: ContactType.Phone,
      text: '(+86)130-0657-1259',
      href: 'tel:+8613006571259',
    },
    {
      type: ContactType.Instagram,
      text: '@mnizwq',
      href: 'https://www.instagram.com/mnizwq/',
    },
    {
      type: ContactType.Github,
      text: 'wenqian-zhao',
      href: 'https://github.com/wenqian-zhao',
    },
    {
      type: ContactType.WeChat,
      text: 'Om_z00',
    },
  ],
};

/**
 * Social items
 */
export const socialLinks: Social[] = [
  {label: 'Github', Icon: GithubIcon, href: 'https://github.com/wenqian-zhao'},
  {label: 'LinkedIn', Icon: LinkedInIcon, href: 'https://www.linkedin.com/in/wez020/'},
  {label: 'Instagram', Icon: InstagramIcon, href: 'https://www.instagram.com/mnizwq/'},
];
