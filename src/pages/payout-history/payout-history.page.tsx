import "./payout-history.page.css";

export interface IBodyProps {
  className?: string;
}

const Body = ({ className, ...props }: IBodyProps): JSX.Element => {
  return (
    <div className={"body" + " " + className}>
      <div className={"rectangle-106"}></div>
      <div className={"top-bar"}>
        <div className={"right-block"}></div>
      </div>
      <div className={"earning-report"}>
        <div className={"table-title"}>
          <div className={"date"}>Date &amp; Time </div>
          <div className={"status"}>Status </div>
          <div className={"earnings"}>Value </div>
        </div>
        <div className={"earning-row"}>
          <div className={"frame-395"}>
            <div className={"fri-apr-9-2021"}>Fri, Apr 9, 18:03 </div>
            <div className={"frame-397"}>
              <div className={"number"}>
                <div className={"paid"}>Pending </div>
              </div>
            </div>
            <div className={"_140-00"}>$12.00 </div>
          </div>
        </div>
        <div className={"earning-row2"}>
          <div className={"frame-395"}>
            <div className={"fri-apr-9-2021"}>Sat, Apr 10 </div>
            <div className={"frame-397"}>
              <div className={"number2"}>
                <div className={"paid"}>Paid </div>
              </div>
            </div>
            <div className={"_140-00"}>$2,568.00 </div>
          </div>
        </div>
        <div className={"earning-row"}>
          <div className={"frame-395"}>
            <div className={"fri-apr-9-2021"}>Sun, Apr 11 </div>
            <div className={"frame-397"}>
              <div className={"number2"}>
                <div className={"paid"}>Paid </div>
              </div>
            </div>
            <div className={"_140-00"}>$1,375.88 </div>
          </div>
        </div>
        <div className={"earning-row2"}>
          <div className={"frame-395"}>
            <div className={"fri-apr-9-2021"}>Mon, Apr 12 </div>
            <div className={"frame-397"}>
              <div className={"number2"}>
                <div className={"paid"}>Paid </div>
              </div>
            </div>
            <div className={"_140-00"}>$4,955.86 </div>
          </div>
        </div>
        <div className={"earning-row"}>
          <div className={"frame-395"}>
            <div className={"fri-apr-9-2021"}>Tue, Apr 13 </div>
            <div className={"frame-397"}>
              <div className={"number2"}>
                <div className={"paid"}>Paid </div>
              </div>
            </div>
            <div className={"_140-00"}>$2,233.44 </div>
          </div>
        </div>
        <div className={"earning-row2"}>
          <div className={"frame-395"}>
            <div className={"fri-apr-9-2021"}>Wed, Apr 14 </div>
            <div className={"frame-397"}>
              <div className={"number2"}>
                <div className={"paid"}>Paid </div>
              </div>
            </div>
            <div className={"_140-00"}>$6,140.00 </div>
          </div>
        </div>
        <div className={"earning-row"}>
          <div className={"frame-395"}>
            <div className={"fri-apr-9-2021"}>Thu, Apr 15 </div>
            <div className={"frame-397"}>
              <div className={"number2"}>
                <div className={"paid"}>Paid </div>
              </div>
            </div>
            <div className={"_140-00"}>$789.32 </div>
          </div>
        </div>
      </div>
      <div className={"widget-title"}>
        <div className={"title"}>
          <div className={"tag"}></div>
          <div className={"overview"}>Payout History </div>
        </div>
      </div>
      <div className={"dashboard"}>
        <div className={"payouts"}>Payouts </div>
      </div>
    </div>
  );
};

export default Body;