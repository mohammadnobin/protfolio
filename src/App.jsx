import React from 'react';
import Header from './components/Navbar/Navbar';
import Hero from './components/Hero/HeroSeciton';
import SkillSecion from './components/skill/SkillSecion';
import Contact from './components/contact/Contact';
import Footer from './components/Footer/Footer';
import Education from './components/education/Education';
import About from './components/About/About';
// import './assets/css/index.css'

const App = () => {
  return (
    <div>
      <Header />
      <Hero />
      <About />
      <SkillSecion />
      <Education />
      <Contact />
      <Footer />
    </div>
  );
};

export default App;