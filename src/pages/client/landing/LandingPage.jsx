import About from "./components/About";
import Customisation from "./components/Customisation";
import Features from "./components/Features";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Status from "./components/Status";
import Testimonials from "./components/Testimonials";

const LandingPage = () => (
  <>
    <Navbar />
    <Hero />
    <Status />
    <About />
    <Features />
    <Testimonials />
    <Customisation />
  </>
);

export default LandingPage;
