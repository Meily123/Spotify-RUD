import React, { useEffect, useState } from 'react';
import '../assets/home.css';
import {fetchUserData} from "../services/spotifyUserDataService";
import Sidebar from "../components/sidebar";
import Topbar from "../components/topbar";
import Footer from "../components/footer";
import PlayArrowIcon from '@material-ui/icons/PlayArrow';
import PlaylistTrack from "./playlistTrack";
import getRecommendations from "../services/getRecommendation";
import spotifyClient from "../services/spotifyClient";
import AddToPlaylist from "../components/addToPlaylist";

function Recommendation() {
    const [playlists, setPlaylists] = useState<any[]>([]);
    const [recomendations, setRecomendations] = useState<any[]>([]);
    const seedTracks: string[] = [];
    const seedGenres = ['pop'];

    useEffect(() => {
        async function fetchData() {
            try {
                const accessToken = localStorage.getItem('access_token');
                const { _, playlistsData } = await fetchUserData(accessToken);
                setPlaylists(playlistsData.items);
                const response = await spotifyClient.getPlaylistTracks("05HRgMzN9GgKN8C2zPUzV9");
                response.items.map((track) => (
                    seedTracks.push(track.track.id)
                ))
            } catch (error) {
                console.error(error);
            }
        }

        fetchData();



        getRecommendations(seedTracks, seedGenres)
            .then((recommendations) => {
                setRecomendations(recommendations);
            })
            .catch((error) => {
                console.error('Error getting recommendations:', error);
            });
    }, []);

    return (
        <div className="home">
            <Sidebar/>
            <div className="main-container">
                <Topbar></Topbar>
                <div className="spotify-playlists">
                    <h2>Recomendation for you</h2>
                    <div className="list">
                        {recomendations.map((playlist) => (
                            <div key={playlist.id} className="item">
                                <img src={ playlist.album.images[0] !== undefined ? playlist.album.images[0].url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSJOIH3Nz5CvHBWCv2RPVgSQf_CPKOvvpzyAw&usqp=CAU"} alt={playlist.name} />
                                <div className="play">
                                    <AddToPlaylist id={playlist.id}/>
                                </div>
                                <h4>{playlist.name}</h4>
                                <p>{playlist.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
                <div className="spotify-playlists">
                    <h2>My Playlists</h2>
                    <div className="list">
                        {playlists.map((playlist) => (
                            <div key={playlist.id} className="item">
                                <img src={ playlist.images[0] !== undefined ? playlist.images[0].url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSJOIH3Nz5CvHBWCv2RPVgSQf_CPKOvvpzyAw&usqp=CAU"} alt={playlist.name} />
                                <div className="play">
                                    <span className="fa fa-play"><PlayArrowIcon/></span>
                                </div>
                                <h4>{playlist.name}</h4>
                                <p>{playlist.description}</p>
                            </div>
                        ))}
                    </div>
                    <PlaylistTrack id="05HRgMzN9GgKN8C2zPUzV9" />
                </div>
            </div>
            <Footer/>
        </div>
    );
}

export default Recommendation;
