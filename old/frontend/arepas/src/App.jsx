import "./App.css";
import Header from "./components/Header";
import Hero from "./components/Hero";
import ConstructionBanner from "./components/ConstructionBanner";
import Footer from "./components/Footer";
import About from "./components/About";
import SectionBreak from "./components/SectionBreak";
import Menu from "./components/Menu";
import Contact from "./components/Contact";




function App() {
  return (
    <>
      {/*<ConstructionBanner />*/}
      <Header />
      <Hero />
      <SectionBreak />
      <About />
      <Footer />
      <Menu />
      <Contact />
      
    </>
  );
}

export default App;
