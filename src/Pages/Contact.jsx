import React from 'react'
import Form from '../Components/Form'
import ContactPic from '../Components/ContactPic'
import ContactIcons from '../Components/ContactIcons'


const Contact = (props) => {
    return(
        <>
        <p className='page-header'>Contact Me</p>
        <section className='contact-main'>
            <div className='contact-body'>
                <ContactPic />
                <ContactIcons />
                <Form />
            </div>
        </section>
        </>
    )
}

export default Contact