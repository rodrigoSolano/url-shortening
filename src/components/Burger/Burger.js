import { Burger as BurgerContainer } from "./Burger.elements";

const Burger = ({ open, setOpen }) => {
  const handleClick = () => {
    setOpen(!open);
  };
  return (
    <BurgerContainer open={open} onClick={handleClick}>
      <div />
      <div />
      <div />
    </BurgerContainer>
  );
};

export default Burger;
