import { Button } from "../../lib/style/generalStyles";
import { MenuContainer, MenuTitle, MenuWrapper } from "./MenuStyle";
import { useNavigate } from "react-router-dom";

const Menu = ({ startNewGame, newOpponent }) => {
  const navigate = useNavigate();
  return (
    <>
      <MenuWrapper>
        <MenuTitle>Menu</MenuTitle>
        <MenuContainer>
          <Button onClick={() => navigate("/")}>Home</Button>
          <Button onClick={() => startNewGame()}>New Game</Button>
          <Button onClick={() => newOpponent()}>New Opponent</Button>
        </MenuContainer>
      </MenuWrapper>
    </>
  );
};

export default Menu;
