import './App.css';
import Navbar from './components/Navbar';
import Header from './components/Header';
import Particles from 'react-particles-js';
import AboutMe from './components/AboutMe';

function App() {
  return (
    <div>
      <Navbar />
      <Particles
        className="particles-canvas"
        params={{
          particles: {
            number: {
              value: 30,
              density: {
                enable: true,
                value_area: 900
              }
            },
            shape: {
              type: "triangle",
              stroke: {
                width: 6,
                color: "BE00FE"
              }
            }
          }
        }}
      />
      <Header />
      <AboutMe />
    </div>
  );
}

export default App;
