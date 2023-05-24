import React from 'react'
import { useState, useEffect } from 'react'
import ReactPlayer from 'react-player'
import { useParams } from 'react-router-dom'
import { useSocket } from '../../../hooks/useSocket'

import axios from 'axios'

interface SocketData {
    video?: {
      url: string;
    };
    volume?: number;
  }

interface VideoUrl {
    url: string;    
}

const ReactVideoPlayer = () => {
    const [url, setUrl] = useState('')
    const [volume, setVolume] = useState(0.8)
    const [muted, setMuted] = useState(false)
    const [playing, setPlaying] = useState(true)
    const { roomId = "" } = useParams<{ roomId: string }>()

    // Handle play event
    const handlePlayEvent = (data: SocketData) => {
        console.log('Evento play recibido de server')
        if (data.video) {
            console.log(`Video: ${data.video.url}`)
            setUrl(data.video.url);
            setPlaying(true);
          }
    }

    // Handle volume event
    const handleVolumeEvent = (data: SocketData) => {
        console.log('Evento volume recibido de server')
        if (data.volume !== undefined) {
            console.log(`Volumen: ${data.volume}`)
            setVolume(data.volume);
          }
    }

    // Handle next event
    const handleNexVideotEvent = (data: SocketData) => {
        console.log('Evento siguiente video recibido de server')
        if (data.video) {
            console.log(`Video: ${data.video.url}`)
            setUrl(data.video.url);
          }
    }

    const handleMute = (data: SocketData) => {
        console.log('Evento mute recibido de server')
        if (data) {
            console.log(`Estado antes de cambiar: ${muted}`)
            setMuted(!muted);
        }
    };

    // Listen for events
    useSocket('play', handlePlayEvent)
    useSocket('volume', handleVolumeEvent)
    useSocket('next', handleNexVideotEvent)
    useSocket('mute', handleMute)

    // useEffect(() => {
        // const fetchInitialState = async () => {
        //     try {
        //         const res = await axios.get('/api/video/status'); // Update the URL to match your backend endpoint
    
        //         setUrl(res.data.url);
        //         setVolume(res.data.volume);
        //         setPlaying(res.data.playing);
        //     } catch (error) {
        //         console.error('Failed to fetch video status:', error);
        //     }
        // }
    
        // fetchInitialState();
        // Assume we have some way of getting the current waiting room id
    // Fetch the current video url, volume, and playing status for this waiting room
    // fetch(`/api/v1/video-control/lista-videos-youtube/${roomId}/current-state`)
    //     .then(response => response.json())
    //     .then(data => {
    //         setUrl(data.video.url);
    //         setVolume(data.volume);
    //         setPlaying(data.playing);
    //     });
    // }, [url, volume, muted, playing])
        const fetchVideos = async (sala:string) => {
            const response = await axios.get<VideoUrl>(`http://localhost:8000/api/v1/video-control/lista-videos-youtube/${sala}/current-state`);
            
            setUrl(response.data.url);
            console.log(`video traido: ${response.data.url}`)
        };
        // fetchVideos(roomId)
        // },[url])

        useEffect(() => {
            fetchVideos("1"); // Fetch videos for sala 1 initially
        }, []);

    return (
        <div style={{flex: 1, height: '100vh'}}>
        <ReactPlayer
            className='react-player'
            url={url}
            playing={playing}
            volume={volume}
            width='100%'
            height='100%'
        />
        </div>
    )
}

export default ReactVideoPlayer;