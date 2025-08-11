import React from 'react';
import Header from './components/Navbar/Navbar';
import Hero from './components/Hero/HeroSeciton';
import SkillSecion from './components/skill/SkillSecion';
import Contact from './components/contact/Contact';

const App = () => {
  return (
    <div>
      <Header />
      <Hero />
      <SkillSecion />
      <Contact />
    </div>
  );
};

export default App;