import styled, { css } from "styled-components";
import { colors, fonts } from "./theme";
import { ReactComponent as KodiLogo } from "../../assets/svg/Kodi-logo.svg";

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
  flex-direction: column;
  justify-content: center;
  align-items: center;
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
  fill: ${colors.green};
`;

export const Wrapper = styled.div`
  margin-top: 230px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
