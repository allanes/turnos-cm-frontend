import React from 'react';
import Button from 'react-bootstrap/Button';

interface Video {
    url: string;
    title: string;
}

interface PlaylistTableProps {
    playlist: Video[];
    handleQuitarVideo: (url: string) => void;
    handlePlayVideo: (url: string) => void;
}

const PlaylistTable: React.FC<PlaylistTableProps> = ({ playlist, handleQuitarVideo, handlePlayVideo }) => {
    return (
        <div className='container-sm scrollable-content'>
            <table className='table table-striped table-hover table-xxl table-container-sm table-turns-container'>
                <thead className='table-success'>
                <tr>
                    {['Titulo', 'quitar', 'play'].map((item, index) => {
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
                                <td className='video-item'>{vid.title}</td>
                                <td className='video-item'>
                                <button 
                                    type='button' 
                                    className='btn btn-sm px-4 btn-success' 
                                    onClick={() => { handleQuitarVideo(vid.url) }}>
                                <p className='my-2'>X</p>
                                </button>
                                </td>
                                <td className='video-item'>
                                <button 
                                    type='button' 
                                    className='btn btn-sm px-4 btn-success' 
                                    onClick={() => { handlePlayVideo(vid.url) }}>
                                <p className='my-2'>Play</p>
                                </button>
                                </td>
                            </tr>
                            )
                        })}
                    </tbody>
            </table>
        </div>
    );
};

export default PlaylistTable;
