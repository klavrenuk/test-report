export interface ReportItem {
  id: number;
  date: string;
  transactionAmount: number;
  transactionType: "Purchase" | "Refund";
  userId: number;
  productName: string;
  quantity: number;
}
