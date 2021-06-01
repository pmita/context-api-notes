import React, {useState, createContext} from 'react';

//We need to initiate the context outside our component
//This allows us to now use the state we have created below
export const MovieContext = createContext();

//First component we need is the provider. The sole purpose of this
//component is to hold/provide all the information we set it to in order for us
//to access those data through our other components {props.children} essentially
//corresponds to the components
export const MovieProvider = (props) => {
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
        <MovieContext.Provider value={[movies, setMovies]}>
            {props.children}
        </MovieContext.Provider>
    );
}