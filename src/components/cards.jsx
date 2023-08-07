import React from 'react';
import './Cards.css';
import CardItem from './carditem';

function Cards() {
  return (
    <div className='cards'>
      <h1>BBDDEEFF</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src='images/ASL.jpg'
              text='Random statment'
              label='Brothers'
              path='/Portfolio'
            />
            <CardItem
              src='images/'
              text=''
              label=''
              path='/'
            />
          </ul>
          <ul className='cards__items'>
            <CardItem
              src='images/'
              text=''
              label=''
              path='/'
            />
            <CardItem
              src='images/'
              text=''
              label=''
              path='/'
            />
            <CardItem
              src='images/'
              text=''
              label=''
              path='/'
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;