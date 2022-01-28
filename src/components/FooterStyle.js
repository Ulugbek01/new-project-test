import styled from "styled-components";

const getSize = (size) => {
  let res = null;
  if (size > 10) {
    res = 30;
  } else {
    res = 8;
  }

  return res + "px";
};

export const Container = styled.div`
  /* background-color: blue; */
  padding: 20px;
  color: #333;
  font-size: ${({ size }) => getSize(size)};
  font-weight: 600;
`;
export const Button = styled.button`
  padding: 10px 20px;
  background-color: ${({ active }) => (active === "true" ? "blue" : "red")};
  color: #fff;
  outline: none;
  cursor: pointer;

  @media (max-width: 1000px) {
    font-size: 24px;
  }

  :active {
    background-color: blue;
    border: none;
  }

  :hover {
    box-shadow: 4px 3px 10px rgba(0, 0, 0, 0.4);
    transition: all 0.3s;
  }
`;
