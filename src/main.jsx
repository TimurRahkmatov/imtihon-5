import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
// styles
import 'react-toastify/dist/ReactToastify.css'
import './index.css'

// Bootstrap
import 'bootstrap/dist/css/bootstrap.min.css'


// Axios
import axios from 'axios'
import { localtoken } from './constains/index';
axios.defaults.baseURL = "https://nt-jobify.onrender.com/api/v1"
axios.defaults.headers.common["Content-Type"] = "application/json"


// Redux 
import { Provider } from "react-redux";
import { store } from './redux/store'

// Tooken
let token = localStorage.getItem(localtoken)
if (token) axios.defaults.headers.common[' access-token'] = token;

// Toast
import { ToastContainer } from "react-toastify";

// Router
import { BrowserRouter as Router } from "react-router-dom";
ReactDOM.createRoot(document.getElementById('root')).render(
  <Router>
    <Provider store={store}>
      <App />
      <ToastContainer theme='colored' />
    </Provider>
  </Router>
)
