import { v4 as uuid } from "uuid";

interface PayoutDataRaw {
  metadata: { page: number; limit: number; totalCount: number };
  data: PayoutDataItemRaw[];
}

interface PayoutDataItemRaw {
  dateAndTime: string;
  status: string;
  value: string;
  username: string;
}

interface PayoutData {
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

export enum PayoutStatus {
  pending = "Pending",
  paid = "Completed"
}

export const PayoutStatusText: Record<PayoutStatus, string> = {
  [PayoutStatus.pending]: "Pending",
  [PayoutStatus.paid]: "Paid"
};

const PAYOUT_DATA_RAW: PayoutDataRaw = {
  metadata: { page: 1, limit: 10, totalCount: 489 },
  data: [
    {
      dateAndTime: "2023-09-14T00:00:00.000Z",
      status: "Pending",
      value: "$5490.85",
      username: "Larry.Boyer24"
    },
    {
      dateAndTime: "2023-09-14T01:00:00.000Z",
      status: "Completed",
      value: "$5014.91",
      username: "Ernestina.Hartmann0"
    },
    {
      dateAndTime: "2023-09-14T02:00:00.000Z",
      status: "Pending",
      value: "$9131.20",
      username: "Lonnie.Tremblay99"
    },
    {
      dateAndTime: "2023-09-14T03:00:00.000Z",
      status: "Completed",
      value: "$7932.68",
      username: "Keven.Blick"
    },
    {
      dateAndTime: "2023-09-14T04:00:00.000Z",
      status: "Pending",
      value: "$6104.44",
      username: "Kara76"
    },
    {
      dateAndTime: "2023-09-14T05:00:00.000Z",
      status: "Completed",
      value: "$8860.44",
      username: "Marcos.Bruen9"
    },
    {
      dateAndTime: "2023-09-14T06:00:00.000Z",
      status: "Pending",
      value: "$5530.82",
      username: "Nathanial.Frami95"
    },
    {
      dateAndTime: "2023-09-14T07:00:00.000Z",
      status: "Completed",
      value: "$6551.54",
      username: "Idella99"
    },
    {
      dateAndTime: "2023-09-14T08:00:00.000Z",
      status: "Pending",
      value: "$3326.85",
      username: "Flavie.OHara35"
    },
    {
      dateAndTime: "2023-09-14T09:00:00.000Z",
      status: "Completed",
      value: "$4321.62",
      username: "Kamille_Batz"
    }
  ]
};

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

const PAYOUT_DATA: PayoutData = {
  ...PAYOUT_DATA_RAW,
  data: PAYOUT_DATA_RAW.data.map((item) => {
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
  })
};

export default PAYOUT_DATA;
