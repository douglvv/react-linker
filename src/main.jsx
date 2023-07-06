import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { Provider } from 'react-redux'
import { persistor, store } from './redux/store.js';
import { PersistGate } from 'redux-persist/integration/react';
import { ReactNotifications } from 'react-notifications-component'
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css'
import 'react-notifications-component/dist/theme.css'


ReactDOM.createRoot(document.getElementById('root')).render(
  // <React.StrictMode>
    
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
      <ReactNotifications />
        <App />
      </PersistGate>
    </Provider>
  // </React.StrictMode>
)
