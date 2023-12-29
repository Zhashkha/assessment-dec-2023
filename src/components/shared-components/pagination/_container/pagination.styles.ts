import styled, { css } from "styled-components";

interface PaginationPageNumberProps {
  $active?: boolean;
  $isLabelLarge?: boolean;
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

const pageNumberStyleLarge = css`
  width: 90px;
`;

const getPageNumberStyle = (props: PaginationPageNumberProps) => {
  const { $active, $isLabelLarge } = props;

  let result = $active
    ? `${pageNumberStyleActive}`
    : `${pageNumberStyleInactive}`;

  if ($isLabelLarge) {
    result = `${result}${pageNumberStyleLarge}`;
  }

  return result;
};

export const PaginationPageNumber = styled.span<PaginationPageNumberProps>`
  height: 25px;
  display: flex;
  justify-content: center;
  align-items: center;
  letter-spacing: 0.5px;
  line-height: 25px;
  font-size: 15px;
  font-family: "Open Sans Condensed";
  font-weight: bolder;

  padding: 0 10px;
  border: 1px solid black;

  ${getPageNumberStyle}
`;
