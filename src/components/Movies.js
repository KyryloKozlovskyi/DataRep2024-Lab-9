import React from 'react';
import MovieItem from './MovieItem';

// Movies component
const Movies = (props) => {
    // Individual elements pulled out of the array and assigned unique IDs 
    // Passes the ReloadData function to child components so they can trigger a refresh after deletion
    return (
        <>
            {props.myMovies.map((movie) => (
                <MovieItem
                    myMovie={movie}
                    key={movie._id}
                    Reload={props.ReloadData}
                />
            ))}
        </>
    );
}

export default Movies; // Exports the component