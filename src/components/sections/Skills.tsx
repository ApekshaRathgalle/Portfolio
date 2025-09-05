import React from 'react';
import { motion } from 'framer-motion';
import { skills } from '../../data/skills';
import * as LucideIcons from 'lucide-react';

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

  const SkillItem: React.FC<{ skill: typeof skills[0]; index: number }> = ({ skill, index }) => {
    const IconComponent = (LucideIcons as any)[skill.icon] || LucideIcons.Code2;
    
    return (
      <motion.div
        variants={itemVariants}
        className="group relative"
      >
        {/* Main skill container */}
        <div className="flex items-center justify-between py-4 px-6 rounded-2xl 
                       bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm
                       border border-gray-200/50 dark:border-gray-700/50
                       hover:bg-white/80 dark:hover:bg-gray-800/80
                       hover:border-emerald-500/30 dark:hover:border-emerald-400/30
                       transition-all duration-300 cursor-pointer
                       hover:shadow-lg hover:shadow-emerald-500/10 dark:hover:shadow-emerald-400/10">
          
          {/* Left side - Icon and name */}
          <div className="flex items-center space-x-4 flex-1">
            <motion.div
              whileHover={{ scale: 1.1, rotate: 5 }}
              className="w-10 h-10 rounded-xl bg-emerald-100 dark:bg-emerald-900/30
                        flex items-center justify-center
                        group-hover:bg-emerald-200 dark:group-hover:bg-emerald-800/50
                        transition-colors duration-300"
            >
              <IconComponent className="w-5 h-5 text-emerald-600 dark:text-emerald-400" />
            </motion.div>
            
            <div className="flex-1">
              <h4 className="text-sm font-semibold text-gray-900 dark:text-gray-100 
                           group-hover:text-emerald-600 dark:group-hover:text-emerald-400
                           transition-colors duration-300">
                {skill.name}
              </h4>
            </div>
          </div>

          {/* Right side - Level indicator */}
          <div className="flex items-center space-x-3">
            <span className="text-sm font-medium text-gray-600 dark:text-gray-400">
              {skill.level}%
            </span>
            
            {/* Circular progress indicator */}
            <div className="relative w-12 h-12">
              <svg className="w-12 h-12 transform -rotate-90" viewBox="0 0 48 48">
                {/* Background circle */}
                <circle
                  cx="24"
                  cy="24"
                  r="20"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="3"
                  className="text-gray-200 dark:text-gray-700"
                />
                {/* Progress circle */}
                <motion.circle
                  cx="24"
                  cy="24"
                  r="20"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="3"
                  strokeLinecap="round"
                  className="text-emerald-500 dark:text-emerald-400"
                  initial={{ pathLength: 0 }}
                  whileInView={{ pathLength: skill.level / 100 }}
                  viewport={{ once: true }}
                  transition={{ 
                    duration: 1.5, 
                    delay: index * 0.1,
                    ease: "easeOut"
                  }}
                  style={{
                    strokeDasharray: "125.66", // 2 * π * 20
                    strokeDashoffset: "125.66"
                  }}
                />
              </svg>
              
              {/* Center dot */}
              <motion.div
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ 
                  duration: 0.3, 
                  delay: 1 + index * 0.1,
                  type: "spring",
                  stiffness: 400
                }}
                className="absolute inset-0 flex items-center justify-center"
              >
                <div className="w-2 h-2 rounded-full bg-emerald-500 dark:bg-emerald-400" />
              </motion.div>
            </div>
          </div>
        </div>

        {/* Animated background glow */}
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

  const CategorySection: React.FC<{ 
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
        <h3 className="text-xl font-bold text-gray-900 dark:text-gray-100">
          {title}
        </h3>
        <div className="flex-1 h-px bg-gradient-to-r from-gray-300 dark:from-gray-700 to-transparent" />
      </motion.div>

      <div className="space-y-3">
        {skills.map((skill, index) => (
          <SkillItem key={skill.name} skill={skill} index={index} />
        ))}
      </div>
    </motion.div>
  );

  return (
    <section id="skills" className="py-20 px-4 sm:px-6 lg:px-8 
                                  bg-gradient-to-br from-gray-50 via-white to-gray-100
                                  dark:from-gray-900 dark:via-gray-900 dark:to-gray-800
                                  relative overflow-hidden">
      
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-20 left-10 w-72 h-72 bg-emerald-200 dark:bg-emerald-900/20 
                       rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-emerald-100 dark:bg-emerald-900/10 
                       rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }} />
      </div>

      <div className="max-w-4xl mx-auto relative z-10">
        {/* Header */}
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

        {/* Skills sections */}
        <div className="space-y-12">
          <CategorySection
            title="Technical Skills"
            skills={skillCategories.technical}
            accent="bg-emerald-500"
          />
          
          <CategorySection
            title="Tools & Technologies"
            skills={skillCategories.tools}
            accent="bg-emerald-400"
          />
          
          <CategorySection
            title="Core Strengths"
            skills={skillCategories.soft}
            accent="bg-emerald-600"
          />
        </div>

        {/* Bottom decoration */}
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