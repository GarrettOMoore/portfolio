import React from 'react'
import Form from './Form'
import ContactPic from './ContactPic'
import ContactIcons from './ContactIcons'


const Contact = (props) => {
    return(
        <section className='contact-main'>
        <p className='page-header'>Contact Me</p>
        <ContactPic />
        <ContactIcons />
        <Form />
        </section>
    )
}

export default Contact