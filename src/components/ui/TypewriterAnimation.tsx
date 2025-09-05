import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

interface TypewriterAnimationProps {
  texts: string[];
  className?: string;
}

const TypewriterAnimation: React.FC<TypewriterAnimationProps> = ({ texts, className = '' }) => {
  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const [currentText, setCurrentText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [delta, setDelta] = useState(150);

  useEffect(() => {
    const ticker = setInterval(() => {
      tick();
    }, delta);

    return () => clearInterval(ticker);
  }, [currentText, delta, isDeleting, currentTextIndex]);

  const tick = () => {
    const fullText = texts[currentTextIndex];
    const updatedText = isDeleting
      ? fullText.substring(0, currentText.length - 1)
      : fullText.substring(0, currentText.length + 1);

    setCurrentText(updatedText);

    if (isDeleting) {
      setDelta(75);
    }

    if (!isDeleting && updatedText === fullText) {
      setIsDeleting(true);
      setDelta(2000);
    } else if (isDeleting && updatedText === '') {
      setIsDeleting(false);
      setCurrentTextIndex((prevIndex) => (prevIndex + 1) % texts.length);
      setDelta(150);
    }
  };

  return (
    <div className={`${className}`}>
      <span className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-emerald-600 via-emerald-700 to-emerald-800 bg-clip-text text-transparent">
        {currentText}
      </span>
      <motion.span
        animate={{ opacity: [0, 1, 0] }}
        transition={{ duration: 1, repeat: Infinity }}
        className="text-4xl md:text-6xl font-bold text-emerald-600"
      >
        |
      </motion.span>
    </div>
  );
};

export default TypewriterAnimation;