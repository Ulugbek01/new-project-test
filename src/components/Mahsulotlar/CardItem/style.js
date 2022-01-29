import styled from "styled-components";

export const Container = styled.div``;

export const ItemContainer = styled.div`
  display: flex;
  align-items: center;
  height: 60px;
  background-color: #fff;
  border-radius: 4px;
  margin-top: 8px;
  padding-left: 20px;

  .btn {
    cursor: pointer;
  }

  &:first-child .btn {
    margin-right: 20px;
  }
`;

ItemContainer.Title = styled.div`
  flex: ${({ size }) => (size === "id" ? "1" : "2")};
  border-left: 1px solid #222;
  border-right: 1px solid #222;
  padding: 10px;

  :first-child {
    border-left: none;
  }
`;
