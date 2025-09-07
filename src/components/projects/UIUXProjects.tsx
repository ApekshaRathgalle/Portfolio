import React from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft, ExternalLink, Calendar, Palette, Users, TrendingUp, Sparkles } from 'lucide-react';
import { uiuxProjects } from '../../data/uiuxProjects';
import AnimatedButton from '../ui/AnimatedButton';

const UIUXProjects: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen py-20 px-4 sm:px-6 lg:px-8 bg-white dark:bg-gray-900 transition-colors duration-500">
      {/* Animated Background Elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <motion.div
          animate={{
            y: [-15, 15, -15],
            x: [-10, 10, -10]
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute top-20 left-10 w-6 h-6 bg-emerald-500/10 dark:bg-emerald-400/20 rounded-full blur-sm"
        />
        <motion.div
          animate={{
            y: [-20, 20, -20],
            x: [10, -10, 10]
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2
          }}
          className="absolute top-60 right-20 w-8 h-8 bg-purple-500/10 dark:bg-purple-400/20 rounded-full blur-sm"
        />
        <motion.div
          animate={{
            y: [-10, 10, -10],
            rotate: [0, 180, 360]
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 4
          }}
          className="absolute bottom-32 left-1/3 w-4 h-4 bg-blue-500/10 dark:bg-blue-400/20 rounded-full blur-sm"
        />
      </div>

      <div className="max-w-7xl mx-auto relative">
        {/* Enhanced Header */}
        <motion.div
          initial={{ opacity: 0, y: -30, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ type: "spring", stiffness: 100, damping: 15 }}
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
                  rotate: [0, 360],
                  scale: [1, 1.2, 1]
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
                className="absolute -top-3 -right-3"
              >
                <Sparkles className="w-6 h-6 text-emerald-500 dark:text-emerald-400 opacity-70" />
              </motion.div>
              <motion.h1 
                className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white transition-colors duration-300"
                whileHover={{ scale: 1.02 }}
              >
                UI/UX{' '}
                <motion.span 
                  className="text-emerald-600 dark:text-emerald-400 bg-gradient-to-r from-emerald-600 to-emerald-500 dark:from-emerald-400 dark:to-emerald-300 bg-clip-text text-transparent"
                  animate={{
                    backgroundPosition: ['0%', '100%', '0%']
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                >
                  Design
                </motion.span>
              </motion.h1>
              <motion.p 
                className="text-xl text-gray-600 dark:text-gray-300 mt-2 transition-colors duration-300"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2 }}
              >
                User-centered design solutions and comprehensive case studies
              </motion.p>
            </div>
          </div>
        </motion.div>

        {/* Projects Grid */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{
            delayChildren: 0.1,
            staggerChildren: 0.2
          }}
          className="space-y-12"
        >
          {uiuxProjects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 40, rotateX: -15 }}
              animate={{ 
                opacity: 1, 
                y: 0, 
                rotateX: 0
              }}
              transition={{ 
                duration: 0.6, 
                ease: [0.42, 0, 0.58, 1],
                delay: index * 0.2
              }}
              whileHover={{ 
                scale: 1.02, 
                y: -8
              }}
              onClick={() => navigate(`/projects/uiux/${project.id}`)}
              className="bg-white dark:bg-gray-800 rounded-3xl shadow-xl hover:shadow-2xl dark:shadow-gray-900/50 transition-all duration-500 overflow-hidden cursor-pointer group border-2 border-transparent hover:border-emerald-500/20 dark:hover:border-emerald-400/30"
            >
              <div className={`grid ${index % 2 === 0 ? 'lg:grid-cols-2' : 'lg:grid-cols-2'} gap-0`}>
                {/* Project Image */}
                <div className={`relative h-80 lg:h-auto overflow-hidden ${index % 2 !== 0 ? 'lg:order-2' : ''}`}>
                  <motion.img
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.6 }}
                    src={project.imageUrl}
                    alt={project.title}
                    className="w-full h-full object-cover"
                  />
                  <motion.div 
                    className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    initial={false}
                    whileHover={{
                      background: [
                        "linear-gradient(to top, rgba(0,0,0,0.4), transparent, transparent)",
                        "linear-gradient(to top, rgba(16,185,129,0.2), transparent, transparent)",
                        "linear-gradient(to top, rgba(0,0,0,0.4), transparent, transparent)"
                      ]
                    }}
                    transition={{ duration: 2, repeat: Infinity }}
                  />
                  
                  {/* Enhanced featured badge */}
                  {project.featured && (
                    <motion.div
                      initial={{ scale: 0, rotate: -180 }}
                      animate={{ scale: 1, rotate: 0 }}
                      whileHover={{ 
                        rotate: [0, -5, 5, 0],
                        scale: [1, 1.1, 1]
                      }}
                      transition={{ 
                        delay: 0.5 + index * 0.1, 
                        type: "spring" 
                      }}
                      className="absolute top-6 right-6 bg-gradient-to-r from-emerald-500 to-emerald-600 dark:from-emerald-400 dark:to-emerald-500 text-white px-4 py-2 rounded-full text-sm font-medium shadow-lg"
                    >
                      <motion.span
                        animate={{ opacity: [1, 0.8, 1] }}
                        transition={{ duration: 2, repeat: Infinity }}
                      >
                        ✨ Featured Work
                      </motion.span>
                    </motion.div>
                  )}

                  {/* Enhanced demo link overlay */}
                  {project.demoUrl && (
                    <div className="absolute bottom-6 right-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
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
                        className="p-3 bg-white/95 dark:bg-gray-800/95 rounded-xl hover:bg-white dark:hover:bg-gray-800 transition-colors duration-200 shadow-lg backdrop-blur-sm"
                      >
                        <ExternalLink className="w-5 h-5 text-gray-700 dark:text-gray-300" />
                      </motion.a>
                    </div>
                  )}

                  {/* Corner decoration */}
                  <motion.div
                    className="absolute top-6 left-6 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                    animate={{
                      rotate: [0, 360],
                      scale: [1, 1.2, 1]
                    }}
                    transition={{
                      duration: 6,
                      repeat: Infinity,
                      ease: "easeInOut"
                    }}
                  >
                    <div className="w-8 h-8 border-2 border-white/50 dark:border-gray-300/50 rounded-full flex items-center justify-center">
                      <div className="w-4 h-4 bg-white/70 dark:bg-gray-300/70 rounded-full"></div>
                    </div>
                  </motion.div>
                </div>

                {/* Enhanced Project Content */}
                <div className={`p-8 lg:p-12 flex flex-col justify-center space-y-6 ${index % 2 !== 0 ? 'lg:order-1' : ''} bg-white dark:bg-gray-800 transition-colors duration-300`}>
                  <motion.div 
                    className="flex items-center justify-between"
                    whileHover={{ x: 2 }}
                  >
                    <motion.div
                      whileHover={{ rotate: 360 }}
                      transition={{ duration: 0.5 }}
                      className="w-14 h-14 bg-emerald-100 dark:bg-emerald-900/50 rounded-xl flex items-center justify-center group-hover:bg-emerald-200 dark:group-hover:bg-emerald-800/60 transition-colors duration-300"
                    >
                      <Palette className="w-7 h-7 text-emerald-600 dark:text-emerald-400" />
                    </motion.div>
                    <motion.div 
                      className="flex items-center text-sm text-gray-500 dark:text-gray-400"
                      whileHover={{ scale: 1.05 }}
                    >
                      <Calendar className="w-4 h-4 mr-1" />
                      {project.timeline}
                    </motion.div>
                  </motion.div>

                  <div>
                    <motion.h3 
  className="text-3xl font-bold text-gray-900 dark:text-white group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors duration-300 mb-4"
  whileHover={{ scale: 1.02 }}
>
  {project.title}
</motion.h3>
                    <motion.p 
                      className="text-gray-600 dark:text-gray-300 text-lg leading-relaxed mb-6 transition-colors duration-300"
                      whileHover={{ x: 4 }}
                    >
                      {project.description}
                    </motion.p>
                  </div>

                  {/* Enhanced key highlights */}
                  <div className="space-y-3">
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.slice(0, 4).map((tech, techIndex) => (
                        <motion.span
                          key={tech}
                          initial={{ opacity: 0, scale: 0 }}
                          animate={{ opacity: 1, scale: 1 }}
                          transition={{ delay: (index * 0.2) + (techIndex * 0.1) }}
                          whileHover={{ 
                            scale: 1.1,
                            rotate: [0, -2, 2, 0]
                          }}
                          className="px-3 py-2 bg-emerald-100 dark:bg-emerald-900/30 text-emerald-700 dark:text-emerald-300 text-sm rounded-lg font-medium transition-colors duration-300"
                        >
                          {tech}
                        </motion.span>
                      ))}
                    </div>
                  </div>

                  {/* Enhanced View Case Study Button */}
                  <motion.div
                    whileHover={{ x: 8 }}
                    className="flex items-center text-emerald-600 dark:text-emerald-400 font-semibold text-lg group-hover:text-emerald-700 dark:group-hover:text-emerald-300 transition-colors duration-300 pt-4"
                  >
                    <motion.div
                      animate={{ rotate: [0, 360] }}
                      transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                    >
                      <Palette className="w-5 h-5 mr-3" />
                    </motion.div>
                    <span>View Case Study</span>
                    <motion.div
                      animate={{ x: [0, 8, 0] }}
                      transition={{ duration: 2, repeat: Infinity }}
                      className="ml-3 text-xl"
                    >
                      →
                    </motion.div>
                  </motion.div>
                </div>
              </div>

              {/* Hover glow effect */}
              <motion.div
                className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                style={{
                  background: 'radial-gradient(circle at 50% 50%, rgba(16,185,129,0.05) 0%, transparent 70%)'
                }}
                initial={false}
                whileHover={{
                  background: [
                    'radial-gradient(circle at 50% 50%, rgba(16,185,129,0.05) 0%, transparent 70%)',
                    'radial-gradient(circle at 30% 40%, rgba(16,185,129,0.1) 0%, transparent 70%)',
                    'radial-gradient(circle at 70% 60%, rgba(16,185,129,0.05) 0%, transparent 70%)',
                    'radial-gradient(circle at 50% 50%, rgba(16,185,129,0.05) 0%, transparent 70%)'
                  ]
                }}
                transition={{ duration: 4, repeat: Infinity }}
              />
            </motion.div>
          ))}
        </motion.div>

        {/* Enhanced Design Process Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-20"
        >
          <div className="bg-gradient-to-r from-emerald-500 to-emerald-600 dark:from-emerald-600 dark:to-emerald-700 rounded-3xl p-8 lg:p-12 text-white relative overflow-hidden">
            {/* Background decoration */}
            <motion.div 
              animate={{ 
                scale: [1, 1.2, 1],
                opacity: [0.1, 0.2, 0.1]
              }}
              transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
              className="absolute top-4 right-4 w-40 h-40 bg-white/5 rounded-full blur-2xl"
            />
            <motion.div 
              animate={{ 
                scale: [1, 1.1, 1],
                opacity: [0.05, 0.15, 0.05]
              }}
              transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 3 }}
              className="absolute bottom-4 left-4 w-32 h-32 bg-white/5 rounded-full blur-xl"
            />

            <div className="text-center mb-12 relative">
              <motion.h2 
                className="text-3xl md:text-4xl font-bold mb-4"
                whileHover={{ scale: 1.02 }}
              >
                My Design Process
              </motion.h2>
              <motion.p 
                className="text-xl text-emerald-100 max-w-2xl mx-auto"
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
              >
                Every project follows a structured approach to ensure optimal results
              </motion.p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
              <motion.div 
                className="text-center space-y-4"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 }}
                whileHover={{ y: -5 }}
              >
                <motion.div
                  animate={{ rotate: [0, 360] }}
                  transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
                  className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center mx-auto backdrop-blur-sm"
                >
                  <Users className="w-8 h-8 text-white" />
                </motion.div>
                <h3 className="text-xl font-bold">Research & Discovery</h3>
                <p className="text-emerald-100">Understanding user needs and business goals</p>
              </motion.div>

              <motion.div 
                className="text-center space-y-4"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.6 }}
                whileHover={{ y: -5 }}
              >
                <motion.div
                  animate={{ scale: [1, 1.1, 1] }}
                  transition={{ duration: 3, repeat: Infinity }}
                  className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center mx-auto backdrop-blur-sm"
                >
                  <Palette className="w-8 h-8 text-white" />
                </motion.div>
                <h3 className="text-xl font-bold">Design & Prototype</h3>
                <p className="text-emerald-100">Creating intuitive and beautiful interfaces</p>
              </motion.div>

              <motion.div 
                className="text-center space-y-4"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.8 }}
                whileHover={{ y: -5 }}
              >
                <motion.div
                  animate={{ y: [-5, 5, -5] }}
                  transition={{ duration: 4, repeat: Infinity }}
                  className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center mx-auto backdrop-blur-sm"
                >
                  <TrendingUp className="w-8 h-8 text-white" />
                </motion.div>
                <h3 className="text-xl font-bold">Test & Iterate</h3>
                <p className="text-emerald-100">Validating solutions and optimizing performance</p>
              </motion.div>
            </div>
          </div>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          className="fixed bottom-8 right-8 opacity-50"
          animate={{ y: [0, -10, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        >
          <div className="w-1 h-16 bg-gradient-to-t from-emerald-500 to-transparent dark:from-emerald-400 rounded-full"></div>
        </motion.div>
      </div>
    </div>
  );
};

export default UIUXProjects;