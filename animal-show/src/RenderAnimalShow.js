import { useState } from "react";
import Animal from "./Animals";
import bird from './svg/bird.svg'
import cat from './svg/cat.svg'
import dog from './svg/dog.svg'
import cow from './svg/cow.svg'
import horse from './svg/horse.svg'
import heart from './svg/heart.svg'
import './css/RenderAnimalShow.css'

const svgMap={
  bird,
  cat,
  dog,
  cow,
  horse
}

function getRandomAnimals() {
  const animals = ["bird", "cat", "dog", "horse", "cow"];
  return animals[Math.floor(Math.random() * animals.length)];
}

function RenderAnimalShow() {
  const [animals, setAnimals] = useState([]);

  const handleClick = () => {
    setAnimals([...animals, getRandomAnimals()]);
  };

  const renderAnimals = animals.map((type, index) => {
    return <Animal type={svgMap[type]} index={index} love={heart} />;
  });

  return (
    <div className='app-container'>
      <button onClick={handleClick}>Show Animals</button>
      <div>{renderAnimals}</div>
    </div>
  );
}
export default RenderAnimalShow;
