import styled from "styled-components";
import colors from "../../constants/colors";
import { Container } from "../../styles/GlobalStyles";

const navbarHeight = "5rem";

export const NavbarWrapper = styled(Container)`
  width: 100%;
  height: auto;
  display: grid;
  grid-template-columns: 1fr;
  position: relative;
  @media (min-width: 800px) {
    grid-template-columns: 121px 1fr;
    gap: 1rem;
  }
`;

export const Navbar = styled.div`
  width: 100%;
  height: ${navbarHeight};
  display: flex;
  justify-content: space-between;
  align-content: center;
  align-items: center;
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
  position: absolute;
  top: 5rem;
  left: 0;
  z-index: 10;
  @media (min-width: 800px) {
    padding: 0;
    display: flex;
    position: relative;
    top: 0;
    left: 0;
    z-index: 1;
  }
`;

export const MenuContent = styled.div`
  width: 100%;
  height: auto;
  padding: 1rem 0;
  background-color: ${colors.secondary};
  border-radius: 1rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  @media (min-width: 800px) {
    width: 100%;
    height: 100%;
    padding: 0;

    display: flex;
    flex-direction: row;
    justify-content: space-between;

    position: relative;
    top: 0;
    left: 0;
    z-index: 1;

    background-color: ${colors.white};
  }
`;

export const Items = styled.div`
  @media (min-width: 800px) {
    display: flex;
    flex-direction: row;
    align-items: center;
  }
`;

export const MenuItem = styled.a`
  width: 100%;
  height: 3rem;
  text-align: center;
  font-family: inherit;
  font-size: inherit;
  font-weight: 700;
  color: ${colors.white};
  display: flex;
  justify-content: center;
  @media (min-width: 800px) {
    width: 7rem;
    height: 3rem;
    align-items: center;
    align-content: center;
    color: ${colors.grayishViolet};
    transition: color 0.2s linear;
    &:hover {
      cursor: pointer;
      color: ${colors.black};
    }
  }
`;

export const AuthButtons = styled.div`
  width: auto;
  display: flex;
  flex-direction: column;
  padding: 0 2rem;
  @media (min-width: 800px) {
    width: 100%;
    height: auto;
    padding: 0;

    display: flex;
    flex-direction: row;
    justify-content: flex-end;
    align-items: center;
    align-content: center;
  }
`;

export const Separator = styled.div`
  width: 100%;
  margin-bottom: 1.5rem;
  position: relative;
  &:before {
    content: "";
    position: absolute;
    top: 50%;
    left: 0;
    width: 100%;
    height: 0.5px;
    border-radius: 100%;
    background-color: ${colors.gray};
  }
  @media (min-width: 800px) {
    display: none;
  }
`;
