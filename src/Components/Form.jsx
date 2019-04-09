import React from 'react'

const Form = (props) => {
    return (
        <form name="contact" method="POST" data-netlify="true">
  <p>
    <label>Name: <input className='form-name'type="text" name="name" /></label>   
  </p>
  <p>
    <label>Email: <input className='form-email'type="email" name="email" /></label>
  </p>
  <p>
    <label>Subject: <input className='form-subject'type="text" name="subject" /></label>
  </p>
  <p>
    <label> <textarea className='form-msg'name="message" placeholder="Message"></textarea></label>
  </p>
  <p>
    <button type="submit">SEND</button>
  </p>
</form>
    )
}

export default Form