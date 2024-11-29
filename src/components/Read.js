import React from 'react';
import Movies from './Movies';
import axios from 'axios';
import { useEffect } from 'react';
import { useState } from 'react';

// Read Component
const Read = () => {
    // Adds state variables to functional components
    // Stores data returned from an API and manages the state of the application by updating movies
    const [movies, setMovies] = useState([]);

    // Fetches updated movie data from the server and updates the state.
    const Reload = () => {
        console.log("Reloading movie data...");
        axios.get('http://localhost:4000/api/movies')
            .then((response) => {
                setMovies(response.data);
            })
            .catch((error) => {
                console.error("Error reloading data:", error);
            });
    };

    // React hook, useEffect, to synchronize a component with an external system
    useEffect(() => {
        Reload();
    }, []);

    // Returns the relevant message and the movie array
    return (
        <div>
            <h2>Movie List</h2>
            <Movies myMovies={movies} ReloadData={Reload} />
        </div>
    );
}

export default Read; // Exports the component