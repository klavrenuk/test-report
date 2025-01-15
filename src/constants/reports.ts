import type { Column } from "@/types/table";

export const columnsReports: Column[] = [
  { title: "ID", dataIndex: "id", key: "id" },
  { title: "Дата", dataIndex: "date", key: "date" },
  {
    title: "Сумма транзакции",
    dataIndex: "transactionAmount",
    key: "transactionAmount",
  },
  {
    title: "Тип транзакции",
    dataIndex: "transactionType",
    key: "transactionType",
  },
  { title: "ID пользователя", dataIndex: "userId", key: "userId" },
  { title: "Товар", dataIndex: "productName", key: "productName" },
  { title: "Количество", dataIndex: "quantity", key: "quantity" },
];
