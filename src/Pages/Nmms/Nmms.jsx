import React from 'react'
import './Nmms.css'
import Card from '../../Component/Card/Card'
import data from '../../../Data/data.json'

function Nmms() {
  return (
    <div className='nmms-cards'>
       {
        data.nmms.map((card,index)=>(
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

export default Nmms
