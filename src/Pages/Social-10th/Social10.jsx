import './Social-10th.css'
import React from 'react'
import Card from '../../Component/Card/Card'
import data from '../../../Data/data.json'

function Social10() {
  return (
    <div className='cards10'>
       {
        data.tenth.map((card,index)=>(
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

export default Social10
