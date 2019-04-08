import React from 'react'

const Form = (props) => {
    return (
        <form name="contact" method="POST" data-netlify="true">
  <p>
    <label>Your Name: <input className='form-name'type="text" name="name" /></label>   
  </p>
  <p>
    <label>Your Email: <input className='form-email'type="email" name="email" /></label>
  </p>
  <p>
    <label>Message: <textarea className='form-msg'name="message"></textarea></label>
  </p>
  <p>
    <button type="submit">Send</button>
  </p>
</form>
    )
}

export default Form