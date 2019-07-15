import React, {Component} from 'react'
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEye } from '@fortawesome/free-solid-svg-icons'
import { findIconDefinition } from '@fortawesome/fontawesome-svg-core'

library.add(faEye)

export default class Portfolio extends Component {
    constructor(props) {
        super(props)
        this.state = {
            numPages: null,
            pageNumber: 1
        }
    }

    render() {

    
    return(
        <div className='portfolio'>
          <FontAwesomeIcon className='eye-icon'icon="eye" size={'5x'} />
          <p className='dl-res'>Resume</p>
        </div>

    )
  }
}

