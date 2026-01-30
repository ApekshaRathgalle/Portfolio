import { Skill, Education, ContactInfo } from '../types';

export const skills: Skill[] = [
  // Technical Skills
  { name: 'React', level: 95, category: 'technical', icon: 'SiReact' },
  { name: 'Angular', level: 75, category: 'technical', icon: 'SiAngular' },
  { name: 'TypeScript', level: 90, category: 'technical', icon: 'SiTypescript' },
  { name: 'Node.js', level: 85, category: 'technical', icon: 'SiNodedotjs' },
  { name: 'Express.js', level: 85, category: 'technical', icon: 'SiExpress' },
  { name: 'MongoDB', level: 85, category: 'technical', icon: 'SiMongodb' },
  { name: 'Firebase', level: 80, category: 'technical', icon: 'SiFirebase' },
  { name: 'Tailwind CSS', level: 90, category: 'technical', icon: 'SiTailwindcss' },
  { name: 'Java', level: 75, category: 'technical', icon: 'FaJava' },
  { name: 'Spring Boot', level: 70, category: 'technical', icon: 'SiSpring' },
  { name: 'Kotlin', level: 70, category: 'technical', icon: 'SiKotlin' },
  { name: 'Python', level: 80, category: 'technical', icon: 'SiPython' },
  { name: 'C++', level: 70, category: 'technical', icon: 'SiCplusplus' },
  { name: 'HTML5 & CSS3', level: 95, category: 'technical', icon: 'SiHtml5' },
  { name: 'JavaScript', level: 90, category: 'technical', icon: 'SiJavascript' },
  
  // Tools
  { name: 'Figma', level: 95, category: 'tools', icon: 'SiFigma' },
  { name: 'Git & GitHub', level: 90, category: 'tools', icon: 'SiGithub' },
  { name: 'Android Studio', level: 80, category: 'tools', icon: 'SiAndroidstudio' },
  { name: 'VS Code', level: 90, category: 'tools', icon: 'SiVisualstudiocode' },
  { name: 'Adobe Illustrator', level: 85, category: 'tools', icon: 'SiAdobeillustrator' },
  { name: 'Adobe Photoshop', level: 80, category: 'tools', icon: 'SiAdobephotoshop' },
  { name: 'Canva', level: 90, category: 'tools', icon: 'SiCanva' },
  { name: 'Postman', level: 80, category: 'tools', icon: 'SiPostman' },
  { name: 'Blender', level: 70, category: 'tools', icon: 'SiBlender' },
  { name: 'Unity', level: 75, category: 'tools', icon: 'SiUnity' },
  { name: 'Unreal Engine', level: 70, category: 'tools', icon: 'SiUnrealengine' },
  
  // Soft Skills (keep Lucide icons)
  { name: 'Problem Solving', level: 95, category: 'soft', icon: 'Lightbulb' },
  { name: 'Team Leadership', level: 85, category: 'soft', icon: 'Users' },
  { name: 'Communication', level: 90, category: 'soft', icon: 'MessageCircle' },
  { name: 'Project Management', level: 80, category: 'soft', icon: 'Target' }
];

export const education: Education[] = [
  {
    degree: 'BSc (Hons) in Information Technology',
    institution: 'Sri Lanka Institute of Information Technology',
    year: '2022 - Present',
    description: 'Specializing in Software Engineering with focus on full-stack development and UI/UX design.'
  },
  {
    degree: 'GCE Advanced Level',
    institution: 'Visakha Vidyalaya, Colombo',
    year: '2021',
    description: 'Physical Science stream with Mathematics, Physics, and Chemistry.'
  }
];

export const contactInfo: ContactInfo = {
  email: 'apeksharathgalle@gmail.com',
  phone: '+94 70 266 0480',
  linkedin: 'https://www.linkedin.com/in/apeksha-rathgalle-831190314/',
  github: 'https://github.com/ApekshaRathgalle'
};