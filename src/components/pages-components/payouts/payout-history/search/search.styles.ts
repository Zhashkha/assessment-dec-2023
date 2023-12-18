import styled from "styled-components";

export const SearchContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  gap: 20px;
  background-color: ${(props) => props.theme.colourBackgroundLight};
`;

export const SearchInput = styled.input`
  height: 50px;
  letter-spacing: 0.5px;
  line-height: 50px;
  font-size: 15px;
  font-family: "Open Sans Condensed";
  font-weight: bolder;
`;

export const SearchButtonContainer = styled.div``;
