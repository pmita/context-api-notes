import React, {useState} from 'react';
//Let's import our component
import Movie from './Movie';

const MovieList = () => {
    //Let's create our state
    const [movies, setMovies] = useState([
        {
            name: 'Harry Potter',
            price: '$10',
            id: 23124
        },
        {
            name: 'Game of Thrones',
            price: '$10',
            id: 2566124
        },
        {
            name: 'Inception',
            price: '$10',
            id: 23524
        },
    ]);
    return(
        <>
            {movies.map( movie => (
                <Movie name={movie.name} price={movie.price} key={movie.id}/>
            ))}
        </>
    );
}

export default MovieList;