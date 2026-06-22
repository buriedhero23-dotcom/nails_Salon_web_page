import "./App.css";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Portfolio from "./components/Portfolio";
import PriceList from "./components/PriceList";
import About from "./components/About";
import Contact from "./components/Contact";

function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero
          title="RunaNails Studio"
          text="Elegantní nehtové služby v luxusním prostředí s jemným, ženským stylem a profesionálním servisem."
          buttonText="Prohlédnout práci"
        />
        <Portfolio />
        <PriceList />
        <About />
        <Contact />
      </main>
    </>
  );
}

export default App;