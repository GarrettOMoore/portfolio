import React, {Component} from 'react'
import {Document, Page} from 'react-pdf'
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEye } from '@fortawesome/free-solid-svg-icons'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { findIconDefinition } from '@fortawesome/fontawesome-svg-core'

const eye = findIconDefinition({ prefix: 'fas', iconName: 'eye' })

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
        {/* <Document file="./public/portfolio_v3_pdf.pdf">
            <Page pageNumber={this.state.pageNumber} />
        </Document> */}
        </div>
    )
  }
}

