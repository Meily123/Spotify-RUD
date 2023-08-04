import axios from 'axios';

const apiUrl = 'https://api.spotify.com/v1';


export async function fetchUserData(accessToken: string | null): Promise<any> {
    const headers = {
        Authorization: `Bearer ${accessToken}`,
    };

    try {
        const userResponse = await axios.get(`${apiUrl}/me`, { headers });
        const userData = userResponse.data;

        const playlistsResponse = await axios.get(`${apiUrl}/me/playlists`, { headers });
        const playlistsData = playlistsResponse.data;

        return { userData, playlistsData };
    } catch (error) {
        console.error(error);
        throw new Error('Failed to fetch user data.');
    }
}
