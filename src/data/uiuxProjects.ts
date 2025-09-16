import { Project } from '../types';
import reccycle from '../assets/reccycle.png';
import v from '../assets/v.png';
import trend from '../assets/trend.png';
import budgi from '../assets/budgi.jpg';
import ele from '../assets/ele.png';

export const uiuxProjects: Project[] = [
  {
    id: 'ELETRACK',
    title: 'Elephant Tracking System in Railway Corridors',
    description: 'web app to facilitate elephant tracking in railway corridors',
    longDescription: 'Developed a web application aimed at promoting elephant tracking in railway corridors through user education, real-time tracking, and data collection.',
    technologies: ['Figma', 'Miro' ],
    features: [
      'User research & interviews',
      'Persona development',
      'Information architecture',
      'Wireframing & prototyping',
      'Visual design system',
      'Usability testing',
      'Design handoff',
      'Post-launch analysis'
    ],
    challenges: [
      'Educating users on elephant tracking importance',
      'Designing for diverse user demographics',
      'Integrating real-time location services'
    ],
    solutions: [
      'Created engaging educational content',
      'Developed simple, intuitive UI',
      'Utilized Google Maps API for location features'  
    ],
    imageUrl: ele,
    demoUrl: 'https://www.figma.com/design/1xBIfHSXTViFvSme8Z0hXB/ELETRACK?node-id=0-1&t=WYSdQydu38KBI7Wr-1',
    category: 'uiux',
    featured: true,
    timeline: '2 weeks'
  },
  {
    id: 'e-waste-recycling-app',
    title: 'E-Waste Recycling App',
    description: 'Mobile app to facilitate e-waste recycling',
    longDescription: 'Developed a mobile application aimed at promoting e-waste recycling through user education, collection scheduling, and local recycling center mapping.',
    technologies: ['Figma', 'figjam' ],
    features: [
      'User research & interviews',
      'Persona development',
      'Information architecture',
      'Wireframing & prototyping',
      'Visual design system',
      'Usability testing',
      'Design handoff',
      'Post-launch analysis'
    ],
    challenges: [
      'Educating users on e-waste importance',
      'Designing for diverse user demographics',
      'Integrating real-time location services'
    ],
    solutions: [
      'Created engaging educational content',
      'Developed simple, intuitive UI',
      'Utilized Google Maps API for location features'
    ],
    imageUrl: reccycle,
    demoUrl: 'https://www.figma.com/proto/4wbLxKObOzMQiAqCLanGoe/E-Waste?node-id=7-116&t=f8zNA6YT1RrLobPZ-1&scaling=scale-down&content-scaling=fixed&page-id=0%3A1&starting-point-node-id=2%3A3&show-proto-sidebar=1',
    category: 'uiux',
    featured: true,
    timeline: '2 weeks'
  },
  {
    id: 'cancer-care-app',
    title: 'Cancer Care App',
    description: 'Mobile app for cancer patients to manage their care',
    longDescription: 'Developed a mobile application to assist cancer patients in managing their treatment plans, medication schedules, and appointment reminders. The app includes educational resources and a community support feature.',
    technologies: ['Figma', 'Adobe XD', 'InVision'],
    features: [
      'User onboarding',
      'Medication reminders',
      'Appointment scheduling',
      'Educational resources',
      'Community support forum',
      'Progress tracking',
      'Push notifications',
      'Accessibility features'
    ],
    challenges: [
      'Addressing sensitive user needs',
      'Ensuring data privacy and security',
      'Designing for emotional support'
    ],
    solutions: [
      'Conducted empathy interviews',
      'Implemented robust security measures',
      'Incorporated calming design elements'
    ],
    imageUrl: v,
    demoUrl: 'https://www.figma.com/proto/lqsBR7wGcHuBUJa2jj0NHx/MAD-LAB-Exam-1?node-id=2-2&starting-point-node-id=2%3A2&t=NKlEXdqkk2iBNxlU-1',
    category: 'uiux',
    featured: true,
    timeline: '4 months'
  },
  {
    id: 'Online shopping cart',
    title: 'Trendsphere',
    description: 'E-commerce shopping cart interface design',
    longDescription: 'Developed a user-friendly shopping cart interface for an e-commerce platform, focusing on intuitive navigation, product discovery, and seamless checkout experiences.',
    technologies: ['Android Studio', 'Figma', 'XML', 'Kotlin', ],
    features: [
      'User-friendly interface',
      'Product filtering & sorting',
      'Wishlist functionality',
      'Secure checkout process',
      'Order tracking',
      'Multi-payment options',
      'Responsive design',
      'Customer reviews & ratings'
    ],
    challenges: [
      'Simplifying complex checkout flows',
      'Ensuring mobile responsiveness',
      'Integrating multiple payment gateways'
    ],
    solutions: [
      'Streamlined checkout steps',
      'Adopted mobile-first design principles',
      'Collaborated with payment providers for smooth integration'
    ],
    imageUrl: trend,
    demoUrl: 'https://vimeo.com/1116050580',
    category: 'uiux',
    featured: true,
    timeline: '2.5 months'
  },
  {
    id: 'Finance Tracker',
    title: 'Budget Tracking App',
    description: 'A mobile app for tracking personal finances and budgeting.',
    longDescription: 'Created a mobile application that helps users track their expenses, set budgets, and visualize their financial health through intuitive charts and reports.',
    technologies: ['Android Studio', 'Kotlin', 'Figma'],
    features: [
      'Expense tracking',
      'Budget setting',
      'Financial health visualization',
      'Intuitive charts and reports',
      'User-friendly navigation',
      'Secure data storage',
      'Offline access',
      'Notifications and reminders'
    ],
    challenges: [
      'Ensuring data accuracy and security',
      'Designing for diverse user needs',
      'Balancing functionality with simplicity'
    ],
    solutions: [
      'Implemented secure authentication methods',
      'Conducted user testing for diverse needs',
      'Simplified user flows without sacrificing features'
    ],
    imageUrl: budgi,
    demoUrl: 'https://vimeo.com/1118974351?share=copy',
    category: 'uiux',
    featured: false,
    timeline: '2 months'
  }
];