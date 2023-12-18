import { PayoutsContainer } from "./payouts.styles";
import PayoutsTitle from "../../components/pages-components/payouts/title/payouts-title.component";
import PayoutHistory from "../../components/pages-components/payouts/payout-history/_container/payout-history.component";

const PayoutsPage: React.FC = () => {
  return (
    <PayoutsContainer>
      <PayoutsTitle />
      <PayoutHistory />
    </PayoutsContainer>
  );
};

export default PayoutsPage;
