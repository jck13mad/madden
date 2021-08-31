import logo from './logo.svg';
import './App.css';
import Intro from './intro/Intro';
import Navbar from './navbar/Navbar';
import Projects from './projects/Projects';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Intro />
      <Projects />
    </div>
  );
}

export default App;
