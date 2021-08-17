import styled from "styled-components";
const padding = "1.5rem 1rem";
const navbarHeight = "5rem";

export const NavbarWrapper = styled.div`
  width: 100%;
  height: auto;
  display: grid;
  grid-template-columns: 1fr;
`;

export const Navbar = styled.div`
  width: 100%;
  height: ${navbarHeight};
  padding: ${padding};
  display: flex;
  justify-content: space-between;
  align-content: center;
  align-items: center;
  position: relative;
`;

export const Logo = styled.img`
  width: auto;
  height: auto;
`;

export const Menu = styled.div`
  width: 100%;
  height: auto;
  padding: 0 1rem 1rem 1rem;
  display: ${({ open }) => (open ? "flex" : "none")};
`;

export const MenuContent = styled.div`
  width: 100%;
  height: auto;
  background-color: hsl(257, 27%, 26%);
  border-radius: 1rem;
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 1fr;
  grid-auto-rows: 3.5rem;
  padding: 1.5rem 1.5rem;
`;

export const MenuItem = styled.a`
  width: 100%;
  height: auto;
  text-align: center;
  font-family: inherit;
  font-size: inherit;
  font-weight: 700;
  color: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
  align-content: center;
  &:hover {
    cursor: pointer;
  }
  &:first-of-type {
    height: 3.5rem;
  }
`;

export const Separator = styled.div`
  width: 100%;
  height: auto;
  position: relative;
  &:before {
    content: "";
    position: absolute;
    top: 50%;
    left: 0;
    width: 100%;
    height: 0.1rem;
    border-radius: 1px;
    background-color: hsl(0, 0%, 75%);
  }
`;
