import React from 'react';
import './App.css';
import {useRoutes} from 'react-router-dom';
import routes from './routes';
import { motion, AnimatePresence } from 'framer-motion';

function App() {
  const content = useRoutes(routes);

  return (
    <motion.div 
      className="App"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <AnimatePresence mode="wait">
        <motion.div
          key={window.location.pathname}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.3 }}
        >
          {content}
        </motion.div>
      </AnimatePresence>
    </motion.div>
  );
}

export default App;

