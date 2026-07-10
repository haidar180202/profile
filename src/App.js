import { useState } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Portfolio from './components/Portfolio';
import Client from './components/Client';
import Blog from './components/Blog';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  const [theme, setTheme] = useState("light");

  return (
    <div className={`${theme} min-h-screen bg-white dark:bg-dark text-slate-800 dark:text-slate-100 transition-colors duration-300 font-sans`}>
      <Navbar setTheme={setTheme} theme={theme} />
      <main>
        <Home />
        <About />
        <Portfolio />
        <Client />
        <Blog />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;

