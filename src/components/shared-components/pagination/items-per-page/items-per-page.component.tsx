import {
  PaginationItemsPerPageContainer,
  PaginationItemsPerPageInput,
  PaginationItemsPerPageInputItem,
  PaginationItemsPerPageLabel
} from "./items-per-page.styles";

interface PaginationItemsPerPageProps {
  label: string;
  itemsPerPageValues: number[];
  currentValue: number;
  setItemsPerPage: (page: number) => void;
}

const PaginationItemsPerPage: React.FC<PaginationItemsPerPageProps> = ({
  label,
  itemsPerPageValues,
  currentValue,
  setItemsPerPage
}) => {
  const inputValues = itemsPerPageValues.slice().sort((a, b) => a - b);

  const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setItemsPerPage(parseInt(event.target.value));
  };

  return (
    <PaginationItemsPerPageContainer>
      <PaginationItemsPerPageLabel>{label}</PaginationItemsPerPageLabel>
      <PaginationItemsPerPageInput
        defaultValue={currentValue}
        onChange={handleChange}
      >
        {inputValues &&
          inputValues.map((inputValue) => {
            return (
              <PaginationItemsPerPageInputItem
                key={inputValue}
                value={inputValue}
              >
                {inputValue}
              </PaginationItemsPerPageInputItem>
            );
          })}
      </PaginationItemsPerPageInput>
    </PaginationItemsPerPageContainer>
  );
};

export default PaginationItemsPerPage;
