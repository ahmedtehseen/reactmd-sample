import React, { Component } from 'react';
import { 
  Toolbar, 
  Button, 
  ListItem,
  Avatar
} from 'react-md';
import MenuButton from 'react-md/lib/Menus/MenuButton';
import './navbar.css';

const nav = <Button key="nav" icon>menu</Button>;
const actions = (
	<div>
  	<Button key="search" icon>search</Button>
  		<MenuButton
        icon
        className="menu-button"
        position={MenuButton.Positions.BOTTOM_RIGHT}
        id="avatar-menu"
        buttonChildren={<Avatar src={process.env.PUBLIC_URL+"/avatar.jpg"} role="presentation" alt="Your Avatar" />}
      >
      <ListItem primaryText="Item 1" />
      <ListItem primaryText="Item 2" />
      <ListItem primaryText="Item 3" />
      <ListItem primaryText="Item 4" />
    </MenuButton>
  </div>
)
const title = <img src={process.env.PUBLIC_URL+"/logo.png"} style={{ width: 225, height: 45, margin: 10 }} alt="logo"/>

class Navbar extends Component{
	render() {
		return (
			<Toolbar
        colored
        nav={nav}
        actions={actions}
        title={title}
        id="Toolbar"
      />
		);
	};
};

export default Navbar;