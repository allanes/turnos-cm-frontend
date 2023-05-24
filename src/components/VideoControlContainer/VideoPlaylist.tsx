import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import io from 'socket.io-client';
import PlaylistTable from './PlaylistTable';

const socket = io('http://localhost:8000');

interface Video {
    url: string;
    title: string;
}

function VideoPlaylist() {
    const [currentVideo, setCurrentVideo] = useState<Video | null>(null);
    const [playlist, setPlaylist] = useState<Video[]>([]);
    const [newVideoUrl, setNewVideoUrl] = useState('url de video de youtube');
    const [volume, setVolume] = useState(0.8);
    const [muted, setMuted] = useState(false);
    const [playing, setPlaying] = useState(true);

    const fetchVideos = async (sala:number) => {
        const response = await axios.get<Video[]>(`http://localhost:8000/api/v1/video-control/lista-videos-youtube/${sala}`);
        setPlaylist(response.data);
        if (response.data.length > 0) {
            setCurrentVideo(response.data[0]);
        }
    };

    const handleQuitarVideo = (e: string, sala: number) => {
        socket.emit('quitar_video', { url: e, sala });
    };
    
    const handleVolumeChange = (e: React.ChangeEvent<HTMLInputElement>, sala: number) => {
        const nuevo_volumen = e.target.value
        socket.emit('volume', { volume: nuevo_volumen, sala });
    };

    useEffect(() => {
        fetchVideos(1); // Fetch videos for sala 1 initially
    }, []);

    const handlePlay = (sala: number) => {
        if (currentVideo !== null) {
            socket.emit('play', { video: currentVideo, sala });
            setPlaying(true);
        }
    };

    const handleMute = (sala: number) => {
        socket.emit('mute', sala);
        setMuted(!muted);
    };

    const handleNext = (sala: number) => {
        if (currentVideo !== null) {
            const currentIndex = playlist.indexOf(currentVideo);
            const nextVideo = playlist[currentIndex + 1];
            if (nextVideo) {
                setCurrentVideo(nextVideo);
                socket.emit('next', { video: nextVideo, sala });
            }
        }
    };

    const handleAddVideo = (sala: number) => {
        if (newVideoUrl !== '') {
            socket.emit('addVideo', { url: newVideoUrl, sala });
            setNewVideoUrl('');
            fetchVideos(sala);
        }
    };
        
    const ids_sala = [1,2]
    
    return (
        <div>
            {ids_sala.map((id_sala, index) => {
                return(        

                    // <div className='cardRoom'>
                    // <div className='cardRoom-Top'>
                        // <div className='col-12 col-md-6 col-xxl-4' key={index}>
                        <div>
                                <h2>Sala {id_sala}</h2>
                                <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                                    <div style={{ flex: 1, marginRight: '2rem' }}>
                                        <h1>{currentVideo?.title}</h1>
                                        <button 
                                            type='button' 
                                            className={'btn btn-sm px-4 btn-success'} 
                                            onClick={() => handlePlay(id_sala)}>
                                            {playing ? 'Pause' : 'Play'}                    
                                            {/* <p className='my-2'>Play</p> */}
                                        </button>
                                        <button 
                                            type='button' 
                                            className={'btn btn-sm px-4 btn-success'} 
                                            onClick={() => handleMute(id_sala)}>
                                            {muted ? 'Unmute' : 'Mute'}
                                            {/* <p className='my-2'>Mute</p> */}
                                        </button>
                                        <input type="range" min={0} max={1} step="any" value={volume} onChange={e => handleVolumeChange(e, id_sala)} />
                                        <hr />
                                        <Form>
                                            <Form.Group>
                                                <Form.Control 
                                                    type="text" 
                                                    value={newVideoUrl}
                                                    onChange={e => setNewVideoUrl(e.target.value)} 
                                                />
                                                <Button variant="primary" onClick={() => handleAddVideo(id_sala)}>Agregar video</Button>
                                            </Form.Group>
                                        </Form>
                                    </div>
                                    
                                    <div style={{ flex: 1 }}>
                                        <PlaylistTable 
                                            playlist={playlist} 
                                            handleQuitarVideo={(url) => handleQuitarVideo(url, id_sala)} 
                                            handlePlayVideo={() => handlePlay(id_sala)}
                                        />
                                    </div>
                                </div>
                    //         </div>
                    //     </div>
                    // </div>
                
                )
            }
            )}
        </div>
    )
}

export default VideoPlaylist;
