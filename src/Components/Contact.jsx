import React from 'react'
import Form from './Form'
import ContactPic from './ContactPic'

const Contact = (props) => {
    return(
        <section className='contact-main'>
        <p className='page-header'>Contact Me</p>
        <ContactPic />
        <Form />
        </section>
    )
}

export default Contact