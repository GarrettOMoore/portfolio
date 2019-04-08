import React from 'react'
import tumblin from '../Images/tumblin.png'
import record from '../Images/record-x.png'
import citizen from '../Images/citizenly-1.png'
import starbunker from '../Images/starbunker.png'

const Projects = (props) => {
    return(
        <section className='projects-main'>
        <p className='page-header'>PROJECTS:</p>
        <img src={tumblin} className='project-pic' width={'500px'} height={'500px'}/>
        <p>Tumblin info goes here...</p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium ipsam numquam provident, labore, id esse, a sed odio quia expedita at fugiat dolorum itaque quasi hic praesentium ratione. Laudantium, quod.    </p>
        <img src={record} className='project-pic' width={'500px'} height={'500px'} />
        <p>Record Exchange info goes here...</p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum minus deleniti, sint quam itaque id aliquid quasi dolores. Vitae, quo animi! Porro distinctio vero alias amet rem accusamus exercitationem omnis.</p>
        <img src={citizen} className='citizenly' width={'350px'} height={'620px'} />
        <p>Citizenly info goes here...</p>
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Facere velit voluptate quisquam pariatur labore accusantium? Libero, officia delectus nesciunt, totam, hic excepturi dolor praesentium error illum aliquam tenetur voluptatum iusto.</p>
        <img src={starbunker} className='citizenly'width={'350px'} height={'620px'}/>
        <p>Starbunker info goes here...</p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam ea doloribus possimus velit? Laborum, porro eius voluptatum vero sapiente fuga enim officia numquam quisquam ex quis cum deleniti animi quo.</p>
        </section>
    )
}

export default Projects