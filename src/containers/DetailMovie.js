import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import DetailMovieCard from '../components/DetailMovieCard';
import tmdb from '../apis/tmdb';
import { Box } from '@mui/system';

const DetailMovie = () => {
    let params = useParams();
    const [singleMovie, setSingleMovie] = useState([]);

    useEffect(() => {
        const fetchMovie = async () => {
            try {
                const fetchedMovie = await require("../mock-movie-single.json");
                setSingleMovie([fetchedMovie]);
                // const fetchedMovie = await tmdb.get(`movie/${params?.id_movie}`);
                // setSingleMovie([fetchedMovie.data]);
            } catch (error) {
                console.log(error);
            }
        }

        fetchMovie();
    }, [params?.id_movie]);

    return (
        <Box sx={{
            display: 'block',
            mt: 5,
        }}>
            {
                singleMovie.map(movie => (
                    <DetailMovieCard key={movie.title} movie={movie}></DetailMovieCard>
                ))
            }
        </Box>
    );
}

export default DetailMovie;
