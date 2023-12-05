import "./app.scss";
import Navbar from "./components/navbar/Navbar";
import Hero from "./components/hero/Hero";
import About from "./components/about/About";
import Skills from "./components/skills/Skills";
import Work from "./components/work/Work";
import Portfolio from "./components/work/Portfolio";
import Contact from "./components/contact/Contact";

const App = () => {
  return <div>
    <section id = "Home">
      <Navbar/>
      <Hero/>
    </section>
    <section id = "About">
      <About/>
    </section>
    <section id = "Skills">
      <Skills/>
    </section>
    <section id = "Work">
      <Work/>
    </section>
      <Portfolio/>
    <section id = "Contact">
      <Contact/>
    </section>
  </div>;
};

export default App;
