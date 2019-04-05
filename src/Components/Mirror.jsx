import React from 'react'
import mirror from '../Images/1510977_10204794010143434_4011853223414972228_n.jpg'


const Mirror = (props) => {
    return(
      <section className='mirror-box'>
        <img src={mirror} className='mirror-img'height={'300px'} width={'300px'}/>
      </section>
    )
}

export default Mirror