import "./App.css";
import {
  About,
  Hero,
  Footer,
  Navbar,
  Specials,
  Testimonials,
} from "./components";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <Specials />
      <Testimonials />
      <About />
      <Footer />
    </div>
  );
}

export default App;
