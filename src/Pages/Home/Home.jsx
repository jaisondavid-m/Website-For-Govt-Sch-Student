import React from 'react'
import './Home.css'

function Home() {
  return (
    <div className='Home'>
       <h1 className='quote'>Don’t study to pass the exam — study to change your future.</h1>
       <section className="notice">
         <h2>Notice Board</h2>
         <div className="lists">
            <ul>
                <li>➡️Open menubar to see study materials</li>
                <li>➡️Remainder for NMMS - Coming Friday , Unit test 14 test will be conducted</li>
                <li>➡️Remainder for 10th Students - Prepare Well for Map Tests</li>
                <hr style={{marginTop:"30px"}}/>
            </ul>
         </div>
       </section>
       <section className="contact">
        <h1>Contact</h1>
        <h3>For Any Issues</h3>
        <p>Contact: Jasmine J (7373583144)</p>
       </section>
    </div>
  )
}

export default Home
