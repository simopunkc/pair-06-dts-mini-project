import { Box, CardMedia, Rating } from '@mui/material';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import * as React from 'react';
import { NavLink } from 'react-router-dom';

const BASE_IMAGE_URL = "https://image.tmdb.org/t/p/original";

const MovieCard = ({ movie }) => {
  return (
    <NavLink to={`/movies/${movie.id}`} key={movie.id} sx={{ textDecoration: 'none' }}>
      <Card id={movie.id} sx={{ display: 'flex', backgroundColor: 'lemonchiffon', margin: 5 }}>
        <CardMedia
          component="img"
          sx={{ width: 150, height: 225, objectFit: 'cover' }}
          image={movie.poster_path != null ? `${BASE_IMAGE_URL}${movie.poster_path}` : 'https://via.placeholder.com/2000x3000'}
          alt="Movie poster"
        />
        <Box sx={{ display: 'flex', flexDirection: 'column' }}>
          <CardContent sx={{ flex: '1 0 auto' }}>
            <Typography component="div" variant="h6">
              {movie.title}
            </Typography>
            <Typography variant="subtitle1" color="text.secondary" component="div">
              {movie.release_date != null ? new Date(movie.release_date).getFullYear() : movie.release_date}
            </Typography>
            <Box
              sx={{
                width: 200,
                display: 'flex',
                alignItems: 'center',
              }}
            >
              <Rating name="read-only" precision={0.1} value={movie.vote_average / 2} max={5} readOnly />
              <Box sx={{ ml: 2 }}>{movie.vote_average != null ? movie.vote_average.toFixed(1) : movie.vote_average}</Box>
            </Box>
            <Typography variant="subtitle1" color="text.secondary" component="div">
              {movie.overview.length > 100 ? movie.overview.substring(0, 100) + "..." : movie.overview}
            </Typography>
          </CardContent>
        </Box>
      </Card>
    </NavLink>
  );
}

export default MovieCard;