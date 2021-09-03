import './App.css';
import Intro from './intro/Intro';
import Navbar from './navbar/Navbar';
import Projects from './projects/Projects';
import Blogs from './blogs/Blogs';
import Contact from './contact/Contact';
import About from './about/About';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Intro />
      <About />
      <Projects />
      <Blogs />
      <Contact />
    </div>
  );
}

export default App;
