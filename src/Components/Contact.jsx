import React from 'react'
import Lagoon from './Lagoon';
import Form from './Form'

const Contact = (props) => {
    return(
        <section className='contact-main'>
        <p className='page-header'>Contact</p>
        <Lagoon />
        <Form />
        <p>GITHUB HERE</p>
        <p>LINKEDIN</p>
        </section>
    )
}

export default Contact