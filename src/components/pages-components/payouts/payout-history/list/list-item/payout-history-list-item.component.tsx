import { PayoutDataItem } from "../../../../../../state-management/redux/payouts/payouts.data-types"; 
import {
  AmountText,
  DateAndTimeText,
  PayoutHistoryListItemContainer,
  StatusContainer,
  StatusText,
  UsernameText
} from "./payout-history-list-item.styles";

interface PayoutHistoryListItemProps {
  parity: number;
  data: PayoutDataItem;
}

const PayoutHistoryListItem: React.FC<PayoutHistoryListItemProps> = ({
  parity,
  data
}) => {
  return (
    <PayoutHistoryListItemContainer parity={parity}>
      <DateAndTimeText>{data.dateAndTime}</DateAndTimeText>
      <UsernameText>{data.username}</UsernameText>
      <StatusContainer>
        <StatusText status={data.status}>{data.statusText}</StatusText>
      </StatusContainer>
      <AmountText>{data.amount}</AmountText>
    </PayoutHistoryListItemContainer>
  );
};

export default PayoutHistoryListItem;
