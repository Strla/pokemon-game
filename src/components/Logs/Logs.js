import { LogsContainer, LogsTitle, LogsWrapper } from "./LogsStyle";

const Logs = ({ playerName, opponentName }) => {
  return (
    <>
      <LogsWrapper>
        <LogsTitle>Logs</LogsTitle>
        <LogsContainer>
          <p>
            {playerName} attacked {opponentName} for 50 dmg
          </p>
        </LogsContainer>
      </LogsWrapper>
    </>
  );
};

export default Logs;
