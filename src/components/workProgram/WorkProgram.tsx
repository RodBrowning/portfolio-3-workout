import './style.css'

import React from 'react'
import img7 from '../../assets/img7.png'
import img8 from '../../assets/img8.png'
import img9 from '../../assets/img9.png'

const WorkProgram = () => {
  return (
    <section id='work-program'>
      <div className="container">
        <div className="content">
          <div className="big-heading">
            <h1 className='text-size-1'>Workout Program Made For You</h1>
          </div>
          <div className="call-to-action">
            <p className='text-size-4'>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua consectetur adipiscing.
            </p>
            
            <button className='btn btn-primary'>
              Get Started
            </button>
          </div>
        </div>
        <div className="cards">
          <div className="left-images">
            <div className="img-card">
              <img src={img7} alt="" />
              <div className="data">
                <div className="name">
                  <h5 className='text-size-5'>Samantha William</h5>
                  <h6 className='text-size-6'>Trainer</h6>
                </div>
              </div>
            </div>
            <div className="img-card">
              <img src={img9} alt="" />
              <div className="data">
                <div className="name">
                  <h5 className='text-size-5'>Karen Summer</h5>
                  <h6 className='text-size-6'>Trainer</h6>
                </div>
              </div>
            </div>
          </div>
          <div className="right-images">
            <div className="img-card">
              <img src={img8} alt="" />
              <div className="data">
                <div className="name">
                  <h5 className='text-size-5'>Jonathan Wise</h5>
                  <h6 className='text-size-6'>Trainer</h6>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default WorkProgram