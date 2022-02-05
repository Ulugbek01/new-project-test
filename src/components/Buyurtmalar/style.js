import styled from "styled-components";

// const getData = (value) => {
//   console.log(value);
// };

export const SwitchContainer = styled.div`
  width: 120px;
  border: 1px solid #444;
  border-radius: 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const Switch1 = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  cursor: pointer;
  background-color: ${({ a }) => (a ? "#000" : "blue")};
`;

export const Switch2 = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  cursor: pointer;
  background-color: ${({ a }) => (a ? "#000" : "blue")};
`;
