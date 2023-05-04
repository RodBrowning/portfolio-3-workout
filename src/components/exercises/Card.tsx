import './style.css'

import React from 'react'

type Props = {
    img: string; 
    totalTime: string;
    title: string;
    description: string;
}

const card : React.FC<Props> = ({img, totalTime, title, description}) => {
  return (
    <div className="card">
        <div className="img-box">
        <img src={img} alt="img1" />
        <div className="timer">
            <h5 className='text-size-5'>
                {totalTime}
            </h5>
        </div>
        </div>
        <div className="card-body">
        <h2 className="title text-size-2">
            {title}
        </h2>
        <h6 className="description text-size-6">
            {description}
        </h6>
        </div>
    </div>
  )
}

export default card