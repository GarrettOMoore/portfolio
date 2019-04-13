import React from 'react'
import lagoon from '../Images/lagoon.jpeg'


const LandingPic = (props) => {
    return(
      <section className='landing-box'>
        <img src={lagoon} className='landing-img'height={'100%'} width={'100%'}/>
      </section>
    )
}

export default LandingPic