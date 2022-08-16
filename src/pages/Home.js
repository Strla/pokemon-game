import {
  Button,
  LogoIcon,
  LogoImg,
  Main,
  Wrapper,
} from "../lib/style/generalStyles";
import { useNavigate } from "react-router-dom";
import KodimonImg from "../assets/png/kodimon 1.png";

const Home = () => {
  const navigate = useNavigate();
  return (
    <>
      <Main>
        <LogoIcon />
        <Wrapper>
          <LogoImg src={KodimonImg} alt="Kodimon" />
          <Button onClick={() => navigate("/game")}>New Game</Button>
        </Wrapper>
      </Main>
    </>
  );
};

export default Home;
