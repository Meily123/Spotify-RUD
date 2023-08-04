import SpotifyWebApi from 'spotify-web-api-js';

const spotifyClient = new SpotifyWebApi();
const accessToken = localStorage.getItem('access_token');
if (accessToken) {
    spotifyClient.setAccessToken(accessToken);
}

export default spotifyClient;
