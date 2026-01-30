import React from 'react';
import { motion } from 'framer-motion';
import { skills } from '../../data/skills';
import * as LucideIcons from 'lucide-react';
import * as SimpleIcons from 'react-icons/si';
import * as FontAwesome from 'react-icons/fa';

const Skills: React.FC = () => {
  const skillCategories = {
    technical: skills.filter(skill => skill.category === 'technical'),
    tools: skills.filter(skill => skill.category === 'tools'),
    soft: skills.filter(skill => skill.category === 'soft')
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.2,
        staggerChildren: 0.05
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: { 
      opacity: 1, 
      x: 0,
      transition: { duration: 0.5, ease: [0.42, 0, 0.58, 1] }
    }
  } as const;

  // Icon color mapping for popular tools/technologies
  const getIconColor = (skillName: string, iconName: string) => {
    const colorMap: { [key: string]: string } = {
      // Programming Languages
      'JavaScript': '#F7DF1E',
      'TypeScript': '#3178C6',
      'Python': '#3776AB',
      'Java': '#007396',
      'C++': '#00599C',
      'C#': '#239120',
      'PHP': '#777BB4',
      'Ruby': '#CC342D',
      'Go': '#00ADD8',
      'Rust': '#000000',
      'Swift': '#FA7343',
      'Kotlin': '#7F52FF',
      
      // Frontend Frameworks/Libraries
      'React': '#61DAFB',
      'Vue': '#4FC08D',
      'Angular': '#DD0031',
      'Svelte': '#FF3E00',
      'Next.js': '#000000',
      'Nuxt': '#00DC82',
      'Gatsby': '#663399',
      
      // CSS/Styling
      'CSS': '#1572B6',
      'Sass': '#CC6699',
      'Tailwind': '#06B6D4',
      'Bootstrap': '#7952B3',
      'Material-UI': '#007FFF',
      'Chakra UI': '#319795',
      
      // Backend/Server
      'Node.js': '#339933',
      'Express': '#000000',
      'Django': '#092E20',
      'Flask': '#000000',
      'Spring': '#6DB33F',
      'Laravel': '#FF2D20',
      'Rails': '#CC0000',
      
      // Databases
      'MongoDB': '#47A248',
      'PostgreSQL': '#4169E1',
      'MySQL': '#4479A1',
      'Redis': '#DC382D',
      'Firebase': '#FFCA28',
      'Supabase': '#3ECF8E',
      
      // Cloud/DevOps
      'AWS': '#FF9900',
      'Azure': '#0078D4',
      'Google Cloud': '#4285F4',
      'Docker': '#2496ED',
      'Kubernetes': '#326CE5',
      'Jenkins': '#D24939',
      'GitHub Actions': '#2088FF',
      'GitLab': '#FCA121',
      
      // Tools
      'Git': '#F05032',
      'GitHub': '#181717',
      'GitLab': '#FCA121',
      'VS Code': '#007ACC',
      'Figma': '#F24E1E',
      'Adobe XD': '#FF61F6',
      'Postman': '#FF6C37',
      'Jira': '#0052CC',
      'Slack': '#4A154B',
      'Notion': '#000000',
      
      // Testing
      'Jest': '#C21325',
      'Cypress': '#17202C',
      'Selenium': '#43B02A',
      
      // Mobile
      'React Native': '#61DAFB',
      'Flutter': '#02569B',
      'Ionic': '#3880FF',
      
      // Other
      'GraphQL': '#E10098',
      'Webpack': '#8DD6F9',
      'Vite': '#646CFF',
      'Babel': '#F9DC3E',
      'ESLint': '#4B32C3',
      'Prettier': '#F7B93E',
      'npm': '#CB3837',
      'Yarn': '#2C8EBB',
    };

    return colorMap[skillName] || '#6B7280'; // Default gray if not found
  };

  // Component for scrolling skills (tools and technical)
  const ScrollingSkills: React.FC<{ skills: typeof skillCategories.technical }> = ({ skills }) => {
    // Duplicate skills array for seamless loop
    const duplicatedSkills = [...skills, ...skills];

    return (
      <div className="relative overflow-hidden py-8">
        {/* Gradient overlays for fade effect */}
        <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-gray-50 via-gray-50/80 to-transparent dark:from-gray-900 dark:via-gray-900/80 z-10" />
        <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-gray-50 via-gray-50/80 to-transparent dark:from-gray-900 dark:via-gray-900/80 z-10" />

        <motion.div
          className="flex gap-6"
          animate={{
            x: [0, -136 * skills.length], // 136 = card width (128px) + gap (8px)
          }}
          transition={{
            x: {
              repeat: Infinity,
              repeatType: "loop",
              duration: skills.length * 2.5, // Adjust speed here
              ease: "linear",
            },
          }}
        >
          {duplicatedSkills.map((skill, index) => {
            // Determine which icon library to use
            let IconComponent;
            
            if (skill.icon.startsWith('Si')) {
              IconComponent = (SimpleIcons as any)[skill.icon];
            } else if (skill.icon.startsWith('Fa')) {
              IconComponent = (FontAwesome as any)[skill.icon];
            } else {
              IconComponent = (LucideIcons as any)[skill.icon] || LucideIcons.Code2;
            }

            const iconColor = getIconColor(skill.name, skill.icon);

            return (
              <motion.div
                key={`${skill.name}-${index}`}
                whileHover={{ scale: 1.1, y: -5 }}
                className="flex-shrink-0 w-32 h-32 bg-white/80 dark:bg-gray-800/80 
                          backdrop-blur-sm rounded-2xl p-4
                          border border-gray-200/50 dark:border-gray-700/50
                          hover:border-gray-300 dark:hover:border-gray-600
                          hover:shadow-xl hover:shadow-gray-500/10 dark:hover:shadow-gray-400/10
                          transition-all duration-300 cursor-pointer
                          flex flex-col items-center justify-center gap-3"
              >
                <motion.div
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.6 }}
                  className="w-16 h-16 rounded-xl bg-gray-50/50 dark:bg-gray-700/30
                            flex items-center justify-center"
                >
                  {IconComponent && (
                    <IconComponent 
                      className="w-10 h-10" 
                      style={{ color: iconColor }}
                    />
                  )}
                </motion.div>
                
                <h4 className="text-xs font-semibold text-gray-900 dark:text-gray-100 
                             text-center line-clamp-2">
                  {skill.name}
                </h4>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    );
  };

  // Component for soft skills (without percentages)
  const SoftSkillItem: React.FC<{ skill: typeof skills[0]; index: number }> = ({ skill, index }) => {
    const IconComponent = (LucideIcons as any)[skill.icon] || LucideIcons.Code2;
    
    return (
      <motion.div
        variants={itemVariants}
        className="group relative"
      >
        <div className="flex items-center py-4 px-6 rounded-2xl 
                       bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm
                       border border-gray-200/50 dark:border-gray-700/50
                       hover:bg-white/80 dark:hover:bg-gray-800/80
                       hover:border-emerald-500/30 dark:hover:border-emerald-400/30
                       transition-all duration-300 cursor-pointer
                       hover:shadow-lg hover:shadow-emerald-500/10 dark:hover:shadow-emerald-400/10">
          
          <motion.div
            whileHover={{ scale: 1.1, rotate: 5 }}
            className="w-10 h-10 rounded-xl bg-emerald-100 dark:bg-emerald-900/30
                      flex items-center justify-center
                      group-hover:bg-emerald-200 dark:group-hover:bg-emerald-800/50
                      transition-colors duration-300"
          >
            <IconComponent className="w-5 h-5 text-emerald-600 dark:text-emerald-400" />
          </motion.div>
          
          <div className="flex-1 ml-4">
            <h4 className="text-sm font-semibold text-gray-900 dark:text-gray-100 
                         group-hover:text-emerald-600 dark:group-hover:text-emerald-400
                         transition-colors duration-300">
              {skill.name}
            </h4>
          </div>
        </div>

        <motion.div
          className="absolute inset-0 rounded-2xl bg-gradient-to-r 
                     from-emerald-500/10 via-emerald-400/5 to-emerald-600/10
                     opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10
                     blur-xl"
          initial={false}
          whileHover={{ scale: 1.05 }}
        />
      </motion.div>
    );
  };

  const ScrollingSection: React.FC<{ 
    title: string; 
    skills: typeof skillCategories.technical;
    accent: string;
  }> = ({ title, skills, accent }) => (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-50px" }}
      className="space-y-6"
    >
      <motion.div
        variants={itemVariants}
        className="flex items-center space-x-4"
      >
        <div className={`w-1 h-8 rounded-full ${accent}`} />
        <h3 className="text-2xl font-bold text-gray-900 dark:text-gray-100">
          {title}
        </h3>
        <div className="flex-1 h-px bg-gradient-to-r from-gray-300 dark:from-gray-700 to-transparent" />
      </motion.div>

      <ScrollingSkills skills={skills} />
    </motion.div>
  );

  const SoftSkillsSection: React.FC<{ 
    title: string; 
    skills: typeof skillCategories.soft;
    accent: string;
  }> = ({ title, skills, accent }) => (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-50px" }}
      className="space-y-6"
    >
      <motion.div
        variants={itemVariants}
        className="flex items-center space-x-4"
      >
        <div className={`w-1 h-8 rounded-full ${accent}`} />
        <h3 className="text-2xl font-bold text-gray-900 dark:text-gray-100">
          {title}
        </h3>
        <div className="flex-1 h-px bg-gradient-to-r from-gray-300 dark:from-gray-700 to-transparent" />
      </motion.div>

      <div className="space-y-3">
        {skills.map((skill, index) => (
          <SoftSkillItem key={skill.name} skill={skill} index={index} />
        ))}
      </div>
    </motion.div>
  );

  return (
    <section id="skills" className="py-20 px-4 sm:px-6 lg:px-8 
                                  bg-gradient-to-br from-gray-50 via-white to-gray-100
                                  dark:from-gray-900 dark:via-gray-900 dark:to-gray-800
                                  relative overflow-hidden">
      
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-20 left-10 w-72 h-72 bg-emerald-200 dark:bg-emerald-900/20 
                       rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-emerald-100 dark:bg-emerald-900/10 
                       rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }} />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
          className="text-center mb-16"
        >
          <motion.h2
            variants={itemVariants}
            className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-gray-100 mb-6"
          >
            Skills & <span className="text-emerald-600 dark:text-emerald-400">Expertise</span>
          </motion.h2>
          <motion.p
            variants={itemVariants}
            className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto"
          >
            A comprehensive toolkit for building modern digital experiences
          </motion.p>
        </motion.div>

        <div className="space-y-16">
          <ScrollingSection
            title="Technical Skills"
            skills={skillCategories.technical}
            accent="bg-emerald-500"
          />
          
          <ScrollingSection
            title="Tools & Technologies"
            skills={skillCategories.tools}
            accent="bg-emerald-400"
          />
          
          <SoftSkillsSection
            title="Core Strengths"
            skills={skillCategories.soft}
            accent="bg-emerald-600"
          />
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="mt-16 text-center"
        >
          <div className="inline-flex items-center space-x-2 px-4 py-2 
                         bg-emerald-100 dark:bg-emerald-900/30 
                         rounded-full text-sm text-emerald-700 dark:text-emerald-300">
            <div className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse" />
            <span>Continuously learning and growing</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;