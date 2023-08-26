import "./App.css";
import Hero from "./components/Hero";
import ConstructionBanner from "./components/ConstructionBanner";
import Footer from "./components/Footer";
import About from "./components/About";
import SectionBreak from "./components/SectionBreak";





function App() {
  return (
    <>
      <ConstructionBanner />
      <Hero />
      <SectionBreak />
      <About />
      <Footer />
      
    </>
  );
}

export default App;
