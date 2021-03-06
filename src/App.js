import "./App.css";
import { Route, Router, Switch } from "react-router-dom";
import AboutUs from "./components/AboutUs";
import Navbar from "./components/NavBar";
import Footer from "./components/Footer";
import Login from "./components/Login";
import ItemCards from "./components/ItemCards";
import SignUp from "./components/SignUp";
import Locations from "./components/Locations";
import Favorites from "./components/Favorites";
import Checkout from "./components/Checkout";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import history from "./components/history";
import Homepage from "./components/Homepage";

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
      <Router history={history}>
        <Navbar />
        <Switch>
          <Route exact path="/" component={Homepage} />
          <Route exact path="/about_us" component={AboutUs} />
          <Route
            exact
            path="/login"
            component={(props) => <Login {...props} />}
          />
          <Route exact path="/shop" component={ItemCards} />
          <Route
            exact
            path="/sign_up"
            component={(props) => <SignUp {...props} />}
          />
          <Route exact path="/locations" component={Locations} />
          <Route exact path="/favorites" component={Favorites} />
          <Route exact path="/checkout" component={Checkout} />
        </Switch>
        <br></br>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
