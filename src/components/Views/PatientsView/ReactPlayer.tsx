import React from 'react'
import ReactPlayer from 'react-player'


const ReactVideoPlayer = () => {
    return (
        <div style={{flex: 1, height: '100vh'}}>
            {/* <ReactPlayer url='https://www.youtube.com/watch?v=ysz5S6PUM-U' /> */}
            <ReactPlayer
                className='react-player'
                url='https://www.youtube.com/watch?v=ysz5S6PUM-U'
                width='100%'
                height='100%'
            />
        </div>
    )
}

export default ReactVideoPlayer;