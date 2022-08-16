import styled from "styled-components";
import { colors } from "../../lib/style/theme";

export const PlayerContainer = styled.div`
  margin: 20px 30px;
`;

export const HealthContainer = styled.div``;

export const NameAndImgContainer = styled.div`
  text-align: center;
`;

export const PlayerName = styled.h3``;

export const PlayerImg = styled.img``;

export const InfoContainer = styled.div``;

export const StatsTitle = styled.h3``;

export const StatValue = styled.p``;

export const StatContainer = styled.div`
  height: 100%;
  width: 100%;
  display: inline-block;
  background-color: ${colors.yellowLight};
  border-radius: 20px;
  border: 4px solid ${colors.yellow};
  padding: 20px 20px;
`;
