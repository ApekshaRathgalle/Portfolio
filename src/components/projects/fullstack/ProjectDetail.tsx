import React from 'react';
import { motion } from 'framer-motion';
import { useNavigate, useParams } from 'react-router-dom';
import { ArrowLeft, ExternalLink, Github, Calendar, Users, Code, Lightbulb, CheckCircle } from 'lucide-react';
import { fullstackProjects } from '../../../data/fullstackProjects';
import AnimatedButton from '../../ui/AnimatedButton';

const ProjectDetail: React.FC = () => {
  const { projectId } = useParams<{ projectId: string }>();
  const navigate = useNavigate();
  
  const project = fullstackProjects.find(p => p.id === projectId);

  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900 mb-4">Project not found</h1>
          <AnimatedButton onClick={() => navigate('/projects/fullstack')}>
            Back to Projects
          </AnimatedButton>
        </div>
      </div>
    );
  }

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.1,
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="min-h-screen py-20 px-4 sm:px-6 lg:px-8"
    >
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="flex items-center justify-between mb-8"
        >
          <AnimatedButton
            variant="outline"
            onClick={() => navigate('/projects/fullstack')}
            icon={ArrowLeft}
          >
            Back to Full Stack Projects
          </AnimatedButton>
          
          <div className="flex items-center space-x-4">
            {project.demoUrl && (
              <AnimatedButton
                variant="secondary"
                href={project.demoUrl}
                icon={ExternalLink}
              >
                Live Demo
              </AnimatedButton>
            )}
            {project.githubUrl && (
              <AnimatedButton
                variant="primary"
                href={project.githubUrl}
                icon={Github}
              >
                View Code
              </AnimatedButton>
            )}
          </div>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="space-y-12"
        >
          {/* Hero Section */}
          <motion.div variants={itemVariants} className="text-center space-y-6">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900">
              {project.title}
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              {project.longDescription}
            </p>
            <div className="flex items-center justify-center space-x-6 text-sm text-gray-500">
              <div className="flex items-center space-x-1">
                <Calendar className="w-4 h-4" />
                <span>{project.timeline}</span>
              </div>
              <div className="flex items-center space-x-1">
                <Code className="w-4 h-4" />
                <span>{project.technologies.length} Technologies</span>
              </div>
            </div>
          </motion.div>

          {/* Project Image */}
          <motion.div
            variants={itemVariants}
            className="relative overflow-hidden rounded-2xl shadow-2xl"
          >
            <img
              src={project.imageUrl}
              alt={project.title}
              className="w-full h-96 object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
          </motion.div>

          {/* Technology Stack */}
          <motion.div variants={itemVariants} className="bg-white p-8 rounded-2xl shadow-lg">
            <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
              <Code className="w-6 h-6 text-emerald-600 mr-3" />
              Technology Stack
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {project.technologies.map((tech, index) => (
                <motion.div
                  key={tech}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ scale: 1.05, y: -2 }}
                  className="p-4 bg-emerald-50 rounded-xl text-center border-2 border-emerald-100 hover:border-emerald-300 transition-all duration-300"
                >
                  <div className="text-lg font-semibold text-emerald-700">{tech}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Features */}
          <motion.div variants={itemVariants} className="bg-gray-50 p-8 rounded-2xl">
            <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
              <CheckCircle className="w-6 h-6 text-emerald-600 mr-3" />
              Key Features
            </h2>
            <div className="grid md:grid-cols-2 gap-4">
              {project.features.map((feature, index) => (
                <motion.div
                  key={feature}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="flex items-center space-x-3 p-4 bg-white rounded-lg shadow-sm"
                >
                  <div className="w-2 h-2 bg-emerald-500 rounded-full flex-shrink-0" />
                  <span className="text-gray-700">{feature}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Challenges & Solutions */}
          <motion.div variants={itemVariants} className="grid lg:grid-cols-2 gap-8">
            {/* Challenges */}
            <div className="bg-white p-8 rounded-2xl shadow-lg border-l-4 border-red-500">
              <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                <Lightbulb className="w-6 h-6 text-red-500 mr-3" />
                Challenges
              </h3>
              <div className="space-y-4">
                {project.challenges.map((challenge, index) => (
                  <motion.div
                    key={challenge}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="flex items-start space-x-3"
                  >
                    <div className="w-2 h-2 bg-red-500 rounded-full flex-shrink-0 mt-2" />
                    <p className="text-gray-700">{challenge}</p>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Solutions */}
            <div className="bg-white p-8 rounded-2xl shadow-lg border-l-4 border-emerald-500">
              <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                <CheckCircle className="w-6 h-6 text-emerald-600 mr-3" />
                Solutions
              </h3>
              <div className="space-y-4">
                {project.solutions.map((solution, index) => (
                  <motion.div
                    key={solution}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="flex items-start space-x-3"
                  >
                    <div className="w-2 h-2 bg-emerald-500 rounded-full flex-shrink-0 mt-2" />
                    <p className="text-gray-700">{solution}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Call to Action */}
          <motion.div
            variants={itemVariants}
            className="text-center bg-gradient-to-r from-emerald-500 to-emerald-600 p-8 rounded-2xl text-white"
          >
            <h3 className="text-2xl font-bold mb-4">Interested in this project?</h3>
            <p className="text-emerald-100 mb-6 max-w-2xl mx-auto">
              Want to learn more about the technical implementation or discuss a similar project? 
              Let's connect!
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-4">
              {project.demoUrl && (
                <AnimatedButton
                  variant="secondary"
                  href={project.demoUrl}
                  icon={ExternalLink}
                >
                  View Live Demo
                </AnimatedButton>
              )}
              <AnimatedButton
                variant="outline"
                href="/#contact"
                className="border-white text-white hover:bg-white hover:text-emerald-600"
              >
                Get in Touch
              </AnimatedButton>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default ProjectDetail;