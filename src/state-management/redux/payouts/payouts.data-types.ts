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
