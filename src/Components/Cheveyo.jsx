import React, {Component} from 'react'
import YouTube from 'react-youtube';

class Cheveyo extends Component {
    render() {
        const opts = {
            height: '300',
            width: '500',
            playerVars: {
                autoplay: 1
            }
        };
        return(
            <YouTube
              className='video'
              videoId='evtbAH2gW2Q'
              opts={opts}
              onReady={this._onReady}
              />
        )
    }

    _onReady(event) {
        event.target.pauseVideo();
    }
}

export default Cheveyo