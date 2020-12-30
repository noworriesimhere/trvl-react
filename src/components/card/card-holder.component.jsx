import React from 'react';
import CardItem from './card.component';
import './card.styles.css';

const CardHolder = () => {
  return (
    <div className='cards'>
      <h1>Catchy Marketing Phrase</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src='images/img-9.jpg'
              text='Turpis egestas sed tempus urna et pharetra. '
              label='Time Management'
              path='/services'
            />
            <CardItem
              src='images/img-2.jpg'
              text='Nisi scelerisque eu ultrices vitae auctor. Massa ultricies mi quis hendrerit dolor magna eget est lorem.'
              label='Cooperation'
              path='/services'
            />
          </ul>
          <ul className='cards__items'>
            <CardItem
              src='images/img-3.jpg'
              text='Pulvinar neque laoreet suspendisse interdum consectetur libero. '
              label='Productivity'
              path='/services'
            />
            <CardItem
              src='images/img-4.jpg'
              text='Dignissim sodales ut eu sem integer vitae. '
              label='Teamwork'
              path='/products'
            />
            <CardItem
              src='images/img-8.jpg'
              text='Fringilla phasellus faucibus scelerisque eleifend donec pretium vulputate sapien nec.'
              label='Efficiency'
              path='/sign-up'
            />
          </ul>
        </div>
      </div>
    </div>
  );
};

export default CardHolder;
