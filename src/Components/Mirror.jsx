import React from 'react'
import mirror from '../Images/mirror.jpg'
import research from '../Images/research_one.jpeg'


const Mirror = (props) => {
    return(
      <section className='mirror-box'>
        <img src={research} className='mirror-img'height={'100%'} width={'100%'}/>
      </section>
    )
}

export default Mirror