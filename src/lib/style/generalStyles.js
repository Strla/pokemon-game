import styled, { css } from "styled-components";
import { colors, fonts } from "./theme";
import { ReactComponent as KodiLogo } from "../../assets/svg/Kodi-logo.svg";
import { ReactComponent as Arrow } from "../../assets/svg/arrow.svg";

export const Button = styled.button`
  border: 5px solid ${colors.blueLight};
  height: 48px;
  font-size: 16px;
  width: 220px;
  background-color: ${colors.blue};
  color: ${colors.white};
  border-radius: 30px;
  transition: box-shadow 0.2s ease-in-out;
  font-family: ${fonts.primary};

  &:hover {
    box-shadow: 1px 2px 4px 2px rgba(0, 0, 0, 0.25);
    cursor: pointer;
  }
`;

export const Main = styled.main`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;

  ${(props) =>
    props.isGame &&
    `
    justify-content: space-around;
    flex-wrap: wrap;

  `}
`;

export const Break = styled.div`
  flex-basis: 100%;
  height: 0;
`;

export const LogsAndMenuContainer = styled.div`
  display: flex;
  flex-grow: 1;
  justify-content: "flex-start";
  margin: 30px 50px;
  align-content: "space-around";
  gap: calc(10%);

  ${(props) =>
    props.gameOver &&
    `
      justify-content: center;
      align-items: center;
    `}
`;

export const LogoImg = styled.img`
  width: 600px;
  position: relative;
`;

const svgStyles = ({ color, hoverColor }) => {
  return css`
    & path {
      fill: ${color || colors.blue};
    }

    &:hover path {
      fill: ${hoverColor || colors.blueLight};
    }
  `;
};

export const LogoIcon = styled(KodiLogo)`
  ${(props) => svgStyles(props)}
  position: absolute;
  transform: rotate(-30deg);
`;

export const ArrowIcon = styled(Arrow)`
  margin-bottom: 25px;

  ${(props) =>
    props.turn &&
    `
      rotate: 180deg;

  `}
`;

export const Wrapper = styled.div`
  margin-top: 230px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const WinnerTitle = styled.p`
  font-size: 40px;
  font-weight: bold;
  position: absolute;
  margin-left: auto;
  margin-right: auto;
  top: 10%;
  left: 0;
  right: 0;
  text-align: center;
`;
