import { animals } from './animals';

import {React} from 'react';
import {createRoot} from 'react-dom/client';

const container = document.getElementById('app');
const root = createRoot(container);

const title = "";

const background = (<img className = 'background' alt = 'ocean' scr = '/images/ocean.jpg' />);

const images = [];
for(const animal in animals){
  images.push(<img key={animal} className='animal' alt={animal} src={animals[animal].image} aria-label={animal} role='button' onClick = {displayFact}/>);
}
function displayFact(e){
const animalName = e.target.alt;
const randomIndex= Math.floor(Math.random()* animals[animalName].facts.length);
const funFact = animals[animalName].facts[randomIndex];
document.getElementById('fact').innerHTML = funFact;
}
const showBackground = true;

const animalFacts = ( <div>
<div className = 'animals'>{images}</div>
<p id = 'fact'></p>
<h1>{title === "" ? "Click an animal for a fun fact": title}</h1>
{showBackground && background}
</div>);



root.render(animalFacts);

