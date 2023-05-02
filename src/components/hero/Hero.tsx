import './style.css'

import React from 'react'
import hero from '../../assets/hero_transparent.png';
import heroFront from '../../assets/hero.png';

const Hero = () => {
  return (
    <section id="hero">
      <div className="container">
        <div className="left-container">
          <div className="upper-msg">
            <span className='span-pill'>NEW</span>
            <h6 className='text-size-6'>
              High Intensity workout to burn calories
            </h6>
          </div>
          <h1 className="main-title text-size-1">
            Cardio Exercise
          </h1>
          <h4 className="sub-msg">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </h4>
          <div className="action-btns">
            <button className='btn btn-primary'>
              Get Started
            </button>
            <button className='btn btn-dark'>
              Preview
            </button>
          </div>
        </div>
        <div className="right-container">
          <div className="boxes">
            <div className="exercise-info-box yellow">
              <p className="info-data">
                38:14
              </p>
              <p className="info-metric">
                TIME
              </p>
            </div>
            <div className="exercise-info-box red">
              <p className="info-data">
                165
              </p>
              <p className="info-metric">
                EST CALORIES
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="background">
        <div className="back-background">
          <img src={heroFront} alt="" />
        </div>
        <div className="front-background">
          <img src={hero} alt="" />
        </div>
      </div>
    </section>
  )
}

export default Hero