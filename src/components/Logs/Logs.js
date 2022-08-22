import { LogsContainer, LogsTitle, LogsWrapper } from "./LogsStyle";

const Logs = ({ logs }) => {
  return (
    <>
      <LogsWrapper>
        <LogsTitle>Logs</LogsTitle>
        <LogsContainer>
          {logs.map((log) => {
            return <p key={log.id}>{log.message}</p>;
          })}
        </LogsContainer>
      </LogsWrapper>
    </>
  );
};

export default Logs;
