import AboutMe from "./components/AboutMe/AboutMe";
import Footer from "./components/Footer/Footer";
import NavBar from "./components/NavBar/Navbar";
import Experience from './components/Experience/Experience';
import Projects from "./Projects/Projects";

function App() {
  return (
    <>
      <NavBar />
      <AboutMe />
      <Experience />
      <Projects/>
      <Footer />
    </>
  );
}

export default App;
