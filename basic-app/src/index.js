//import react and reactDom library
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

//get a reference to the div with ID root
const element=document.getElementById('root');

//tell react to take controll of that element 
const root = ReactDOM.createRoot(element);

//extracted the component outside
/*
//create a component
function App(){
  const inputType='number';
  const minValue=5;
  return <input type={inputType} min={minValue} max={10}/>
}  
*/

//show the component on the screenf
root.render(<React.StrictMode><App /></React.StrictMode>);
