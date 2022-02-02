import styled from "styled-components";

export const CardItemContainer = styled.div`
  /* background-color: #fff; */
`;

export const CardItemWrapper = styled.div`
  display: flex;
  padding: 10px;
  margin-top: 10px;
  border-radius: 6px;
  background-color: #fff;

  & > div {
    flex: 1;
  }

  button {
    padding: 3px 5px;
    cursor: pointer;
  }
`;
