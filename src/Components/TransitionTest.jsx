// import React, {Component} from 'react'
// import { Spring, animated, interpolate } from 'react-spring/renderprops'

// const TRIANGLE = 'M20,380 L380,380 L380,380 L200,20 L20,380 Z'
// const RECTANGLE = 'M20,20 L20,380 L380,380 L380,20 L20,20 Z'
// const styles = {
//   container: {
//     textContent: 'HELLO',
//     height: '100%',
//     display: 'flex',
//     justifyContent: 'center',
//     alignItems: 'center',
//     willChange: 'background',
//   },
//   shape: { width: 300, height: 300, willChange: 'transform' },
// }

// export default class NativeSpringExample extends Component {
//   state = { toggle: true }
//   toggle = () => this.setState(state => ({ toggle: !state.toggle }))
//   componentDidMount() {
//     // setInterval(() => this.forceUpdate(), 1000)
//   }
//   render() {
//     const toggle = this.state.toggle
//     return (
//       <Spring
//         native
//         from={{ fill: 'black' }}
//         to={{
//           fill: toggle ? '#2A363B' : '#E84A5F',
//           textContent: toggle ? 'HELLO' : 'WELCOME',
//           backgroundColor: toggle ? 'transparent' : 'transparent',
//           rotate: toggle ? '0deg' : '180deg',
//           scale: toggle ? 1.5 : 2.4,
//           shape: toggle ? TRIANGLE : RECTANGLE,
//         }}
//         toggle={this.toggle}
//         onRest={() => console.log('done')}>
//         {({ toggle, backgroundColor, fill, rotate, scale, shape, textContent }) => (
//           <animated.div className='triangle'style={{ ...styles.container, backgroundColor, textContent }}>
//             <animated.svg className='square'
//               style={{
//                 ...styles.shape,
//                 fill,
//                 transform: interpolate(
//                   [rotate, scale],
//                   (r, s) => `rotate3d(0,1,0,${r}) scale(${s})`
//                 ),
//               }}
//               version="1.1"
//               viewBox="0 0 400 400">
//               <g
//                 style={{ cursor: 'pointer' }}
//                 fillRule="evenodd"
//                 onClick={this.toggle}>
//                 <animated.path id="path-1" d={shape} />
//               </g>
              
//             </animated.svg>
//           </animated.div>
//         )}
//       </Spring>
//     )
//   }
// }


import React from 'react'
import LandingPic from '../Components/LandingPic'
import { Transition, animated } from 'react-spring/renderprops'
import '../styles.css'

export default class App extends React.PureComponent {
  state = { show: true }
  toggle = e => this.setState(state => ({ show: !state.show }))
  render() {
    return (
        <>
      <div className="reveals-main" onClick={this.toggle}>
        <Transition
          native
          items={this.state.show}
          from={{ position: 'absolute', overflow: 'hidden', height: 0 }}
          enter={[{ height: 'auto' }]}
          leave={{ height: 0 }}>
          {show =>
            show && (props => <animated.div style={props}><LandingPic /></animated.div>)
          }
        </Transition>
      </div>
            <div className="reveals-main-two" onClick={this.toggle}>
            <Transition
              native
              items={this.state.show}
              from={{ position: 'absolute', overflow: 'hidden', height: 0 }}
              enter={[{ height: 'auto' }]}
              leave={{ height: 0 }}>
              {show => show && (props => <animated.div style={props}>Hello!</animated.div>)
              }
            </Transition>
          </div>
          </>
    )
  }
}