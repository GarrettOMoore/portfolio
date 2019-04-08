import React from 'react'
import Kexp from './Kexp'
import BF from './BF'
import Cheveyo from './Cheveyo'
import InPink from './InPink'
import Babel from './Babel'


const Music = (props) => {
    return(
      <section className='music-main'>
      <p className='page-header'>Music</p>
      <Babel />
      <BF />
      <Kexp />
      <Cheveyo />
      <InPink />
      </section>
    )
}

export default Music