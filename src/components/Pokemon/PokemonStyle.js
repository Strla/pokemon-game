import styled from "styled-components";
import { colors } from "../../lib/style/theme";

export const PlayerContainer = styled.div`
  margin: 30px 50px;

  ${(props) =>
    props.gameOver &&
    `
    opacity: 30%

  `}
`;

export const HealthContainer = styled.div`
  text-align: center;
`;

export const NameAndImgContainer = styled.div`
  text-align: center;
`;

export const PlayerName = styled.h3``;

export const PlayerImg = styled.img``;

export const InfoContainer = styled.div``;

export const StatsTitle = styled.h3``;

export const StatValue = styled.p`
  margin: 0;
  padding: 0;
`;

export const StatContainer = styled.div`
  height: 100%;
  width: 100%;
  display: inline-block;
  background-color: ${colors.yellowLight};
  border-radius: 20px;
  border: 4px solid ${colors.yellow};
  padding: 20px 20px;
`;

export const Miss = styled.p`
  position: absolute;
  font-size: 24px;
  font-weight: bold;
  rotate: -25deg;
  margin-bottom: 10px;
`;

export const Damage = styled.span`
  position: absolute;
  font-size: 24px;
  font-weight: bold;
  rotate: 25deg;
  margin: 10px;
  color: ${colors.red};
`;
