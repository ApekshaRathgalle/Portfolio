import React from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft, ExternalLink, Github, Calendar, Code, Sparkles } from 'lucide-react';
import { fullstackProjects } from '../../data/fullstackProjects';
import AnimatedButton from '../ui/AnimatedButton';

const FullStackProjects: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen py-20 px-4 sm:px-6 lg:px-8 bg-white dark:bg-gray-900 transition-colors duration-500">
      {/* Animated Background Elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <motion.div
          animate={{
            y: [-10, 10, -10]
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute top-20 left-10 w-4 h-4 bg-emerald-500/20 dark:bg-emerald-400/30 rounded-full"
        />
        <motion.div
          animate={{
            y: [-10, 10, -10]
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1
          }}
          className="absolute top-40 right-20 w-6 h-6 bg-blue-500/20 dark:bg-blue-400/30 rounded-full"
        />
        <motion.div
          animate={{
            y: [-10, 10, -10]
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2
          }}
          className="absolute bottom-40 left-1/4 w-3 h-3 bg-purple-500/20 dark:bg-purple-400/30 rounded-full"
        />
      </div>

      <div className="max-w-7xl mx-auto relative">
        {/* Enhanced Header */}
        <motion.div
          initial={{ opacity: 0, y: -50, scale: 0.8 }}
          animate={{
            opacity: 1,
            y: 0,
            scale: 1
          }}
          transition={{
            type: "spring",
            stiffness: 100,
            damping: 15
          }}
          className="flex items-center justify-between mb-12"
        >
          <div className="flex items-center space-x-4">
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <AnimatedButton
                variant="outline"
                onClick={() => navigate('/')}
                icon={ArrowLeft}
                className="border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 hover:border-emerald-500 dark:hover:border-emerald-400 hover:text-emerald-600 dark:hover:text-emerald-400 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm"
              >
                Back to Home
              </AnimatedButton>
            </motion.div>
            <div className="relative">
              <motion.div
                animate={{
                  scale: [1, 1.2, 1],
                  rotate: [0, 180, 360],
                  opacity: [0.5, 1, 0.5]
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
                className="absolute -top-2 -right-2"
              >
                <Sparkles className="w-5 h-5 text-emerald-500 dark:text-emerald-400" />
              </motion.div>
              <motion.h1 
                className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white transition-colors duration-300"
                whileHover={{ scale: 1.02 }}
                transition={{ type: "spring", stiffness: 400, damping: 25 }}
              >
                Full Stack{' '}
                <motion.span 
                  className="text-emerald-600 dark:text-emerald-400 bg-gradient-to-r from-emerald-600 to-emerald-500 dark:from-emerald-400 dark:to-emerald-300 bg-clip-text text-transparent"
                  animate={{
                    backgroundPosition: ['0%', '100%', '0%'],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                >
                  Projects
                </motion.span>
              </motion.h1>
              <motion.p 
                className="text-xl text-gray-600 dark:text-gray-300 mt-2 transition-colors duration-300"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.3 }}
              >
                End-to-end web applications with modern tech stacks
              </motion.p>
            </div>
          </div>
        </motion.div>

        {/* Projects Grid */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{
            opacity: 1
          }}
          transition={{
            delayChildren: 0.1,
            staggerChildren: 0.15
          }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {fullstackProjects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 50, rotateX: -15 }}
              animate={{ 
                opacity: 1, 
                y: 0, 
                rotateX: 0
              }}
              transition={{ 
                duration: 0.6, 
                ease: [0.42, 0, 0.58, 1],
                delay: index * 0.15
              }}
              whileHover={{ 
                scale: 1.03, 
                y: -12,
                rotateY: 5,
                rotateX: 5
              }}
              whileTap={{ scale: 0.98 }}
              onClick={() => navigate(`/projects/fullstack/${project.id}`)}
              className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg hover:shadow-2xl dark:shadow-gray-900/50 transition-all duration-500 overflow-hidden cursor-pointer group border-2 border-transparent hover:border-emerald-500/20 dark:hover:border-emerald-400/30 backdrop-blur-sm"
              style={{ transformStyle: 'preserve-3d' }}
            >
              {/* Project Image */}
              <div className="relative h-48 overflow-hidden">
                <motion.img
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.4 }}
                  src={project.imageUrl}
                  alt={project.title}
                  className="w-full h-full object-cover"
                />
                
                {/* Enhanced gradient overlay */}
                <motion.div 
                  className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  initial={false}
                  whileHover={{
                    background: [
                      "linear-gradient(to top, rgba(0,0,0,0.7), rgba(0,0,0,0.3), transparent)",
                      "linear-gradient(to top, rgba(16,185,129,0.3), rgba(16,185,129,0.1), transparent)",
                      "linear-gradient(to top, rgba(0,0,0,0.7), rgba(0,0,0,0.3), transparent)"
                    ]
                  }}
                  transition={{ duration: 2, repeat: Infinity }}
                />
                
                {/* Animated featured badge */}
                {project.featured && (
                  <motion.div
                    initial={{ scale: 0, rotate: -180, opacity: 0 }}
                    animate={{ scale: 1, rotate: 0, opacity: 1 }}
                    whileHover={{ 
                      rotate: [0, -10, 10, 0],
                      scale: [1, 1.1, 1]
                    }}
                    transition={{ 
                      delay: 0.5 + index * 0.1, 
                      type: "spring",
                      stiffness: 200,
                      damping: 10
                    }}
                    className="absolute top-4 right-4 bg-gradient-to-r from-emerald-500 to-emerald-600 dark:from-emerald-400 dark:to-emerald-500 text-white px-3 py-1 rounded-full text-sm font-medium shadow-lg"
                  >
                    <motion.span
                      animate={{ opacity: [1, 0.8, 1] }}
                      transition={{ duration: 1.5, repeat: Infinity }}
                    >
                      ⭐ Featured
                    </motion.span>
                  </motion.div>
                )}

                {/* Enhanced overlay buttons */}
                <motion.div 
                  className="absolute top-4 left-4 flex space-x-2 opacity-0 group-hover:opacity-100 transition-all duration-500"
                  initial={{ y: -20 }}
                  whileHover={{ y: 0 }}
                >
                  {project.demoUrl && (
                    <motion.a
                      href={project.demoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ 
                        scale: 1.15,
                        rotate: 360
                      }}
                      whileTap={{ scale: 0.9 }}
                      onClick={(e) => e.stopPropagation()}
                      className="p-2 bg-white/90 dark:bg-gray-800/90 rounded-lg hover:bg-white dark:hover:bg-gray-800 transition-all duration-300 shadow-lg backdrop-blur-sm"
                    >
                      <ExternalLink className="w-4 h-4 text-gray-700 dark:text-gray-300" />
                    </motion.a>
                  )}
                  {project.githubUrl && (
                    <motion.a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ 
                        scale: 1.15,
                        rotate: -360
                      }}
                      whileTap={{ scale: 0.9 }}
                      onClick={(e) => e.stopPropagation()}
                      className="p-2 bg-white/90 dark:bg-gray-800/90 rounded-lg hover:bg-white dark:hover:bg-gray-800 transition-all duration-300 shadow-lg backdrop-blur-sm"
                    >
                      <Github className="w-4 h-4 text-gray-700 dark:text-gray-300" />
                    </motion.a>
                  )}
                </motion.div>

                {/* Animated corner decoration */}
                <motion.div
                  className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  animate={{
                    rotate: [0, 360],
                    scale: [1, 1.1, 1]
                  }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                >
                  <div className="w-8 h-8 border-2 border-emerald-400 dark:border-emerald-300 rounded-full flex items-center justify-center">
                    <div className="w-4 h-4 bg-emerald-400 dark:bg-emerald-300 rounded-full opacity-80"></div>
                  </div>
                </motion.div>
              </div>

              {/* Project Content */}
              <div className="p-6 space-y-4">
                <motion.div 
                  className="flex items-center justify-between"
                  whileHover={{ x: 2 }}
                  transition={{ type: "spring", stiffness: 400, damping: 25 }}
                >
                  <motion.h3 
                    className="text-xl font-bold text-gray-900 dark:text-white group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-all duration-300"
                    whileHover={{ scale: 1.02 }}
                  >
                    {project.title}
                  </motion.h3>
                  <motion.div 
                    className="flex items-center text-sm text-gray-500 dark:text-gray-400"
                    whileHover={{ scale: 1.05 }}
                  >
                    <Calendar className="w-4 h-4 mr-1" />
                    {project.timeline}
                  </motion.div>
                </motion.div>

                <motion.p 
                  className="text-gray-600 dark:text-gray-300 line-clamp-3 transition-colors duration-300"
                  whileHover={{ x: 4 }}
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                >
                  {project.description}
                </motion.p>

                {/* Enhanced Tech Stack */}
                <div className="flex flex-wrap gap-2">
                  {project.technologies.slice(0, 3).map((tech, techIndex) => (
                    <motion.span
                      key={tech}
                      initial={{ opacity: 0, scale: 0 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: (index * 0.15) + (techIndex * 0.1) }}
                      whileHover={{ 
                        scale: 1.1,
                        rotate: [0, -2, 2, 0]
                      }}
                      className="px-2 py-1 bg-emerald-100 dark:bg-emerald-900/30 text-emerald-700 dark:text-emerald-300 text-xs rounded-md font-medium transition-all duration-300 cursor-default"
                    >
                      {tech}
                    </motion.span>
                  ))}
                  {project.technologies.length > 3 && (
                    <motion.span 
                      className="px-2 py-1 bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300 text-xs rounded-md font-medium transition-colors duration-300"
                      whileHover={{ scale: 1.05 }}
                    >
                      +{project.technologies.length - 3} more
                    </motion.span>
                  )}
                </div>

                {/* Enhanced View Details Button */}
                <motion.div
                  whileHover={{ x: 8 }}
                  className="flex items-center text-emerald-600 dark:text-emerald-400 font-medium group-hover:text-emerald-700 dark:group-hover:text-emerald-300 transition-colors duration-300 pt-2 cursor-pointer"
                >
                  <motion.div
                    animate={{
                      rotate: [0, 360]
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      ease: "easeInOut"
                    }}
                  >
                    <Code className="w-4 h-4 mr-2" />
                  </motion.div>
                  <span>View Details</span>
                  <motion.div
                    animate={{ x: [0, 8, 0] }}
                    transition={{ 
                      duration: 1.5, 
                      repeat: Infinity,
                      ease: "easeInOut"
                    }}
                    className="ml-2 text-lg"
                  >
                    →
                  </motion.div>
                </motion.div>
              </div>

              {/* Hover glow effect */}
              <motion.div
                className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                style={{
                  background: 'radial-gradient(circle at 50% 50%, rgba(16,185,129,0.1) 0%, transparent 70%)'
                }}
                initial={false}
                whileHover={{
                  background: [
                    'radial-gradient(circle at 50% 50%, rgba(16,185,129,0.1) 0%, transparent 70%)',
                    'radial-gradient(circle at 30% 40%, rgba(16,185,129,0.15) 0%, transparent 70%)',
                    'radial-gradient(circle at 70% 60%, rgba(16,185,129,0.1) 0%, transparent 70%)',
                    'radial-gradient(circle at 50% 50%, rgba(16,185,129,0.1) 0%, transparent 70%)'
                  ]
                }}
                transition={{ duration: 3, repeat: Infinity }}
              />
            </motion.div>
          ))}
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          className="fixed bottom-8 right-8 opacity-50"
          animate={{
            y: [0, -10, 0]
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        >
          <div className="w-1 h-16 bg-gradient-to-t from-emerald-500 to-transparent dark:from-emerald-400 rounded-full"></div>
        </motion.div>
      </div>
    </div>
  );
};

export default FullStackProjects;