import React from 'react'
import './Navigation.css'

export default function () {
  return (
    <>
            <div className='navigation'>
              <nav>
                <a className='active' href="#">About</a>
                <a href="#">Skills</a>
                <a href="#">Education</a>
                <a href="#">Contact</a>
              </nav>
            </div>
    </>
  )
}
