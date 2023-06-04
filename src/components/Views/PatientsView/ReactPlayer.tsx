import React from 'react'
import ReactPlayer from 'react-player'


const ReactVideoPlayer = () => {
    return (
        <div style={{flex: 1, height: '100vh'}}>
            {/* <ReactPlayer url='https://www.youtube.com/watch?v=ysz5S6PUM-U' /> */}
            <ReactPlayer
                className='react-player'
                url='https://www.youtube.com/watch?v=HPiv1pzIPRc'
                width='100%'
                height='100%'
                controls={true}
                playing={true}
                muted={true}
                config={{
                    youtube: {
                      playerVars: { autoplay: 1 }
                    },
                    file: {
                      forceVideo: true,
                      attributes: {
                        controlsList: 'nodownload'
                      }
                    }
                  }}
            />
        </div>
    )
}

export default ReactVideoPlayer;