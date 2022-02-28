import React from 'react';
import ReactDOM from 'react-dom';
import { createServer, Model } from 'miragejs'
import { App } from './App';


createServer({
  //banco de dados interno do miragejs
  models: {
    transaction: Model
  },

  seeds(server) {
    server.db.loadData({
      transactions: []
    })
  },

  routes() {
    this.namespace = 'api';//rota que identifica a chamada api(definida no fetch do index.tsx da transactionTable)

    //quando o metodo .get for acionado, a informações retornadas serão as definidas no return
    this.get('/transactions', () => {
      return this.schema.all('transaction')
    })


    // os dados concebidos pelo request.requestBody são entregues em formato de texto, precisando do metodo parse para transformar em um objeto js
    //schema se refere ao banco de dados
    this.post('transactions', (schema, request) => {
      const data = JSON.parse(request.requestBody)

      return schema.create('transaction', data)
    })

  }
})


ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

