import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { Input, Menu } from "semantic-ui-react";
import stork_logo_1 from "../images/stork_logo_1.png";

function Navbar() {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user);

  const handleLogout = () => {
    localStorage.clear();
    dispatch({
      type: "SET_USER",
      user: {},
    });
  };

  return (
    <div className={`ui menu`}>
      <Menu secondary>
        <Menu.Item>{user ? <h3>Welcome, {user.name}!</h3> : null}</Menu.Item>
        <Menu.Item>
          <div class="header item">
            {" "}
            <h2 class="ui left floated header">
              <a href="/">
                <img src={stork_logo_1} width="75" height="75"></img>
              </a>
            </h2>
          </div>
        </Menu.Item>
        <Menu.Item>
          <Link to="/shop" className="ui button">
            Shop
          </Link>
        </Menu.Item>
        <Menu.Item>
          <Link to="/login" className="ui button">
            Login
          </Link>
        </Menu.Item>
        <Menu.Item>
          <Link to="/about_us" className="ui button">
            About
          </Link>
        </Menu.Item>
        <Menu.Item>
          <Link to="/locations" className="ui button">
            Locations
          </Link>
        </Menu.Item>
        <Menu.Item>
          <Link to="/checkout">
            <div class="ui animated fade button" tabindex="0">
              <div class="visible content">
                <i class="shopping bag icon"></i>
              </div>
              <div class="hidden content">Checkout</div>
            </div>
          </Link>
        </Menu.Item>
        <Menu.Item>
          <Link to="/favorites">
            <div class="ui animated fade button" tabindex="0">
              <div class="visible content">
                <i class="heart outline like icon"></i>
              </div>
              <div class="hidden content">Favorites</div>
            </div>
          </Link>
        </Menu.Item>
        <Menu.Item>
          <Input icon="search" placeholder="Search..." />
        </Menu.Item>
        <Menu.Item>
          <Link to="/">
            <button class="ui button" onClick={handleLogout}>
              <i class="sign-out icon"></i>
            </button>
          </Link>
        </Menu.Item>
      </Menu>
    </div>
  );
}

export default Navbar;
