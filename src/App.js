import React, { useState } from 'react'
import Navbar from './components/Navbar';
import Home from './components/Home';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Weather from './components/Weather';
import Footer from './components/Footer';



function App() {
  const [darkTheme, setDarkTheme] = useState(false);

  return (
    <div className={darkTheme ? 'dark' : ''}>
      <div className='bg-gray-100 dark:bg-gray-900 dark:text-white min-h-screen'>
        <Navbar darkTheme={darkTheme} setDarkTheme={setDarkTheme}/>
        <Home />
        <Skills />
        <Projects />
        <Weather />
        <Footer />
      </div>
    </div>
  );
}

export default App;
