import React, { useEffect, useState } from 'react';
import '../assets/home.css';
import {fetchUserData} from "../services/spotifyUserDataService";
import Sidebar from "../components/sidebar";
import Topbar from "../components/topbar";
import Footer from "../components/footer";
import PlayArrowIcon from '@material-ui/icons/PlayArrow';
import PlaylistTrack from "./playlistTrack";

function Home() {
    const [playlists, setPlaylists] = useState<any[]>([]);

    useEffect(() => {
        async function fetchData() {
            try {
                const params = new URLSearchParams(window.location.hash.substr(1));
                let accessToken = params.get('access_token');
                if (accessToken){
                    localStorage.setItem('access_token', accessToken);
                } else {
                    accessToken = localStorage.getItem('access_token');
                }
                const { _, playlistsData } = await fetchUserData(accessToken);
                setPlaylists(playlistsData.items);
            } catch (error) {
                console.error(error);
            }
        }

        fetchData();
    }, []);

    return (
        <div className="home">
            <Sidebar/>
        <div className="main-container">
            <Topbar></Topbar>
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

export default Home;
