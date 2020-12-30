import React from 'react';
import { Button } from '../custom-button/custom-button.component';
import './hero-section.styles.css';

const HeroSection = () => {
  return (
    <div className='hero-container'>
      <div className='hero__video-wrap'>
        <video src='/videos/video-1.mp4' autoPlay loop muted playsInline />
      </div>
      <h1>Modernize Your Business</h1>
      <p>What are you waiting for?</p>
      <div className='hero-btns'>
        <Button
          className='btns'
          buttonStyle='btn--outline'
          buttonSize='btn--large'
        >
          Get Started
        </Button>
        <Button
          className='btns'
          buttonStyle='btn--primary'
          buttonSize='btn--large'
        >
          Learn About Us <i className='far fa-play-circle' />
        </Button>
      </div>
    </div>
  );
};

export default HeroSection;
