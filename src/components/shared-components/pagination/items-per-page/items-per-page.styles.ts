import { styled } from "styled-components";

export const PaginationItemsPerPageContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  flex-wrap: wrap;
  gap: 15px;
`;

export const PaginationItemsPerPageLabel = styled.span`
  height: 50px;
  letter-spacing: 0.5px;
  line-height: 50px;
  font-size: 15px;
  font-family: "Open Sans Condensed";
  font-weight: bolder;
`;

export const PaginationItemsPerPageDropdown = styled.select`
  padding: 0.5em 0.6em 0.5em 0.9em;
  background-color: #fff;
  border: 1px solid black;
  border-radius: 0.25rem;
  color: #000;
  cursor: pointer;
`;

export const PaginationItemsPerPageDropdownOption = styled.option``;
