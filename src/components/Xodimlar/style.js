import styled from "styled-components";

export const Container = styled.div`
  background-color: #eee;

  .add-btn {
    padding: 5px 20px;
    margin-left: 20px;
    background-color: #db8ced;
    cursor: pointer;
  }
`;

export const UsersCard = styled.div`
  display: flex;
  /* justify-content: center; */
  align-items: center;
  padding: 10px;
  margin-top: 8px;
  border-radius: 8px;
  background-color: #fff;

  & > p {
    flex: 1;
  }
`;
