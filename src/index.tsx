import React from 'react';
import ReactDOM from 'react-dom';
import { createServer, Model } from 'miragejs';
import { App } from './App';

createServer({
  models: {
    transaction: Model,
  },

  seeds(server) {
    server.db.loadData({
      transactions: [
        {
          id: 1,
          title: 'Freelance - Website',
          type: 'deposit',
          category: 'Dev',
          amount: 5000,
          createdAt: new Date('2022-02-05 10:07:00')
        },
        {
          id: 2,
          title: 'Contas',
          type: 'withdraw',
          category: 'Casa',
          amount: 1000,
          createdAt: new Date('2022-02-11 14:26:00')
        },
      ],
    })
  },

  routes() {
    this.namespace = 'api';

    this.get('/transactions', () => {
      return this.schema.all('transaction');
    });

    this.post('/transactions', (schema, request) => {
      const data = JSON.parse(request.requestBody);
      return schema.create('transaction', data);
    });
  }
})

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
