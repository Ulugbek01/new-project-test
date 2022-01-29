import styled, { css } from "styled-components";

const getSize = (size) => {
  switch (size) {
    case "small":
      return "14px";
    case "medium":
      return "20px";
    case "large":
      return "28px";
    default:
      return "32px";
  }
};

const buttonSize = (size) => {
  switch (size) {
    case "small":
      return "200px";
    case "medium":
      return "320px";
    case "large":
      return "400px";
    default:
      return "150px";
  }
};

const primaryColor = css`
  color: #d63384;
  text-shadow: 1px 2px 3px #666;
  font-weight: 600;
`;

export const Container = styled.div`
  background-color: ${({ para }) => (para ? "white" : "black")};
  padding: 20px;
  color: ${({ para }) => (para ? "blcak" : "white")};
  font-size: ${({ size }) => getSize(size)};
  font-weight: 600;
  height: 100vh;
`;
export const Button = styled.button`
  padding: 10px 20px;
  background-color: ${({ active }) => (active === "true" ? "blue" : "red")};
  color: ${primaryColor};
  outline: none;
  cursor: pointer;
  font-size: ${({ size }) => getSize(size)};
  width: ${({ size }) => buttonSize(size)};
  width: ${buttonSize};

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

// Container.Box = styled.div`
//   width: 400px;
//   height: 100px;
//   background-color: blue;
// `;
