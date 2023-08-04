import spotifyClient from "./spotifyClient";

const getRecommendations = async (seeds: string[], genres: string[]) => {
    try {
        const response = await spotifyClient.getRecommendations({
            seed_tracks: seeds,
            seed_genres: genres,
            limit: 20, // Number of recommended tracks to fetch
        });
        return response.tracks;
    } catch (error) {
        console.error('Error fetching recommendations:', error);
        return [];
    }
};

export default getRecommendations;