import { Fragment } from "react";
import { PaginationContainer, PaginationPageNumber } from "./pagination.styles";

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
  const pages = Array.from({ length: pagesCount }, (_, index) => index + 1);
  return (
    <PaginationContainer>
      {pages.map((page) => {
        return (
          <Fragment key={page}>
            {page !== currentPage ? (
              <PaginationPageNumber onClick={() => setPage(page)}>
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
    </PaginationContainer>
  );
};

export default Pagination;
