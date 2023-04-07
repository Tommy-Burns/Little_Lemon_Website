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
      <h2>Welcome To</h2>
      <h1>Little Lemon Restaurant</h1>
      <Navbar />
      <Hero />
      <Specials />
      <About />
      <Testimonials />
      <Footer />
    </div>
  );
}

export default App;
