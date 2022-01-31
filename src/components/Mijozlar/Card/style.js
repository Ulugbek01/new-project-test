import styled from "styled-components";

export const UsersCard = styled.div`
  display: flex;
  background-color: #db8ced;
  padding: 10px;
  margin-top: 10px;
  & > p {
    flex: 4;
  }

  & > button {
    flex: 1;
    cursor: pointer;
  }
`;
