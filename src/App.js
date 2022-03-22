import "./App.css";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";

import Navigation from "./components/Navigation";
import Landing from "./components/Landing";
import Login from "./components/Login";
import Signup from "./components/SignUp";
import Read from "./components/Read";
import Stories from "./components/Stories";
import ToonArt from "./components/ToonArt";

function App() {
  return (
    <Router>
      <div className="App">
        <Navigation />
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/read" element={<Read />} />
          <Route path="/stories" element={<Stories />}></Route>
          <Route path="/toonart" element={<ToonArt />}></Route>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
