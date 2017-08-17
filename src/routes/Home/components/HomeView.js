import React from 'react'
import Sean from '../assets/Sean.jpg'
import './HomeView.scss'

export const HomeView = () => (
  <div>
    <h4>This guy!</h4>
    <img className='sean' src={Sean} />
    <img className='sean' src={Sean} />
  </div>
)

export default HomeView
