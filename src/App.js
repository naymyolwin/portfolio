import Header from "./components/Header";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Home from "./components/Home";
import { useRef } from "react";

function App() {
  const aboutRef = useRef();
  return (
    <div>
      <Header />
      <Home aboutRef={aboutRef} />
      <About aboutRef={aboutRef} />
      <Skills />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
