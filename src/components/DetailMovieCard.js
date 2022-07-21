import { CardMedia, List, ListItem, ListItemText } from '@mui/material';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import * as React from 'react';

const BASE_IMAGE_URL = "https://image.tmdb.org/t/p/original";

const DetailMovieCard = ({ movie }) => {
  return (
    <Card id={movie.id} sx={{ backgroundColor: 'antiquewhite', padding: 5, maxWidth: '80%', mt: 15, mb: 5, ml: 'auto', mr: 'auto' }}>
      <CardMedia
        component="img"
        sx={{ width: '100%', height: 480, objectFit: 'contain' }}
        image={`${BASE_IMAGE_URL}${movie.poster_path}`}
        alt={movie.title}
      />
      <CardContent sx={{ textAlign: 'center' }}>
        <Typography gutterBottom variant="h5" component="div">
          {movie.title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {movie.overview}
        </Typography>
      </CardContent>
      <List>
        <ListItem key={`${movie.id}_language`}>
          <ListItemText primary="Original Language" secondary={movie.original_language} />
        </ListItem>
        <ListItem key={`${movie.id}_date`}>
          <ListItemText primary="Release Date" secondary={movie.release_date} />
        </ListItem>
        <ListItem key={`${movie.id}_v_count`}>
          <ListItemText primary="Vote Count" secondary={movie.vote_count} />
        </ListItem>
        <ListItem key={`${movie.id}_v_average`}>
          <ListItemText primary="Vote Average" secondary={movie.vote_average} />
        </ListItem>
      </List>
    </Card >
  );
}

export default DetailMovieCard;