import React from 'react'

type Props = {
	number: number;
	title: string;
	numVideos: number;
}

const SeriesItem: React.FC<Props> = ({number, title, numVideos}) => {
  return (
    <div className="series-item">
        <div className="item-number">
            <p className='text-size-4'>{number.toString().padStart(2, '0')}</p>
        </div>
        <div className='series-info'>
            <h2 className="title text-size-2">{title}</h2>
            <p className="description text-size-6">{numVideos.toString().padStart(2, '0')} {numVideos > 1 ? "videos" : "video"}</p>
        </div>
        <div className="arrow">
            <svg width="27" height="22" viewBox="0 0 27 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M1 11.1051L23.0588 11.1051" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M15.3382 0.999384L25.2169 10.7261L15.3382 20.4528" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
        </div>
    </div>
  )
}

export default SeriesItem;