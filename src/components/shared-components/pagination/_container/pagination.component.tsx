import { Fragment } from "react";

import { PaginationContainer, PaginationPageNumber } from "./pagination.styles";
import { getPages } from "./pagination.functions";

interface PaginationProps {
  pagesCount: number;
  page: number;
  setPage: (page: number) => void;
}

const Pagination: React.FC<PaginationProps> = ({
  pagesCount,
  page: currentPage,
  setPage
}) => {
  const pages = getPages(currentPage, pagesCount);

  const isPreviousActive = currentPage !== 1;
  const isNextActive = currentPage !== pagesCount;

  let previousPage = 0;
  let dots = false;
  return (
    <PaginationContainer>
      <PaginationPageNumber
        $active={isPreviousActive}
        $isLabelLarge
        onClick={isPreviousActive ? () => setPage(currentPage - 1) : () => {}}
      >
        Previous
      </PaginationPageNumber>

      {pages.map((page) => {
        dots = page - previousPage > 1;
        previousPage = page;

        return (
          <Fragment key={page}>
            {dots && <div>...</div>}
            {page !== currentPage ? (
              <PaginationPageNumber $active onClick={() => setPage(page)}>
                {page}
              </PaginationPageNumber>
            ) : (
              <PaginationPageNumber onClick={() => {}}>
                {page}
              </PaginationPageNumber>
            )}
          </Fragment>
        );
      })}

      <PaginationPageNumber
        $active={isNextActive}
        $isLabelLarge
        onClick={isNextActive ? () => setPage(currentPage + 1) : () => {}}
      >
        Next
      </PaginationPageNumber>
    </PaginationContainer>
  );
};

export default Pagination;
