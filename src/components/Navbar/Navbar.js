import React from "react";
import {
  NavbarWrapper,
  Navbar as NavbarContainer,
  Logo,
  Menu,
  MenuContent,
  MenuItem,
  Separator,
} from "./Navbar.elements";
import Burger from "../Burger/Burger";
import Button from "../Button/Button";

const Navbar = () => {
  const [open, setOpen] = React.useState(false);
  return (
    <NavbarWrapper>
      <NavbarContainer>
        <Logo src={"/images/logo.svg"} />
        <Burger open={open} setOpen={setOpen} />
      </NavbarContainer>
      <Menu open={open}>
        <MenuContent>
          <MenuItem>Features</MenuItem>
          <MenuItem>Pricing</MenuItem>
          <MenuItem>Resources</MenuItem>
          <Separator />
          <MenuItem>Login</MenuItem>
          <MenuItem>
            <Button>Sign Up</Button>
          </MenuItem>
        </MenuContent>
      </Menu>
    </NavbarWrapper>
  );
};

export default Navbar;
