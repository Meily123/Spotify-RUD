import React from "react";


function Sidebar(){
    return(
        <div className="sidebar">
            <div className="logo">
                <a href="#">
                    <img src="https://storage.googleapis.com/pr-newsroom-wp/1/2018/11/Spotify_Logo_CMYK_Green.png"
                         alt="Logo"/>
                </a>
            </div>

            <div className="navigation">
                <ul>
                    <li>
                        <a href="/home">
                            <span className="fa fa-home"></span>
                            <span>Home</span>
                        </a>
                    </li>

                    <li>
                        <a href="#">
                            <span className="fa fa-search"></span>
                            <span>Search</span>
                        </a>
                    </li>

                    <li>
                        <a href="#">
                            <span className="fa fas fa-book"></span>
                            <span>Your Library</span>
                        </a>
                    </li>
                </ul>
            </div>

            <div className="navigation">
                <ul>
                    <li>
                        <a href="#">
                            <span className="fa fas fa-plus-square"></span>
                            <span>Create Playlist</span>
                        </a>
                    </li>
                    <li>
                        <a href="/recommendation">
                            <span className="fa fas fa-plus-square"></span>
                            <span>Recommendation</span>
                        </a>
                    </li>
                    <li>
                        <a href="#">
                            <span className="fa fas fa-heart"></span>
                            <span>Liked Songs</span>
                        </a>
                    </li>
                </ul>
            </div>

            <div className="policies">
                <ul>
                    <li>
                        <a href="#">Cookies</a>
                    </li>
                    <li>
                        <a href="#">Privacy</a>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default Sidebar;
