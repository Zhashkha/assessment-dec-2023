import styled, { css } from "styled-components";

interface PaginationPageNumberProps {
  active?: boolean;
}

export const PaginationContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  gap: 10px;
  margin-top: 20px;
`;

const pageNumberStyleActive = css`
  cursor: pointer;
  color: white;
  background-color: black;

  &:hover {
    background-color: white;
    color: black;
  }
`;

const pageNumberStyleInactive = css`
  cursor: default;
  background-color: white;
  color: black;
`;

const getPageNumberStyle = (props: PaginationPageNumberProps) => {
  return props.active ? pageNumberStyleActive : pageNumberStyleInactive;
};

export const PaginationPageNumber = styled.span<PaginationPageNumberProps>`
  height: 25px;
  letter-spacing: 0.5px;
  line-height: 25px;
  font-size: 15px;
  font-family: "Open Sans Condensed";
  font-weight: bolder;

  padding: 0 10px;
  border: 1px solid black;

  ${getPageNumberStyle}
`;
