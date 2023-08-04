export async function searchSpotify(accessToken: string | null, query: string): Promise<any> {
    const apiUrl = 'https://api.spotify.com/v1';

    const headers = {
        Authorization: `Bearer ${accessToken}`,
    };

    try {
        const response = await fetch(`${apiUrl}/search?q=${encodeURIComponent(query)}&type=track,album,artist,playlist`, { headers });
        if (!response.ok) {
            throw new Error('Failed to search on Spotify.');
        }
        return response.json();
    } catch (error) {
        console.error(error);
        throw new Error('Failed to search on Spotify.');
    }
}
