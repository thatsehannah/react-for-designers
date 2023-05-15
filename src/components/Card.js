import React from 'react'
import '../css/card.css'

const Card = (props) => (
  <div className="card">
    <img src={props.image} alt="card background" />
    <h3>{props.title}</h3>
    <p>{props.text}</p>
  </div>
)

export default Card
