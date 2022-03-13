import logo from "./logo.svg";
import "./App.css";
import Navigation from "./components/Navigation";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      <Navigation />

      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          EXAMPLE <code>src/App.js</code> and save to reload.
        </p>
      </header>

      <Footer />
    </div>
  );
}

export default App;
