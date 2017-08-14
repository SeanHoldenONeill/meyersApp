import React from 'react'
import DuckImage from '../assets/Duck.jpg'
import Doughnut from '../assets/doughnut-credit.svg'
import './HomeView.scss'

export const HomeView = () => ( <
    div >
    <
    h4 > Welcome! < /h4> <
    img alt = 'This is doughnut credit, because Sean is great!'
    className = 'doughnut'
    src = { Doughnut }
    /> <
    /div>
)

export default HomeView