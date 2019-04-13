import React from 'react'
import Kexp from '../Components/Kexp'
import BF from '../Components/BF'
import Cheveyo from '../Components/Cheveyo'
import InPink from '../Components/InPink'
import Babel from '../Components/Babel'


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