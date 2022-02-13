import { useEffect, useState } from "react";
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
    fetch('http://localhost:3000/api/transactions')
      .then(response => response.json())
      .then(data => setTransactions(data));
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
