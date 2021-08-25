import React from "react";
import {
  NavbarWrapper,
  Navbar as NavBar,
  Logo,
  Menu,
  MenuContent,
  Items,
  MenuItem,
  Separator,
  AuthButtons,
} from "./Navbar.elements";
import Burger from "../Burger/Burger";
import Button from "../Button/Button";

const Navbar = () => {
  const [open, setOpen] = React.useState(false);
  return (
    <NavbarWrapper>
      <NavBar>
        <Logo src={"/images/logo.svg"} />
        <Burger open={open} setOpen={setOpen} />
      </NavBar>
      <Menu open={open}>
        <MenuContent>
          <Items>
            <MenuItem>Features</MenuItem>
            <MenuItem>Pricing</MenuItem>
            <MenuItem>Resources</MenuItem>
          </Items>
          <Separator />
          <AuthButtons>
            <MenuItem>Login</MenuItem>
            <Button rounded>Sign Up</Button>
          </AuthButtons>
        </MenuContent>
      </Menu>
    </NavbarWrapper>
  );
};

export default Navbar;
