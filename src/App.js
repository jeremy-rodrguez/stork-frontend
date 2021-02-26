import "./App.css";
import { Route, Switch } from "react-router-dom";
import AboutUs from "./components/AboutUs";
import Navbar from "./components/NavBar";
import LandingPage from "./components/LandingPage";
import stork_logo from "./images/stork_logo.jpeg";

function App() {
  return (
    <div className="App">
      <h1>STORK</h1>
      <img src={stork_logo} width="150" height="150"></img>
      <Navbar />
      <Route exact path="/" component={LandingPage} />
      <Route exact path="/about_us" component={AboutUs} />
    </div>
  );
}

export default App;
