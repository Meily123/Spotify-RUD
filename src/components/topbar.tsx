import React, {useState} from "react";
import {searchSpotify} from "../services/spotifySearchService";
import {fetchUserData} from "../services/spotifyUserDataService";
import PlayArrowIcon from "@material-ui/icons/PlayArrow";
import AddToPlaylist from "./addToPlaylist";

function Topbar(){
    const [userData, setUserData] = useState<any>(null);
    const [searchQuery, setSearchQuery] = useState('');
    const [searchResults, setSearchResults] = useState<any[]>([]); // Change 'any' to a proper type for search results

    const handleSearch = async () => {
        try {
            const accessToken = localStorage.getItem('access_token');
            const data = await searchSpotify (accessToken, searchQuery);
            setSearchResults(data.tracks.items);
            const { userData, _ } = await fetchUserData(accessToken);
            setUserData(userData);// Assuming 'items' is an array of search results in the API response
        } catch (error) {
            console.error(error);
        }
    };
    return (
        <div className="container">
            <div className="topbar">
                <div className="search">
                    <input
                        type="text"
                        value={searchQuery}
                        onChange={(e) => {setSearchQuery(e.target.value); handleSearch()}}
                        placeholder="Search.."
                    />
                </div>
                <div className="navbar">
                    {userData && (
                        <button type="button"> {userData.display_name}</button>
                    )}

                </div>
            </div>
            {searchResults.length > 0 && (
                <div className="spotify-playlists">
                    <h2>Search Results</h2>
                    <div className="list">
                        {searchResults.map((result) => (
                            <div key={result.id} className="item">
                                <img src={ result.album.images[0] !== undefined ? result.album.images[0].url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSJOIH3Nz5CvHBWCv2RPVgSQf_CPKOvvpzyAw&usqp=CAU"} alt={result.name} />
                                <div className="play">
                                    <AddToPlaylist id={result.id}/>
                                </div>
                                <h4>{result.name}</h4>
                                <p>{result.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            )}
        </div>
    )
}

export default Topbar;