import { v4 as uuid } from "uuid";

export interface PayoutDataRaw {
  metadata: { page: number; limit: number; totalCount: number };
  data: PayoutDataItemRaw[];
}

export interface PayoutDataItemRaw {
  dateAndTime: string;
  status: string;
  value: string;
  username: string;
}

export interface PayoutData {
  metadata: { page: number; limit: number; totalCount: number };
  data: PayoutDataItem[];
}

export interface PayoutDataItem {
  id: string;
  dateAndTime: string;
  username: string;
  status: PayoutStatus;
  statusText: string;
  amount: string;
}

export interface FilterPayout {
  username?: string;
  status?: string;
}

interface PayoutsMetadata {
  page: number;
  limit: number;
  totalCount: number;
}

export enum PayoutStatus {
  pending = "Pending",
  paid = "Completed"
}

export const PayoutStatusText: Record<PayoutStatus, string> = {
  [PayoutStatus.pending]: "Pending",
  [PayoutStatus.paid]: "Paid"
};

export interface GetPayoutsNormalized {
  metadata: PayoutsMetadata;
  data: {
    [key: number]: PayoutDataItem[];
  };
}

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
