import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import About from "./components/About/About";
import Projects from "./components/Projects/Projects";
import Services from "./components/Services/Services";
import Stack from "./components/Stack/Stack";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";
import styles from "./App.module.css";

function App() {
  return (
    <div className={styles.app}>
      <Navbar />
      <main>
        <section id="home" className="section">
          <Hero />
        </section>
        <section id="about" className="section">
          <About />
        </section>
        <section id="projects" className="section">
          <Projects />
        </section>
        <section id="services" className="section">
          <Services />
        </section>
        <section id="stack" className="section">
          <Stack />
        </section>
        <section id="contact" className="section">
          <Contact />
        </section>
      </main>
      <Footer />
    </div>
  );
}

export default App;
