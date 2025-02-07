import { StrictMode } from 'react'
import './index.css'
import App from './App.jsx'
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";

const root = document.getElementById('root');
ReactDOM.createRoot(root).render(

  <StrictMode>
    <BrowserRouter>
     <App/>
    </BrowserRouter>
  </StrictMode>
);