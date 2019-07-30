import React from 'react'
import mirror from '../Images/mirror.jpg'
import research from '../Images/lagoon.jpeg'


const Mirror = (props) => {
    return(
      <section className='mirror-box'>
        <img src={research} className='mirror-img'height={'75%'} width={'75%'}/>
      </section>
    )
}

export default Mirror