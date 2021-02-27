import React from "react";
import { Link } from "react-router-dom";

const colors = [
  "red",
  "orange",
  "yellow",
  "olive",
  "green",
  "teal",
  "blue",
  "violet",
  "purple",
  "pink",
  "brown",
  "grey",
  "black",
];

function Navbar() {
  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     color: "green",
  //   };

  //   this.handleClick = this.handleClick.bind(this);
  // }

  // handleClick() {
  //   console.log(this);
  //   const newColor = colors[Math.floor(Math.random() * colors.length)];
  //   this.setState({ color: newColor });
  // }

  return (
    <div className={`ui menu`}>
      <Link to="/shop" className="ui button">
        Shop
      </Link>
      <br></br>
      <Link to="/login" className="ui button">
        Login
      </Link>
      <br></br>
      <Link to="/about_us" className="ui button">
        About
      </Link>
      <br></br>
      <br></br>
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
