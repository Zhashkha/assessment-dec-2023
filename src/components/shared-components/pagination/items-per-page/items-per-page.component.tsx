import {
  PaginationItemsPerPageContainer,
  PaginationItemsPerPageDropdown,
  PaginationItemsPerPageDropdownOption,
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
  const optionValues = itemsPerPageValues.slice().sort((a, b) => a - b);

  const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setItemsPerPage(parseInt(event.target.value));
  };

  return (
    <PaginationItemsPerPageContainer>
      <PaginationItemsPerPageLabel>{label}</PaginationItemsPerPageLabel>
      <PaginationItemsPerPageDropdown
        defaultValue={currentValue}
        onChange={handleChange}
      >
        {optionValues &&
          optionValues.map((optionValue) => {
            return (
              <PaginationItemsPerPageDropdownOption
                key={optionValue}
                value={optionValue}
              >
                {optionValue}
              </PaginationItemsPerPageDropdownOption>
            );
          })}
      </PaginationItemsPerPageDropdown>
    </PaginationItemsPerPageContainer>
  );
};

export default PaginationItemsPerPage;
