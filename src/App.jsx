import Navbar from "./Components/Navbar";
import ErrorBoundary from "./ErrorBoundary";
import Header from "./Components/Header";
import Achievement from "./Components/Achievement";
import About from "./Components/About";
import Services from "./Components/Services";
import Teams from "./Components/Teams";
import Project from "./Components/Project";
import ProjectNavigation from "./Components/Project/ProjectNavigation";
import Testimonials from "./Components/Testimonials";
import Faq from "./Components/Faq";
import Contact from "./Components/Contact";
import Footer from "./Components/Footer"; // Ensure this matches your folder structure

function App() {
  return (
    <>
      <ErrorBoundary>
        <Navbar />
        <Header />
        <Achievement />
        <About />
        <Services />
        <Teams />
        <Project />
        <ProjectNavigation />
        <Testimonials />
        <Faq />
        <Contact />
        <Footer />

        <div id="about"></div>
        <div id="services"></div>
        <div id="team"></div>
        <div id="project"></div>
        <div id="testimonial"></div>
        <div id="faq"></div>
        <div id="contact"></div>
      </ErrorBoundary>
    </>
  );
}

export default App;