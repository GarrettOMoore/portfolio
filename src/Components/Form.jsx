import React, {Component} from 'react'
import { withStyles } from '@material-ui/core/styles';
import MenuItem from '@material-ui/core/MenuItem';
import TextField from '@material-ui/core/TextField';


const Form = (props) =>  {

    return (
<form name="contact" method="POST" data-netlify="true" action='/Contact'>
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
</form>
    )
}

export default Form