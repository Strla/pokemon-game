import { useEffect, useState } from "react";
import Logs from "../components/Logs/Logs";
import Menu from "../components/Menu/Menu";
import Pokemon from "../components/Pokemon/Pokemon";
import Spinner from "../components/Spinner/Spinner";
import {
  ArrowIcon,
  Break,
  Button,
  LogsAndMenuContainer,
  Main,
  Wrapper,
} from "../lib/style/generalStyles";

const Game = () => {
  const [opponentName, setOpponentName] = useState("");
  const [opponentImage, setOpponentImage] = useState("");
  const [opponentHp, setOpponentHp] = useState(0);
  const [opponentAttack, setOpponentAttack] = useState(0);
  const [opponentDefense, setOpponentDefense] = useState(0);
  const [opponentSpeed, setOpponentSpeed] = useState(0);

  const [playerName, setPlayerName] = useState("");
  const [playerImage, setPlayerImage] = useState("");
  const [playerHp, setPlayerHp] = useState(0);
  const [playerAttack, setPlayerAttack] = useState(0);
  const [playerDefense, setPlayerDefense] = useState(0);
  const [playerSpeed, setPlayerSpeed] = useState(0);

  const [loading, setLoading] = useState(true);

  const randomIntFromInterval = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1) + min);
  };

  const fetchNewOpponent = async () => {
    let newOpponentId = randomIntFromInterval(1, 500);

    const opponentResponse = await fetch(
      `https://pokeapi.co/api/v2/pokemon/${newOpponentId}`
    );
    const opponentData = await opponentResponse.json();

    setOpponentName(opponentData.species.name);
    setOpponentImage(
      opponentData.sprites.other["official-artwork"].front_default
    );
    setOpponentHp(opponentData.stats[0].base_stat);
    setOpponentAttack(opponentData.stats[1].base_stat);
    setOpponentDefense(opponentData.stats[2].base_stat);
    setOpponentSpeed(opponentData.stats[5].base_stat);

    setLoading(false);
  };

  const fetchPokemons = async () => {
    let playerId = randomIntFromInterval(1, 500);
    let opponentId = randomIntFromInterval(1, 500);

    if (playerId === opponentId) {
      playerId = randomIntFromInterval(1, 500);
      opponentId = randomIntFromInterval(1, 500);
    }

    const playerResponse = await fetch(
      `https://pokeapi.co/api/v2/pokemon/${playerId}`
    );
    const playerData = await playerResponse.json();

    setPlayerName(playerData.species.name);
    setPlayerImage(playerData.sprites.other["official-artwork"].front_default);
    setPlayerHp(playerData.stats[0].base_stat);
    setPlayerAttack(playerData.stats[1].base_stat);
    setPlayerDefense(playerData.stats[2].base_stat);
    setPlayerSpeed(playerData.stats[5].base_stat);

    const opponentResponse = await fetch(
      `https://pokeapi.co/api/v2/pokemon/${opponentId}`
    );
    const opponentData = await opponentResponse.json();

    setOpponentName(opponentData.species.name);
    setOpponentImage(
      opponentData.sprites.other["official-artwork"].front_default
    );
    setOpponentHp(opponentData.stats[0].base_stat);
    setOpponentAttack(opponentData.stats[1].base_stat);
    setOpponentDefense(opponentData.stats[2].base_stat);
    setOpponentSpeed(opponentData.stats[5].base_stat);

    setLoading(false);
  };

  useEffect(() => {
    fetchPokemons();
  }, []);

  if (loading) {
    return <Spinner />;
  }

  return (
    <>
      <Main isGame>
        <Pokemon
          name={opponentName}
          img={opponentImage}
          hp={opponentHp}
          attack={opponentAttack}
          defense={opponentDefense}
          speed={opponentSpeed}
        />
        <Wrapper>
          <ArrowIcon />
          <Button>Attack!</Button>
        </Wrapper>
        <Pokemon
          name={playerName}
          img={playerImage}
          hp={playerHp}
          attack={playerAttack}
          defense={playerDefense}
          speed={playerSpeed}
        />
        <Break />
        <LogsAndMenuContainer>
          <Menu startNewGame={fetchPokemons} newOpponent={fetchNewOpponent} />
          <Logs playerName={playerName} opponentName={opponentName} />
        </LogsAndMenuContainer>
      </Main>
    </>
  );
};

export default Game;