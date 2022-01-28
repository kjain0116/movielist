import React from 'react';

function MovieList(props) {
  const movies = props.movies;
  const listItems = movies.map((movie) =>
    <li key={movie.title}>
      {movie.title}
    </li>
  );
  return (
    <ul>{listItems}</ul>
  );
}

// function MovieList(props) {
//   return <p>{props.movies[0].title + '\n'}
//   {props.movies[1].title + '\n'}
//   {props.movies[2].title + '\n'}
//   {props.movies[3].title + '\n'}
//   {props.movies[4].title}</p>

// }

export default MovieList;