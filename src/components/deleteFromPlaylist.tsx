import React, { useState } from 'react';
import spotifyClient from '../services/spotifyClient';

const DeleteFromPlaylist = (props:{id:string;}) => {
    const [trackId, _] = useState(props.id);

    function refreshPage() {
        window.location.reload();
    }


    const handleDeleteFromPlaylist = () => {
        spotifyClient.removeTracksFromPlaylist('05HRgMzN9GgKN8C2zPUzV9', [`spotify:track:${trackId}`]).then(() => {
            refreshPage();
        }).catch((error) => {
            // Handle error
        });
    };

    return (
        <div>
            <button onClick={handleDeleteFromPlaylist}>Delete from Playlist</button>
        </div>
    );
};

export default DeleteFromPlaylist;
