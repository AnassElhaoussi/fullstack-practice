import App from "./App";
import ReactDOM from 'react-dom/client'
import React from "react";
import './index.css'

const root = document.getElementById('root')
const createRoot = ReactDOM.createRoot(root)

createRoot.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
)