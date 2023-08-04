import React, { useEffect, useState } from 'react';
import '../assets/home.css';
import {fetchUserData} from "../services/spotifyUserDataService";
import Sidebar from "../components/sidebar";
import Topbar from "../components/topbar";
import Footer from "../components/footer";
import PlayArrowIcon from '@material-ui/icons/PlayArrow';
import spotifyClient from "../services/spotifyClient";
import AddToPlaylist from "../components/addToPlaylist";
import DeleteFromPlaylist from "../components/deleteFromPlaylist";

function PlaylistTrack(props: { id: string; }) {
    const [tracks, setTracks] = useState<any[]>([]);

    useEffect(() => {
        const getPlaylistTracks = async (playlistId: string) => {
            try {
                const response = await spotifyClient.getPlaylistTracks(playlistId);
                setTracks(response.items);
            } catch (error) {
                console.error('Error fetching playlist tracks:', error);
                return [];
            }
        };

        getPlaylistTracks(props.id);
    }, []);

    return (
            <div className="spotify-tracks">
                <h2>Playlist Tracks</h2>
                <div className="list">
                    {tracks.map((track) => (
                        <div key={track.track.id} className="item">
                            <img src={ track.track.album.images[0] !== undefined ? track.track.album.images[0].url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSJOIH3Nz5CvHBWCv2RPVgSQf_CPKOvvpzyAw&usqp=CAU"} alt={track.track.name} />
                            <div className="play">
                                <DeleteFromPlaylist id={track.track.id}/>
                            </div>
                            <h4>{track.track.name}</h4>
                            <p>{track.track.description}</p>
                        </div>
                    ))}
                </div>
            </div>
    );
}

export default PlaylistTrack;
