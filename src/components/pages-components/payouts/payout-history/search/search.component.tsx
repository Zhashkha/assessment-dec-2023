import { useDispatch, useSelector } from "react-redux";

import {
  SearchButtonContainer,
  SearchContainer,
  SearchInput
} from "./search.styles";
import { selectPayoutsFilter } from "../../../../../state-management/redux/payouts/payouts.selector";
import { setPayoutsFilter } from "../../../../../state-management/redux/payouts/payouts.action";
import CustomButton from "../../../../shared-components/custom-button/custom-button.component";

const PayoutHistoryListSearch = () => {
  const { username } = useSelector(selectPayoutsFilter);
  const dispatch = useDispatch();

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    // TODO: debouncing
    dispatch(setPayoutsFilter({ username: event.target.value }));
  };

  return (
    <SearchContainer>
      <SearchInput value={username} onChange={handleChange} />
      <SearchButtonContainer>
        <CustomButton>Search</CustomButton>
      </SearchButtonContainer>
    </SearchContainer>
  );
};

export default PayoutHistoryListSearch;
