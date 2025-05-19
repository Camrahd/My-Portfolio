
import './App.css';
import Header from './Components/Header'
import About from './Components/About'
import Projects from './Components/Projects'
import Experience from './Components/Experience'
import Contact from './Components/Contact'
import Footer from './Components/Footer'

function App() {
  return (
    <div className="App">
      <Header/>
      <About/>
      <Projects/>
      <Experience/>
      <Contact/>
      <Footer/>
    </div>
  );
}

export default App;
