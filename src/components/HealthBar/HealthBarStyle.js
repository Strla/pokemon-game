import styled from "styled-components";
import { colors } from "../../lib/style/theme";

export const Percentage = styled.div`
  color: ${({ value }) =>
    (value >= 50 && "#079325") ||
    (value < 50 && value >= 30 && "#FFCC00") ||
    (value < 30 && value >= 0 && "#FF2424")};

  font-weight: bold;
`;

export const HpBar = styled.progress`
  background-color: ${colors.white};
  -webkit-appearance: none;
  accent-color: ${colors.greenLight};
  border-radius: 20px;
  height: 15px;
  border: 3px solid ${colors.green};
  border-color: ${({ value }) =>
    (value >= 50 && "#079325") ||
    (value < 50 && value >= 30 && "#FFCC00") ||
    (value < 30 && value >= 0 && "#FF2424")};

  &::-webkit-progress-bar {
    background-color: ${colors.white};
    border-radius: 20px;
  }

  &::-webkit-progress-value {
    background-color: ${({ value }) =>
      (value >= 50 && "#62FF84") ||
      (value < 50 && value >= 30 && "#FFF7D6") ||
      (value < 30 && value >= 0 && "#FF7575")};
    border-radius: 20px;
    transition: width 0.4s ease-in;
  }

  &::-moz-progress-bar {
    background-color: ${({ value }) =>
      (value >= 50 && "#62FF84") ||
      (value < 50 && value >= 30 && "#FFF7D6") ||
      (value < 30 && value >= 0 && "#FF7575")};
    border-radius: 20px;
    transition: width 0.4s ease-in;
  }
`;
