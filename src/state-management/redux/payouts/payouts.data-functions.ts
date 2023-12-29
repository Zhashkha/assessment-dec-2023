import { v4 as uuid } from "uuid";

import {
  GetPayoutsNormalized,
  PayoutDataItem,
  PayoutDataRaw,
  PayoutStatus,
  PayoutStatusText
} from "./payouts.data-types";

const formatDateAndTime = (dateAndTime: string, status: string): string => {
  const inputDate = new Date(dateAndTime);

  const dateTimeFormat: Intl.DateTimeFormatOptions =
    status === PayoutStatus.paid
      ? {
          weekday: "short",
          month: "short",
          day: "numeric"
        }
      : {
          weekday: "short",
          month: "short",
          day: "numeric",
          hour: "numeric",
          minute: "numeric",
          hour12: false
        };

  const formattedDate = new Intl.DateTimeFormat("en-US", dateTimeFormat).format(
    inputDate
  );

  return formattedDate;
};

export const getPayoutsNormalized = (
  pageIndex: number,
  payoutData: PayoutDataRaw,
  isFilterApplied: boolean = false
): GetPayoutsNormalized => {
  let payouts: PayoutDataItem[] = [];
  let data: { [key: number]: PayoutDataItem[] } = {
    [pageIndex]: payouts
  };

  if (payoutData.data) {
    payouts = payoutData.data.map((item) => {
      const payoutStatus =
        item.status === PayoutStatus.paid
          ? PayoutStatus.paid
          : PayoutStatus.pending;
      return {
        ...item,
        id: uuid(),
        dateAndTime: formatDateAndTime(item.dateAndTime, item.status),
        status: payoutStatus,
        statusText: PayoutStatusText[payoutStatus],
        amount: item.value
      };
    });

    if (isFilterApplied) {
      const {
        metadata: { limit: itemsPerPage, totalCount: itemsCount }
      } = payoutData;
      const pagesCount = Math.ceil(itemsCount / itemsPerPage);

      for (let page = 1; page <= pagesCount; page++) {
        data[page] = payouts.slice(
          itemsPerPage * (page - 1),
          itemsPerPage * page
        );
      }
    } else {
      data = {
        [pageIndex]: payouts
      };
    }
  }

  return {
    metadata: payoutData.metadata,
    data
  };
};
