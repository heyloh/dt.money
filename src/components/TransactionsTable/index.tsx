import { AxiosRequestConfig } from "axios";
import { useEffect, useState } from "react";
import { api } from "../../services/api";
import { Container } from "./styles";

interface Transaction {
  id: number;
  title: string;
  amount: number;
  type: string;
  category: string;
  createdAt: Date;
}

export function TransactionsTable() {
  const [transactions, setTransactions] = useState<Array<Transaction>>([]);
  useEffect(() => {
    api.get('transactions')
      .then((response: AxiosRequestConfig) => {
        setTransactions(response.data);
      });
  }, []);

  return (
    <Container>
      <table>
        <thead>
          <tr>
            <th>Título</th>
            <th>Valor</th>
            <th>Categoria</th>
            <th>Data</th>
          </tr>
        </thead>
        <tbody>
          {transactions.map(transaction => (
            <tr key={transaction.id}>
              <td>{transaction.title}</td>
              <td className={transaction.type}>R$ {transaction.amount}</td>
              <td>{transaction.category}</td>
              <td>{transaction.createdAt.toLocaleString("pt-BR")}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </Container>
  );
}
