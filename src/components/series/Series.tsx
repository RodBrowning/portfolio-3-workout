import './style.css'

import React from 'react'
import SeriesItem from './SeriesItem.tsx'

const Series = () => {
  return (
    <section id="series">
      <div className="container series-list">
				<SeriesItem number={1} title={'Workout at Home'} numVideos={15} />
				<SeriesItem number={2} title={'Stay Strong and Fit'} numVideos={48} />
				<SeriesItem number={3} title={'High Intensity'} numVideos={25} />
				<SeriesItem number={4} title={'Simple Workout'} numVideos={35} />
				<SeriesItem number={5} title={'Burn Calories'} numVideos={12} />
      </div>
    </section>
  )
}

export default Series