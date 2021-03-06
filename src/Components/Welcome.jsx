import React from 'react'
import { Trail } from 'react-spring/renderprops';

const letters = [
    {title: 'H',
    id: 1},
    {title: 'E',
    id: 2},
    {title: 'L',
    id: 3},
    {title: 'L',
    id: 4},
    {title: 'O',
    id: 5},
    {title: '!',
    id: 6}
   ]

const lettersTwo = [
    {title: 'D',
    id: 1},
    {title: 'L',
    id: 2},
    {title: 'R',
    id: 1},
    {title: 'O',
    id: 2},
    {title: 'W',
    id: 3},
  ]

function Welcome() {
    return(
      <>
        <Trail
        items={letters}
        keys={letter => letter.id}
        from={{ marginBottom: -30, opacity: 0}}
        to={{marginTop: 100,  opacity: 1 }}
        >
        {letter => props => (
            <div style={props} className="letter">
            {letter.title}
            </div>
          )}
        </Trail>
        <Trail
          className='welcome-box'
          items={lettersTwo}
          keys={letter => letter.id}
          delay='1800'
          from={{ marginRight: 200, opacity: 0}}
          to={{ marginLeft: -357, marginTop: 300, opacity: 1 }}
          >
          {letter => props => (
              <div style={props} className="letter-two">
              {letter.title}
              </div>
            )}
        </Trail>
        </>
    )
  }




export default Welcome