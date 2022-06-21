import About from "./components/About";
import Hero from "./components/Hero";
import Services from "./components/Services";
import Places from "./components/Places";
import Clients from "./components/Clients";

function App() {
  return (
    <div className="App">
      <Hero />
      <About />
      <Services />
      <Places />
      <Clients />
    </div>
  );
}

export default App;
