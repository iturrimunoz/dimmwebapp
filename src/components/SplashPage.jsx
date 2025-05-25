import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const SplashPage = ({ onComplete }) => {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(false);
      setTimeout(() => {
        onComplete();
      }, 500); // Tiempo para la animación de salida
    }, 5000); // Aumentado a 5 segundos (5000ms)

    return () => clearTimeout(timer);
  }, [onComplete]);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: isVisible ? 1 : 0 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="fixed inset-0 z-50 flex items-center justify-center bg-white"
    >
      <motion.div
        initial={{ scale: 0.5 }}
        animate={{ scale: 1 }}
        transition={{
          type: "spring",
          stiffness: 260,
          damping: 20
        }}
        className="text-center"
      >
        <h1 className="text-4xl font-bold text-primary mb-4">DIMM</h1>
        <p className="text-gray-600">Clínica de Especialidades</p>
      </motion.div>
    </motion.div>
  );
};

export default SplashPage; 