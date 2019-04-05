import React, {Component} from 'react'
import {Document, Page} from 'react-pdf'


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
        <Document file="./public/portfolio_v3_pdf.pdf">
            <Page pageNumber={this.state.pageNumber} />
        </Document>
        </div>
    )
  }
}
