import styled from "styled-components";
import { colors } from "../../lib/style/theme";

export const MenuWrapper = styled.div``;
export const MenuTitle = styled.h3``;

export const MenuContainer = styled.div`
  height: 250px;
  width: 280px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 15px;
  background-color: ${colors.yellowLight};
  border-radius: 20px;
  border: 4px solid ${colors.yellow};
  padding: 20px 20px;
`;
