import {
  Button,
  LogoIcon,
  LogoImg,
  Main,
  Wrapper,
} from "../lib/style/generalStyles";
import KodimonImg from "../assets/png/kodimon 1.png";

const Home = () => {
  return (
    <>
      <Main>
        <LogoIcon />
        <Wrapper>
          <LogoImg src={KodimonImg} alt="Kodimon" />
          <Button>New Game</Button>
        </Wrapper>
      </Main>
    </>
  );
};

export default Home;
