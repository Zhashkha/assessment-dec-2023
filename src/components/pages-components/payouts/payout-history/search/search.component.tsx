import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { SearchContainer, SearchInput } from "./search.styles";
import { selectPayoutsFilter } from "../../../../../state-management/redux/payouts/payouts.selector";
import { setPayoutsFilter } from "../../../../../state-management/redux/payouts/payouts.action";
import CustomButton from "../../../../shared-components/custom-button/custom-button.component";
import {
  useDebouncedValue,
  useIsMount
} from "../../../../../utils/customHooks";

const PayoutHistoryListSearch = () => {
  const [searchValue, setSearchValue] = useState("");
  const { username } = useSelector(selectPayoutsFilter);
  const debouncedSearchTerm = useDebouncedValue(searchValue, 500);
  const dispatch = useDispatch();
  const isMount = useIsMount();

  useEffect(() => {
    setSearchValue(username);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if (!isMount && debouncedSearchTerm !== username) {
      dispatch(setPayoutsFilter({ username: debouncedSearchTerm }));
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [debouncedSearchTerm]);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchValue(event.target.value);
  };

  const handleSubmit = (value: string) => {
    setSearchValue(value);
  };

  return (
    <SearchContainer>
      <SearchInput value={searchValue} onChange={handleChange} />
      <CustomButton onClick={() => handleSubmit(debouncedSearchTerm)}>
        Search
      </CustomButton>
    </SearchContainer>
  );
};

export default PayoutHistoryListSearch;
