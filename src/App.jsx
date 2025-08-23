import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Header from './components/Navbar/Navbar';
import Hero from './components/Hero/HeroSeciton';
import SkillSecion from './components/skill/SkillSecion';
import Contact from './components/contact/Contact';
import Footer from './components/Footer/Footer';
import Education from './components/education/Education';
import About from './components/About/About';
import Projects from './components/Projects/Projects';
import Stairs from './components/ui/Stairs';

const App = () => {
  const [showIntro, setShowIntro] = useState(true);

  useEffect(() => {

    const timer = setTimeout(() => {
      setShowIntro(false);
    }, 1000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div>
      <AnimatePresence mode="wait">
        {showIntro && (
          <motion.div>

                       <div className="h-screen w-screen fixed top-0 right-0 left-0 pointer-events-none z-40 flex">
                        <Stairs></Stairs>
                    </div>
          </motion.div>
        )}
      </AnimatePresence>

      {!showIntro && (
        <>
          <Header />
          <Hero />
          <About />
          <SkillSecion />
          <Education />
          <Projects />
          <Contact />
          <Footer />
        </>
      )}
    </div>
  );
};

export default App;
