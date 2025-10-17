import './Social-9th.css'
import React from 'react'
import Card from '../../Component/Card/Card'
import data from '../../../Data/data.json'
import Button from '../../Component/Button/Button'

function Social9() {
  return (
    <div className='cards9'>
       {
        data.nineth.map((card,index)=>(
            <Card 
            key={index}
            name={card.name}
            link={card.link}
            />
        ))
       }
    </div>
  )
}

export default Social9