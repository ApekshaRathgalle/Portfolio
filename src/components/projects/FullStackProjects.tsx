import React from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft, ExternalLink, Github, Calendar, Code, Sparkles } from 'lucide-react';
import { fullstackProjects } from '../../data/fullstackProjects';
import AnimatedButton from '../ui/AnimatedButton';

const FullStackProjects: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-gray-50 to-white dark:from-gray-900 dark:to-gray-800 transition-all duration-500">
      {/* Enhanced Animated Background Elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        {/* Primary floating elements */}
        <motion.div
          animate={{
            y: [-10, 10, -10],
            opacity: [0.3, 0.6, 0.3]
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute top-20 left-10 w-4 h-4 bg-emerald-500/30 dark:bg-emerald-400/40 rounded-full shadow-lg shadow-emerald-500/20 dark:shadow-emerald-400/20"
        />
        <motion.div
          animate={{
            y: [-10, 10, -10],
            opacity: [0.4, 0.7, 0.4]
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1
          }}
          className="absolute top-40 right-20 w-6 h-6 bg-blue-500/30 dark:bg-blue-400/40 rounded-full shadow-lg shadow-blue-500/20 dark:shadow-blue-400/20"
        />
        <motion.div
          animate={{
            y: [-10, 10, -10],
            opacity: [0.35, 0.65, 0.35]
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2
          }}
          className="absolute bottom-40 left-1/4 w-3 h-3 bg-purple-500/30 dark:bg-purple-400/40 rounded-full shadow-lg shadow-purple-500/20 dark:shadow-purple-400/20"
        />
        
        {/* Additional ambient elements */}
        <motion.div
          animate={{
            x: [-20, 20, -20],
            rotate: [0, 180, 360],
            opacity: [0.2, 0.5, 0.2]
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute top-1/3 right-1/4 w-8 h-8 border-2 border-emerald-300/40 dark:border-emerald-400/50 rounded-full"
        />
        <motion.div
          animate={{
            scale: [1, 1.5, 1],
            opacity: [0.15, 0.4, 0.15]
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1.5
          }}
          className="absolute bottom-1/3 right-1/3 w-12 h-12 bg-gradient-to-br from-pink-300/20 to-purple-300/20 dark:from-pink-400/30 dark:to-purple-400/30 rounded-full blur-sm"
        />
      </div>

      <div className="max-w-7xl mx-auto relative">
        {/* Enhanced Header with better contrast */}
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
                className="border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-200 hover:border-emerald-500 dark:hover:border-emerald-400 hover:text-emerald-600 dark:hover:text-emerald-300 bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm shadow-sm dark:shadow-gray-900/50 hover:shadow-md dark:hover:shadow-emerald-500/20 transition-all duration-300"
              >
                Back to Home
              </AnimatedButton>
            </motion.div>
            <div className="relative">
              <motion.div
                animate={{
                  scale: [1, 1.2, 1],
                  rotate: [0, 180, 360],
                  opacity: [0.6, 1, 0.6]
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
                className="absolute -top-2 -right-2"
              >
                <Sparkles className="w-5 h-5 text-emerald-600 dark:text-emerald-300 drop-shadow-sm" />
              </motion.div>
              <motion.h1 
                className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-gray-50 transition-colors duration-300 drop-shadow-sm"
                whileHover={{ scale: 1.02 }}
                transition={{ type: "spring", stiffness: 400, damping: 25 }}
              >
                Full Stack{' '}
                <motion.span 
                  className="bg-gradient-to-r from-emerald-600 via-emerald-500 to-teal-500 dark:from-emerald-400 dark:via-emerald-300 dark:to-teal-300 bg-clip-text text-transparent drop-shadow-sm"
                  animate={{
                    backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
                  }}
                  style={{
                    backgroundSize: '200% 200%',
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
                className="text-xl text-gray-600 dark:text-gray-300 mt-2 transition-colors duration-300 max-w-2xl"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.3 }}
              >
                End-to-end web applications with modern tech stacks
              </motion.p>
            </div>
          </div>
        </motion.div>

        {/* Enhanced Projects Grid */}
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
              className="bg-white/95 dark:bg-gray-800/95 rounded-2xl shadow-lg hover:shadow-2xl dark:shadow-gray-900/60 hover:shadow-emerald-500/10 dark:hover:shadow-emerald-400/20 transition-all duration-500 overflow-hidden cursor-pointer group border border-gray-200/50 dark:border-gray-700/50 hover:border-emerald-300/50 dark:hover:border-emerald-400/40 backdrop-blur-sm"
              style={{ transformStyle: 'preserve-3d' }}
            >
              {/* Project Image with enhanced overlay */}
              <div className="relative h-48 overflow-hidden">
                <motion.img
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.4 }}
                  src={project.imageUrl}
                  alt={project.title}
                  className="w-full h-full object-cover"
                />
                
                {/* Enhanced gradient overlay with better dark mode support */}
                <motion.div 
                  className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent dark:from-black/80 dark:via-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  initial={false}
                  whileHover={{
                    background: [
                      "linear-gradient(to top, rgba(0,0,0,0.6), rgba(0,0,0,0.2), transparent)",
                      "linear-gradient(to top, rgba(16,185,129,0.3), rgba(16,185,129,0.1), transparent)",
                      "linear-gradient(to top, rgba(0,0,0,0.6), rgba(0,0,0,0.2), transparent)"
                    ]
                  }}
                  transition={{ duration: 2, repeat: Infinity }}
                />
                
                {/* Enhanced featured badge with better visibility */}
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
                    className="absolute top-4 right-4 bg-gradient-to-r from-emerald-500 to-emerald-600 dark:from-emerald-400 dark:to-emerald-500 text-white px-3 py-1 rounded-full text-sm font-medium shadow-lg shadow-emerald-500/30 dark:shadow-emerald-400/40"
                  >
                    <motion.span
                      animate={{ opacity: [1, 0.8, 1] }}
                      transition={{ duration: 1.5, repeat: Infinity }}
                    >
                      ⭐ Featured
                    </motion.span>
                  </motion.div>
                )}

                {/* Enhanced overlay buttons with better contrast */}
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
                      className="p-2 bg-white/95 dark:bg-gray-800/95 rounded-lg hover:bg-white dark:hover:bg-gray-800 transition-all duration-300 shadow-lg shadow-black/10 dark:shadow-black/30 backdrop-blur-sm border border-white/20 dark:border-gray-700/50"
                    >
                      <ExternalLink className="w-4 h-4 text-gray-700 dark:text-gray-200" />
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
                      className="p-2 bg-white/95 dark:bg-gray-800/95 rounded-lg hover:bg-white dark:hover:bg-gray-800 transition-all duration-300 shadow-lg shadow-black/10 dark:shadow-black/30 backdrop-blur-sm border border-white/20 dark:border-gray-700/50"
                    >
                      <Github className="w-4 h-4 text-gray-700 dark:text-gray-200" />
                    </motion.a>
                  )}
                </motion.div>

                {/* Enhanced corner decoration with better visibility */}
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
                  <div className="w-8 h-8 border-2 border-emerald-400 dark:border-emerald-300 rounded-full flex items-center justify-center shadow-lg shadow-emerald-500/30 dark:shadow-emerald-400/40">
                    <div className="w-4 h-4 bg-emerald-400 dark:bg-emerald-300 rounded-full opacity-90 shadow-sm"></div>
                  </div>
                </motion.div>
              </div>

              {/* Enhanced Project Content */}
              <div className="p-6 space-y-4">
                <motion.div 
                  className="flex items-center justify-between"
                  whileHover={{ x: 2 }}
                  transition={{ type: "spring", stiffness: 400, damping: 25 }}
                >
                  <motion.h3 
                    className="text-xl font-bold text-gray-900 dark:text-gray-50 group-hover:text-emerald-600 dark:group-hover:text-emerald-300 transition-all duration-300"
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
                  className="text-gray-600 dark:text-gray-300 line-clamp-3 transition-colors duration-300 leading-relaxed"
                  whileHover={{ x: 4 }}
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                >
                  {project.description}
                </motion.p>

                {/* Enhanced Tech Stack with better contrast */}
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
                      className="px-3 py-1.5 bg-emerald-50 dark:bg-emerald-900/40 text-emerald-700 dark:text-emerald-200 text-xs rounded-lg font-medium transition-all duration-300 cursor-default border border-emerald-200/50 dark:border-emerald-700/50 shadow-sm"
                    >
                      {tech}
                    </motion.span>
                  ))}
                  {project.technologies.length > 3 && (
                    <motion.span 
                      className="px-4 py-2 bg-gradient-to-r from-gray-100 to-gray-200 dark:from-gray-700/80 dark:to-gray-600/80 text-gray-700 dark:text-gray-200 text-sm rounded-2xl font-bold transition-colors duration-300 border-2 border-gray-300/70 dark:border-gray-500/50 shadow-lg backdrop-blur-sm"
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
                  <span className="text-sm font-semibold">View Details</span>
                  <motion.div
                    animate={{ x: [0, 8, 0] }}
                    transition={{ 
                      duration: 1.5, 
                      repeat: Infinity,
                      ease: "easeInOut"
                    }}
                    className="ml-2 text-lg font-bold"
                  >
                    →
                  </motion.div>
                </motion.div>
              </div>

              {/* Enhanced hover glow effect */}
              <motion.div
                className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                style={{
                  background: 'radial-gradient(circle at 50% 50%, rgba(16,185,129,0.08) 0%, transparent 70%)'
                }}
                initial={false}
                whileHover={{
                  background: [
                    'radial-gradient(circle at 50% 50%, rgba(16,185,129,0.08) 0%, transparent 70%)',
                    'radial-gradient(circle at 30% 40%, rgba(16,185,129,0.12) 0%, transparent 70%)',
                    'radial-gradient(circle at 70% 60%, rgba(16,185,129,0.08) 0%, transparent 70%)',
                    'radial-gradient(circle at 50% 50%, rgba(16,185,129,0.08) 0%, transparent 70%)'
                  ]
                }}
                transition={{ duration: 3, repeat: Infinity }}
              />
            </motion.div>
          ))}
        </motion.div>

        {/* Dramatically enhanced scroll indicator */}
        <motion.div
          className="fixed bottom-8 right-8 opacity-70 dark:opacity-80 z-20"
          animate={{
            y: [0, -15, 0],
            opacity: [0.7, 1, 0.7]
          }}
          transition={{
            duration: 2.5,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        >
          <div className="relative">
            <div className="w-2 h-20 bg-gradient-to-t from-emerald-500 via-teal-400 to-transparent dark:from-emerald-400 dark:via-teal-300 rounded-full shadow-2xl shadow-emerald-500/50 dark:shadow-emerald-400/60"></div>
            <motion.div
              className="absolute top-0 left-0 w-2 h-8 bg-gradient-to-t from-emerald-300 to-white dark:from-emerald-200 dark:to-emerald-400 rounded-full"
              animate={{
                y: [0, 12, 0],
                opacity: [1, 0.3, 1]
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default FullStackProjects;