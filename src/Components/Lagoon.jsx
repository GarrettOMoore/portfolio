import React from 'react'
import lagoon from '../Images/lagoon.jpeg'
import research from '../Images/research_ry.png'


const Lagoon = (props) => {
    return(
      <section className='lagoon-box'>
        <img src={lagoon} className='lagoon-img' height={'300px'} width={'300px'}/>
      </section>
    )
}

export default Lagoon