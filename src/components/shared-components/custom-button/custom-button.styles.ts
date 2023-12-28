import styled, { css } from "styled-components";

interface CustomButtonProps {
  inverted?: boolean;
}

const buttonStyles = css`
  background-color: black;
  color: white;
  border: none;

  &:hover {
    background-color: white;
    color: black;
    border: 1px solid black;
  }
`;

const buttonStylesInverted = css`
  background-color: white;
  color: black;
  border: 1px solid black;

  &:hover {
    background-color: black;
    color: white;
    border: none;
  }
`;

const getButtonStyle = (props: CustomButtonProps) => {
  return props.inverted ? buttonStylesInverted : buttonStyles;
};

export const CustomButtonContainer = styled.button<CustomButtonProps>`
  width: auto;
  min-width: 165px;
  height: 50px;
  display: flex;
  justify-content: center;
  padding: 0 35px 0 35px;
  cursor: pointer;
  letter-spacing: 0.5px;
  line-height: 50px;
  font-size: 15px;
  text-transform: uppercase;
  font-family: "Open Sans Condensed";
  font-weight: bolder;

  ${getButtonStyle}
`;
