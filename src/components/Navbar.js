import React from 'react'
import ReactLogo from '../images/react-icon.png'

export default function Navbar() {
    return (
        <div className='navbar'>
            <img src={ReactLogo} alt='React Logo'/>
            <h3>ReactFacts</h3>
            <h4>React Course - Project 1</h4>
        </div>
    )
}