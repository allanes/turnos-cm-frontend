import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Button from 'react-bootstrap/Button';
import ListGroup from 'react-bootstrap/ListGroup';
import Form from 'react-bootstrap/Form';
import io from 'socket.io-client';
import ReactPlayer from 'react-player';

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

    const fetchVideos = async () => {
        const response = await axios.get<Video[]>('http://localhost:8000/lista-videos-gdrive');
        setPlaylist(response.data);
        if (response.data.length > 0) {
            setCurrentVideo(response.data[0]);
        }
    };

    const handleQuitarVideo = (e: string) => {
        const nuevo_volumen = e
        socket.emit('quitar_video', nuevo_volumen);
        // setVolume();
      };
    
    const handleVolumeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const nuevo_volumen = e.target.value
        socket.emit('volume', nuevo_volumen);
        // setVolume();
      };

    useEffect(() => {
        fetchVideos();
    }, []);

    const handlePlay = () => {
        console.log('Manejando evento Play')
        if (currentVideo !== null) {
            socket.emit('play', currentVideo);
            // socket.emit('play');
            setPlaying(true);
        }
    };

    const handleMute = () => {
        socket.emit('mute');
        setMuted(!muted);
      };

    const handleNext = () => {
        console.log('Manejando evento Next')
        if (currentVideo !== null) {
            const currentIndex = playlist.indexOf(currentVideo);
            const nextVideo = playlist[currentIndex + 1];
            if (nextVideo) {
                setCurrentVideo(nextVideo);
                socket.emit('next', nextVideo);
            }
        }
    };

    const handleAddVideo = () => {
        console.log('Manejando evento Agregar video')
        if (newVideoUrl !== '') {
            socket.emit('addVideo', newVideoUrl);
            setNewVideoUrl('');
            fetchVideos();
        }
    };
    
    const ids_sala = [1,2]
    
    return (
        <div>
            {ids_sala.map((id_sala, index) => {
                return(        

                    // <div className='col-12 col-md-6 col-xxl-4' key={index}>
                    //     <div className='cardRoom'>
                    //         <div className='cardRoom-Top'>
                                <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                                    <div style={{ flex: 1, marginRight: '2rem' }}>
                                        <h1>{currentVideo?.title}</h1>
                                        <button 
                                            type='button' 
                                            className={'btn btn-sm px-4 btn-success'} 
                                            onClick={handlePlay}>
                                            {playing ? 'Pause' : 'Play'}                    
                                            {/* <p className='my-2'>Play</p> */}
                                        </button>
                                        <button 
                                            type='button' 
                                            className={'btn btn-sm px-4 btn-success'} 
                                            onClick={handleMute}>
                                            {muted ? 'Unmute' : 'Mute'}
                                            {/* <p className='my-2'>Mute</p> */}
                                        </button>
                                        <input type="range" min={0} max={1} step="any" value={volume} onChange={handleVolumeChange} />
                                        <hr />
                                        <Form>
                                            <Form.Group>
                                                <Form.Control 
                                                    type="text" 
                                                    value={newVideoUrl}
                                                    onChange={e => setNewVideoUrl(e.target.value)} 
                                                />
                                                <Button variant="primary" onClick={handleAddVideo}>Agregar video</Button>
                                            </Form.Group>
                                        </Form>
                                    </div>
                                    
                                    <div style={{ flex: 1 }}>
                                        <div>

                                            <div className='container-sm'>
                                                <table className='table table-striped table-hover table-xxl table-container-sm table-turns-container'>
                                                    <thead className='table-success'>
                                                    <tr>
                                                        {['Titulo', 'quitar'].map((item, index) => {
                                                        return (
                                                            <th key={index}>{item}</th>
                                                        )
                                                        })}
                                                    </tr>
                                                    </thead>
                                                    <tbody className='table-group-divider' >
                                                    {playlist.map((vid, index) => {
                                                        return (
                                                        <tr key={index}>
                                                            {/* <th scope='row'>{vid.title}</th> */}
                                                            <td>{vid.title}</td>
                                                            <td>
                                                            <button 
                                                                type='button' 
                                                                className='btn btn-sm px-4 btn-success' 
                                                                onClick={() => { handleQuitarVideo(vid.url) }}>
                                                            <p className='my-2'>X</p>
                                                            </button>
                                                            </td>
                                                        </tr>
                                                        )
                                                    })}
                                                    </tbody>
                                                </table>

                                            </div>
                                        </div>
                                
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
