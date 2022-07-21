import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import MovieCard from '../components/MovieCard';
import tmdb from '../apis/tmdb';
import { Box } from '@mui/system';
import { Grid } from '@mui/material';

const SearchMovie = () => {
    let params = useParams();
    const [searchMovie, setSearchMovie] = useState([]);

    useEffect(() => {
        const fetchMovie = async () => {
            try {
                // const fetchedMovie = await require("../mock-movie-list.json");
                // setSearchMovie(fetchedMovie.results);
                const api = await tmdb({
                    query: params?.query
                });
                const fetchedMovie = await api.get(`search/movie`);
                setSearchMovie(fetchedMovie.data.results);
            } catch (error) {
                console.log(error);
            }
        }

        fetchMovie();
    }, [params?.query]);

    return (
        <Box sx={{
            display: 'flex',
            flexDirection: 'column',
            mt: 5,
        }}>
            <Box sx={{
                display: 'flex',
                flexDirection: 'row',
                flexWrap: 'wrap',
                justifyContent: 'space-between',
            }}>

                <Grid container spacing={{ xs: 2, md: 2 }} columns={{ xs: 2, sm: 4, md: 12 }}>
                    {
                        searchMovie.map((movie, index) => (
                            <Grid item xs={2} sm={4} md={6} key={index}>
                                <MovieCard key={movie.title} movie={movie}></MovieCard>
                            </Grid>
                        ))
                    }
                </Grid>
            </Box>
        </Box>
    );
}

export default SearchMovie;
