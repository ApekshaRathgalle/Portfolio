import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { ThemeProvider } from './context/Theme';
import Layout from './components/layout/Layout';
import Home from './pages/Home';
import FullStackProjects from './components/projects/FullStackProjects';
import UIUXProjects from './components/projects/UIUXProjects';
import ProjectDetail from './components/projects/fullstack/ProjectDetail';
import UIProjectDetail from './components/projects/uiux/UIProjectDetail';

const pageTransition = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -20 },
  transition: { duration: 0.3, ease: [0.42, 0, 0.58, 1] as const }
};

function App() {
  return (
    <ThemeProvider>
      <Router>
        <Layout>
          <AnimatePresence mode="wait">
            <Routes>
              <Route 
                path="/" 
                element={
                  <motion.div {...pageTransition}>
                    <Home />
                  </motion.div>
                } 
              />
              <Route 
                path="/projects/fullstack" 
                element={
                  <motion.div {...pageTransition}>
                    <FullStackProjects />
                  </motion.div>
                } 
              />
              <Route 
                path="/projects/fullstack/:projectId" 
                element={
                  <motion.div {...pageTransition}>
                    <ProjectDetail />
                  </motion.div>
                } 
              />
              <Route 
                path="/projects/uiux" 
                element={
                  <motion.div {...pageTransition}>
                    <UIUXProjects />
                  </motion.div>
                } 
              />
              <Route 
                path="/projects/uiux/:projectId" 
                element={
                  <motion.div {...pageTransition}>
                    <UIProjectDetail />
                  </motion.div>
                } 
              />
            </Routes>
          </AnimatePresence>
        </Layout>
      </Router>
    </ThemeProvider>
  );
}

export default App;