import App from "./App";
import ReactDOM from 'react-dom/client'
import React from "react";
import './index.css'
import {BrowserRouter} from 'react-router-dom'

const root = document.getElementById('root')
const createRoot = ReactDOM.createRoot(root)

createRoot.render(
    <BrowserRouter>
        <React.StrictMode>
            <App />
        </React.StrictMode>
    </BrowserRouter>
)