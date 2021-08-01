import './App.css';
import Navbar from './components/Navbar';
import Header from './components/Header';
import AboutMe from './components/AboutMe';
import Projects from './components/Projects';
import Experience from './components/Experience';
import ParticlesComponent from './components/ParticlesComponent';
import Footer from './components/Footer';

function App() {
  return (
    <div>
      <Navbar />
      <ParticlesComponent />
      <Header />
      <AboutMe />
      <Projects />
      <Experience />
      <Footer />
    </div>
  );
}

export default App;
