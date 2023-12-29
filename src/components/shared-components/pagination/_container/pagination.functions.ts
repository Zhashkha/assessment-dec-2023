export function getPages(currentPage: number, totalCount: number): number[] {
  const pageNeighbours = 2;
  const maxConsequentNumbers = 2 * pageNeighbours + 1;
  const pages: number[] = [];

  if (totalCount <= maxConsequentNumbers + 2) {
    return Array.from({ length: totalCount }, (_, index) => index + 1);
  }

  if (currentPage - pageNeighbours <= 2) {
    pages.push(
      ...Array.from(
        { length: maxConsequentNumbers + 1 },
        (_, index) => index + 1
      )
    );
    pages.push(totalCount);
  } else if (totalCount - currentPage <= pageNeighbours + 1) {
    pages.push(1);
    pages.push(
      ...Array.from(
        { length: maxConsequentNumbers + 1 },
        (_, index) => totalCount - maxConsequentNumbers + index
      )
    );
  } else {
    pages.push(1);
    pages.push(
      ...Array.from(
        { length: maxConsequentNumbers },
        (_, index) => currentPage - pageNeighbours + index
      )
    );
    pages.push(totalCount);
  }

  return pages;
}
