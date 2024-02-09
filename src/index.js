import React from "react";
import ReactDOM from "react-dom";
import './index.css';
// import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter } from "react-router-dom";
// import App from "./App"
import App from "./FacebookClone/App"
// import Appss from "./Practice/Appss";
ReactDOM.render(
    <React.StrictMode>
    <BrowserRouter>
        <App/>
    </BrowserRouter>
    </React.StrictMode>
, document.getElementById("root")
);
