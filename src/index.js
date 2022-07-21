import './index.css';

import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import App from './App';
import PrivateComponent from './components/PrivateComponent';
import Login from './containers/Login';
import DetailMovie from './containers/DetailMovie';
import MovieList from './containers/MovieList';
import SearchMovie from './containers/SearchMovie';
import NotFound from './containers/NotFound';
import Register from './containers/Register';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route path="/" element={<MovieList />} />
          <Route path="movies/:id_movie" element={
            <PrivateComponent loginOnly={true}>
              <DetailMovie />
            </PrivateComponent>
          } />
          <Route path="/search/:query" element={<SearchMovie />} />
          <Route path="login" element={
            <PrivateComponent loginOnly={false}>
              <Login />
            </PrivateComponent>} />
          <Route path="register" element={
            <PrivateComponent loginOnly={false}>
              <Register />
            </PrivateComponent>} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
