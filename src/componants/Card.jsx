import React from 'react'
import './Card.css'
import { space } from 'postcss/lib/list'

const Card = (props) => {
  return (
    <div>
      <div className="card">
        <a href={props.project.visit} target='_main'> <img src={props.project.img} alt="image" /></a>


        <div className="footer">
          <h2>{props.project.title}</h2>
          <p>{props.project.des}</p>

          <div className="language">
            {
              props.project.lang.map((value, index) => (
                <span key={index} >{value}</span>
              ))
            }
          </div>

        </div>
      </div>
    </div>
  )
}

export default Card