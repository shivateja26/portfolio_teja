// Component
import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import Skill from "./components/Skill";
import Footer from "./components/Footer";
import Project from "./components/Project";

const App =()=>{
  return (
    <>
    <Header />
    <main>
      <Hero/>
      <About />
      <Skill />
      <Project />
    </main>
    <Footer />
    </>
  );
}

export default App;