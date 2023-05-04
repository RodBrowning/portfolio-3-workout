import './style.css'

import Card from './Card.tsx';
import React from 'react'
import img1 from '../../assets/img1.png';
import img2 from '../../assets/img2.png';
import img3 from '../../assets/img3.png';
import img4 from '../../assets/img4.png';
import img5 from '../../assets/img5.png';
import img6 from '../../assets/img6.png';

const Exercises = () => {
  return (
    <section id='exercises'>
      <div className="container">
        <div className="heading">
          <h3 className='text-size-3'>
            Popular Exercises
          </h3>
          <h6 className='text-size-6'>
            SEE MORE EXERCISES
          </h6>
        </div>
        <div className="cards">
          <Card 
            img={img1}
            title="Treadmill" 
            description="250 est calories "
            totalTime="58:24" 
            />
          <Card 
            img={img2}
            title="Stretching" 
            description="250 est calories "
            totalTime="58:24" 
            />
          <Card 
            img={img3}
            title="Yoga" 
            description="250 est calories "
            totalTime="58:24" 
            />
          <Card 
            img={img4}
            title="Running" 
            description="250 est calories "
            totalTime="58:24" 
            />
          <Card 
            img={img5}
            title="Lifting" 
            description="250 est calories "
            totalTime="58:24" 
            />
          <Card 
            img={img6}
            title="PushUp" 
            description="250 est calories "
            totalTime="58:24" 
            />
        </div>
      </div>
    </section>
  )
}

export default Exercises