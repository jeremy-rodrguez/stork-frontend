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

  const handleSearch = (e) => {
    console.log("I'm searching...", e.target);
  };

  return (
    <div className={`ui menu`}>
      <Menu secondary>
        {/* <Menu.Item>{user ? <h3>Welcome, {user.name}!</h3> : null}</Menu.Item> */}
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
        {/* <Menu.Item>
          <i class="user circle outline icon"></i>
        </Menu.Item> */}
        <Menu.Item>{user ? <h3>Welcome, {user.name}!</h3> : null}</Menu.Item>
        <Menu.Item>
          <Link to="/shop" className="ui black basic button">
            Shop
          </Link>
        </Menu.Item>
        <Menu.Item>
          <Link to="/login" className="ui black basic button">
            Login
          </Link>
        </Menu.Item>
        <Menu.Item>
          <Link to="/about_us" className="ui black basic button">
            About
          </Link>
        </Menu.Item>
        <Menu.Item>
          <Link to="/locations" className="ui black basic button">
            Locations
          </Link>
        </Menu.Item>
        <Menu.Item>
          <Link to="/checkout">
            <div class="ui black basic icon button" tabindex="0">
              <i class="shopping bag icon"></i>
            </div>
          </Link>
        </Menu.Item>
        <Menu.Item>
          <Link to="/favorites">
            <div class="ui red basic icon button" tabindex="0">
              <i class="heart outline like icon"></i>
            </div>
          </Link>
        </Menu.Item>
        <Menu.Item>
          <div class="ui input focus">
            <Input
              icon="search"
              placeholder="Search..."
              onChange={handleSearch}
            />
          </div>
        </Menu.Item>
        <Menu.Item>
          <Link to="/">
            <button class="ui black basic button" onClick={handleLogout}>
              <i class="sign-out icon"></i>
            </button>
          </Link>
        </Menu.Item>
      </Menu>
    </div>
  );
}

export default Navbar;
