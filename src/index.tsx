import React from 'react';
import ReactDOM from 'react-dom';
import { createServer } from 'miragejs';
import { App } from './App';

createServer({
  routes() {
    this.namespace = 'api';

    this.get('/transactions', () => {
      return [
        {
          id: 1,
          title: 'Mercado',
          amount: 400,
          type: 'withdraw',
          category: 'Food',
          createdAt: new Date()
        },
        {
          id: 2,
          title: 'Salário',
          amount: 3000.00,
          type: 'deposit',
          category: 'Job',
          createdAt: new Date()
        },
        {
          id: 3,
          title: 'Curso Ignite',
          amount: 814.93,
          type: 'withdraw',
          category: 'Courses',
          createdAt: new Date()
        },
        {
          id: 4,
          title: 'Ração',
          amount: 57.98,
          type: 'withdraw',
          category: 'Pet',
          createdAt: new Date()
        }
      ]
    })
  }
})

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
