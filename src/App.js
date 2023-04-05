import './App.css';
import Banner from './component/Banner';
import MyNav from './component/MyNav';
import Project from './component/Project';
import Skills from './component/Skills';
import Contact from './component/Contact';
import Footer from './component/Footer';


function App() {
  return (
    <div>
      <MyNav/>
      <Banner/>
      <Skills/>
      <Project/>
      <Contact/>
      <Footer/>
    </div>
  );
}

export default App;
