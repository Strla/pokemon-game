import styled from "styled-components";

export const Percentage = styled.div`
  color: ${({ value }) =>
    (value >= 50 && "#079325") ||
    (value < 50 && value >= 30 && "#FFCC00") ||
    (value < 30 && value >= 0 && "#FF2424")};
`;
