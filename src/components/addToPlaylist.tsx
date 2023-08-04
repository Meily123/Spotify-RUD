import React, { useState } from 'react';
import spotifyClient from '../services/spotifyClient';

function AddToPlaylist ( props: { id: string; } ) {
    const [trackId, _] = useState(props.id);

    function refreshPage() {
        window.location.reload();
    }

    const handleAddToPlaylist = () => {
         spotifyClient.addTracksToPlaylist('05HRgMzN9GgKN8C2zPUzV9', [`spotify:track:${trackId}`]).then(() => {
             refreshPage();
         }).catch((error) => {
             // Handle error
         });
    };

    return (
        <div>
            <button onClick={handleAddToPlaylist}>Add to Playlist</button>
        </div>
    );
}

export default AddToPlaylist;
