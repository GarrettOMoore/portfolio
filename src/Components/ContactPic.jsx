import React from 'react'
import mirror from '../Images/mirror.jpg'


const ContactPic = (props) => {
    return(
      <section className='mirror-box'>
        <img src={mirror} className='contact-img'height={'35%'} width={'35%'}/>
      </section>
    )
}

export default ContactPic