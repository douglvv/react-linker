import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css'
import 'react-notifications-component/dist/theme.css'
import store from './redux/store.js';
import { Provider } from 'react-redux'
import { ReactNotifications } from 'react-notifications-component'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <ReactNotifications />
      <App />
    </Provider>
  </React.StrictMode>,
)
