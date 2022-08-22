import {
  HealthContainer,
  InfoContainer,
  NameAndImgContainer,
  PlayerContainer,
  PlayerImg,
  PlayerName,
  StatContainer,
  StatsTitle,
  StatValue,
} from "./PokemonStyle";

import HealthBar from "../HealthBar/HealthBar";

const Pokemon = ({
  name,
  hp,
  attack,
  defense,
  speed,
  img,
  healthBar,
  miss,
}) => {
  return (
    <>
      <PlayerContainer>
        <HealthContainer>
          <HealthBar healthBar={healthBar} />
          {miss && <p>Miss!</p>}
        </HealthContainer>
        <NameAndImgContainer>
          <PlayerName>
            {name.charAt(0).toUpperCase() + name.slice(1)}
          </PlayerName>
          <PlayerImg src={img} alt="Pokemon" width="250px" />
        </NameAndImgContainer>
        <InfoContainer>
          <StatsTitle>Stats</StatsTitle>
          <StatContainer>
            <StatValue>HP: {hp}</StatValue>
            <StatValue>Attack: {attack}</StatValue>
            <StatValue>Defense: {defense}</StatValue>
            <StatValue>Speed: {speed}</StatValue>
          </StatContainer>
        </InfoContainer>
      </PlayerContainer>
    </>
  );
};

export default Pokemon;
