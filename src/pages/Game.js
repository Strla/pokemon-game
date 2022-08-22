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
import { nanoid } from "@reduxjs/toolkit";
import { Container } from "react-bootstrap";

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

  const [playerHealthBar, setPlayerHealthBar] = useState();
  const [opponentHealthBar, setOpponentHealthBar] = useState();
  const [miss, setMiss] = useState(false);

  const [logs, setLogs] = useState([]);

  const [playerTurn, setPlayerTurn] = useState(null);
  const [isOver, setIsOver] = useState(false);

  const randomIntFromInterval = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1) + min);
  };

  const fetchNewOpponent = async () => {
    setIsOver(false);
    setPlayerHealthBar(100);
    setOpponentHealthBar(100);

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
    clearArray();
    setIsOver(false);
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

    setPlayerHealthBar(100);
    setOpponentHealthBar(100);
    setLoading(false);

    if (opponentData.stats[5].base_stat >= playerData.stats[5].base_stat) {
      setPlayerTurn(false);
    } else {
      setPlayerTurn(true);
    }
  };

  const addToLog = (id, message) => {
    logs.push({ id: id, message: message });
  };

  const changeTurn = () => {
    setPlayerTurn(!playerTurn);
  };

  const changeValue = () => {
    let chance = Math.random();
    if (playerHp > 0 && playerTurn) {
      if (chance <= 0.2) {
        addToLog(
          nanoid(),
          `${
            opponentName.charAt(0).toUpperCase() + opponentName.slice(1)
          } missed ${playerName.charAt(0).toUpperCase() + playerName.slice(1)}`
        );
        setMiss(true);
        setTimeout(() => {
          setMiss(false);
        }, 1000);
      } else {
        const newHp = playerHp - ((opponentAttack / 2) * playerDefense) / 100;
        let percentage = (newHp / playerHp) * 100;

        addToLog(
          nanoid(),
          `${
            opponentName.charAt(0).toUpperCase() + opponentName.slice(1)
          } attacked ${
            playerName.charAt(0).toUpperCase() + playerName.slice(1)
          } for ${((opponentAttack / 2) * playerDefense) / 100} dmg`
        );

        if (percentage <= 0) {
          percentage = 0;
          setIsOver(true);
          addToLog(
            nanoid(),
            `${playerName.charAt(0).toUpperCase() + playerName.slice(1)} died`
          );
        }
        setPlayerHp(newHp);
        setPlayerHealthBar(percentage);
      }
    } else if (opponentHp > 0 && !playerTurn) {
      if (chance <= 0.2) {
        addToLog(
          nanoid(),
          `${playerName.charAt(0).toUpperCase() + playerName.slice(1)} missed ${
            opponentName.charAt(0).toUpperCase() + opponentName.slice(1)
          }`
        );
        setMiss(true);
        setTimeout(() => {
          setMiss(false);
        }, 1000);
      } else {
        const newHp = opponentHp - ((playerAttack / 2) * opponentDefense) / 100;
        let percentage = (newHp / opponentHp) * 100;

        addToLog(
          nanoid(),
          `${
            playerName.charAt(0).toUpperCase() + playerName.slice(1)
          } attacked ${
            opponentName.charAt(0).toUpperCase() + opponentName.slice(1)
          } for ${((playerAttack / 2) * opponentDefense) / 100} dmg`
        );

        if (percentage <= 0) {
          percentage = 0;
          setIsOver(true);
          addToLog(
            nanoid(),
            `${
              opponentName.charAt(0).toUpperCase() + opponentName.slice(1)
            } died`
          );
        }
        setOpponentHp(newHp);
        setOpponentHealthBar(percentage);
      }
    }
    changeTurn();
  };

  const clearArray = () => {
    setLogs([{ id: nanoid(), message: "Players loaded" }]);
  };

  useEffect(() => {
    fetchPokemons();

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (loading) {
    return <Spinner />;
  }

  return (
    <>
      {(playerHp <= 0 || opponentHp <= 0) && <Container>GOTOVO</Container>}
      <Main isGame>
        <Pokemon
          name={opponentName}
          img={opponentImage}
          hp={opponentHp}
          attack={opponentAttack}
          defense={opponentDefense}
          speed={opponentSpeed}
          miss={miss}
          healthBar={opponentHealthBar}
        />
        <Wrapper>
          <ArrowIcon myTurn={playerTurn} />
          <Button onClick={() => changeValue()}>Attack!</Button>
        </Wrapper>
        <Pokemon
          name={playerName}
          img={playerImage}
          hp={playerHp}
          attack={playerAttack}
          defense={playerDefense}
          speed={playerSpeed}
          healthBar={playerHealthBar}
          miss={miss}
        />
        <Break />
        <LogsAndMenuContainer>
          <Menu
            startNewGame={fetchPokemons}
            newOpponent={fetchNewOpponent}
            isOver={isOver}
          />
          <Logs logs={logs} />
        </LogsAndMenuContainer>
      </Main>
    </>
  );
};

export default Game;
