import styled, { css } from "styled-components";
import { colors } from "../../lib/style/theme";

export const LoadingSpinnerContainer = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 5000;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const spinStyle = () => {
  return css`
    @keyframes spin {
      0% {
        transform: rotate(0deg);
      }
      100% {
        transform: rotate(360deg);
      }
    }
  `;
};

export const LoadingSpinner = styled.div`
  ${(props) => spinStyle(props)}
  width: 64px;
  height: 64px;
  border: 8px solid;
  border-color: ${colors.blueLight} transparent ${colors.blueLight} transparent;
  border-radius: 50%;
  animation: spin 1.2s linear infinite;
`;
