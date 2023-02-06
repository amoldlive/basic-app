import React from "react";
import ReactDom from 'react-dom/client'
import SearchImages from "./api";
import App from "./App";

//SearchImages('cars');

const el=document.getElementById('root');
const root=ReactDom.createRoot(el);

root.render(<App/>);