import './Button.css'
import React from 'react'

function Button({link}) {
  return (
    <div>
      <a href={link} download><button className="card-btn">Download PDF</button></a>
    </div>
  )
}

export default Button
