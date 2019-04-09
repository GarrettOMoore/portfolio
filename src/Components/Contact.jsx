import React from 'react'
import Lagoon from './Lagoon';
import Form from './Form'
import ContactIcons from './ContactIcons'

const Contact = (props) => {
    return(
        <section className='contact-main'>
        <p className='page-header'>Contact</p>
        {/* <Lagoon /> */}
        <Form />
        <ContactIcons />
        </section>
    )
}

export default Contact