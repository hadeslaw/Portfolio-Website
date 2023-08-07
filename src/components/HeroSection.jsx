import React, {useState} from 'react';
import { Link } from 'react-router-dom';

import { Button } from './button';
import './herosection.css';
import '../App.css';

function HeroSection() {
  return (
    <div className='hero-container'>
      <h1>Zuheib D Musse</h1>
      <p>Why do blackpeople only have nightmares?</p>

        <p>Because they shot the last one that had a dream.</p>
      <div className='hero-btns'>
        <a href='https://github.com/hadeslaw'>
        <Button
          className='btns'
          buttonStyle='btn--outline'
          buttonSize='btn--large'
        >
          My work.
        </Button></a>
        <a href='https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley'>
          <Button
          className='btns'
          buttonStyle='btn--primary'
          buttonSize='btn--large'
          onClick={console.log('hey')}
        >
          WATCH TRAILER <i className='far fa-play-circle' />
        </Button>
        </a>
        
      </div>
    </div>
  );
}

export default HeroSection;


function Spoiler(){
useState
}


function Counter() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <button onClick={() => setCount(count + 1)} style={{background: count > 5 ? 'black' : 'transparent'}}>click me</button>
      <span>{count}</span>
    </div>
  )
}
