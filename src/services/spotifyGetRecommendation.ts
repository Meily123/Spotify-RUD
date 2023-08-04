export async function getTrackRecommendations(accessToken: string, seedTracks: string[], limit: number = 10): Promise<any> {
    const apiUrl = 'https://api.spotify.com/v1';

    const headers = {
        Authorization: `Bearer ${accessToken}`,
    };

    try {
        const seedTracksParam = seedTracks.join(',');
        const response = await fetch(`${apiUrl}/recommendations?seed_tracks=${encodeURIComponent(seedTracksParam)}&limit=${limit}`, {
            headers,
        });
        if (!response.ok) {
            throw new Error('Failed to get track recommendations from Spotify.');
        }
        return response.json();
    } catch (error) {
        console.error(error);
        throw new Error('Failed to get track recommendations from Spotify.');
    }
}
