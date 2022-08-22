import styled from "styled-components";
import { colors } from "../../lib/style/theme";

export const LogsWrapper = styled.div``;

export const LogsTitle = styled.h3``;

export const LogsContainer = styled.div`
  height: 250px;
  width: 35vw;
  background-color: ${colors.yellowLight};
  border-radius: 20px;
  border: 4px solid ${colors.yellow};
  padding: 20px 20px;
  text-align: left;
  overflow: auto;
`;
