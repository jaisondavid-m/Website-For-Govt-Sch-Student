import './Card.css'
import Button from '../Button/Button'
import React from 'react'

function Card({name,link}) {
  return (
    <div className='Card'>
       <h2>{name}</h2>
       <Button link={link} name={name}/>
    </div>
    )
}

export default Card
