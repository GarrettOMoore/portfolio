import React, {Component} from 'react'
import { withStyles } from '@material-ui/core/styles';
import MenuItem from '@material-ui/core/MenuItem';
import TextField from '@material-ui/core/TextField';


const Form = (props) =>  {

    return (
/* <form name="contact" method="post">
<input type="hidden" name="form-name" value="contact" />
  <p>
    <label><input className='form-name'type="text" name="name" placeholder="Name"/></label>   
  </p>
  <p>
    <label><input className='form-email'type="email" name="email" placeholder="Email"/></label>
  </p>
  <p>
    <label><input className='form-subject'type="text" name="subject" placeholder="Subject"/></label>
  </p>
  <p>
    <label> <textarea className='form-msg'name="message" placeholder="Message"></textarea></label>
  </p>
  <p>
    <button type="submit">SEND</button>
  </p>
</form> */

<form name="contact" method="post" data-netlify="true" data-netlify-honeypot="bot-field">
<input type="hidden" name="form-name" value="contact" />
  <p>
    <label><input type="text" name="name" placeholder="Name"/></label>   
  </p>
  <p>
    <label><input type="email" name="email" placeholder="Email"/></label>
  </p>
  <p>
    <label><input type="text" name="subject" placeholder="Subject"/></label>
  </p>
  <p>
    <label> <textarea name="message" placeholder="Message"></textarea></label>
  </p>
  <p>
    <button type="submit">SEND</button>
  </p>
</form>
    )
}

export default Form