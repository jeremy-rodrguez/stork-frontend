import "./App.css";
import { Route, Switch } from "react-router-dom";
import AboutUs from "./components/AboutUs";
import Navbar from "./components/NavBar";
import LandingPage from "./components/LandingPage";
import stork_logo from "./images/stork_logo.jpeg";
import Login from "./components/Login";
import ItemCards from "./components/ItemCards";
import SignUp from "./components/SignUp";

function App() {
  return (
    <div className="App">
      <h1>
        <a href="/">STORK</a>
      </h1>
      <img src={stork_logo} width="150" height="150"></img>
      <Navbar />
      <Switch>
        <Route exact path="/" component={LandingPage} />
        <Route exact path="/about_us" component={AboutUs} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/shop" component={ItemCards} />
        <Route exact path="/sign_up" component={SignUp} />
      </Switch>
    </div>
  );
}

export default App;
