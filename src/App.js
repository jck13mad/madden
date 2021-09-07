import './App.css';
import Intro from './intro/Intro.jsx';
import Navbar from './navbar/Navbar.jsx';
import Projects from './projects/Projects.jsx';
import Blogs from './blogs/Blogs.jsx';
import Contact from './contact/Contact.jsx';
import About from './about/About.jsx';

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
