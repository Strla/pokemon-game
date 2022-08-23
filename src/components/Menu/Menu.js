import { Button } from "../../lib/style/generalStyles";
import { MenuContainer, MenuTitle, MenuWrapper } from "./MenuStyle";
import { useNavigate } from "react-router-dom";

const Menu = ({ startNewGame, gameOver }) => {
  const navigate = useNavigate();
  return (
    <>
      <MenuWrapper gameOver={gameOver}>
        <MenuTitle>Menu</MenuTitle>
        <MenuContainer>
          <Button onClick={() => navigate("/")}>Home</Button>
          <Button onClick={() => startNewGame()}>New Game</Button>
        </MenuContainer>
      </MenuWrapper>
    </>
  );
};

export default Menu;
