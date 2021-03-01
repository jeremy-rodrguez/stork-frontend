import React from "react";
import { Link } from "react-router-dom";
import { Input, Menu } from "semantic-ui-react";
import stork_logo from "../images/stork_logo.jpeg";

function Navbar() {
  return (
    <div className={`ui menu`}>
      <Menu secondary>
        <div class="header item">
          {" "}
          <h2 class="ui left floated header">
            <a href="/">STORK.</a>
            <img src={stork_logo} width="150" height="150"></img>
          </h2>
        </div>
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
          Login
          <i class="sign-in icon"></i>
        </Menu.Item>
        <Menu.Item>
          <i class="shopping bag icon"></i>
        </Menu.Item>
        <Menu.Item>
          <Input icon="search" placeholder="Search..." />
        </Menu.Item>
      </Menu>
    </div>
  );
}

export default Navbar;

// import React, { Component } from 'react'
// import { Input, Menu } from 'semantic-ui-react'

// export default class MenuExampleSecondary extends Component {
//   state = { activeItem: 'home' }

//   handleItemClick = (e, { name }) => this.setState({ activeItem: name })

//   render() {
//     const { activeItem } = this.state

//     return (
//       <Menu secondary>
//         <Menu.Item
//           name='home'
//           active={activeItem === 'home'}
//           onClick={this.handleItemClick}
//         />
//         <Menu.Item
//           name='messages'
//           active={activeItem === 'messages'}
//           onClick={this.handleItemClick}
//         />
//         <Menu.Item
//           name='friends'
//           active={activeItem === 'friends'}
//           onClick={this.handleItemClick}
//         />
//         <Menu.Menu position='right'>
//           <Menu.Item>
//             <Input icon='search' placeholder='Search...' />
//           </Menu.Item>
//           <Menu.Item
//             name='logout'
//             active={activeItem === 'logout'}
//             onClick={this.handleItemClick}
//           />
//         </Menu.Menu>
//       </Menu>
//     )
//   }
// }
