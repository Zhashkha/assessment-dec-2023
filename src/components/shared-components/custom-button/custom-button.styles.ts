import styled from "styled-components";

export const CustomButtonContainer = styled.button`
  width: auto;
  min-width: 165px;
  height: 50px;
  display: flex;
  justify-content: center;
  padding: 0 35px 0 35px;
  border: none;
  cursor: pointer;
  letter-spacing: 0.5px;
  line-height: 50px;
  font-size: 15px;
  text-transform: uppercase;
  font-family: "Open Sans Condensed";
  font-weight: bolder;
  color: white;
  background-color: black;

  &:hover {
    border: 1px solid black;
    background-color: white;
    color: black;
  }
`;
