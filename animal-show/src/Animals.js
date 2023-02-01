import { useState } from "react";
import './css/Animals.css'

function Animal(props) {
  const { type, love } = props;
  const [value,setValue] =useState(0);

  const clickhandler=()=>{
   if(value<10)
    setValue(value+2) ;

  };

  return (
    <div onClick={clickhandler} className='animal-show'>
      <img className="animal" src={type} alt="img"></img>
      <img 
      className="heart"
      src={love} 
      alt="love"
      style={{width: (10 + 10 * value ) }}
      ></img>
    </div>
  );
}

export default Animal;
