import "./App.css";
import { Route, Switch } from "react-router-dom";
import AboutUs from "./components/AboutUs";
import Navbar from "./components/NavBar";
import LandingPage from "./components/LandingPage";
import stork_logo from "./images/stork_logo.jpeg";
import Login from "./components/Login";
import ItemCards from "./components/ItemCards";
import SignUp from "./components/SignUp";
import Locations from "./components/Locations";
import Favorites from "./components/Favorites";
import Checkout from "./components/Checkout";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
// import History from "./components/History";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    let token = localStorage.getItem("token");
    if (token) {
      fetch("http://localhost:3000/api/v1/profile", {
        method: "GET",
        headers: { Authorization: `BEARER ${token}` },
      })
        .then((response) => response.json())
        .then((data) =>
          dispatch({
            type: "SET_USER",
            payload: data.user,
          })
        );
    }
  }, []);

  return (
    <div className="App">
      <Navbar />
      <Switch>
        <Route exact path="/" component={LandingPage} />
        <Route exact path="/about_us" component={AboutUs} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/shop" component={ItemCards} />
        <Route exact path="/sign_up" component={SignUp} />
        <Route exact path="/locations" component={Locations} />
        <Route exact path="/favorites" component={Favorites} />
        <Route exact path="/checkout" component={Checkout} />
      </Switch>
    </div>
  );
}

export default App;
