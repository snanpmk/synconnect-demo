import About from "./components/About";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Status from "./components/Status";

const LandingPage = () => (
  <>
    <Navbar />
    <section id="home">
      <Hero />
    </section>
    <section>
      <Status />
    </section>
    <section id="about">
      <About />
    </section>
  </>
);

export default LandingPage;
