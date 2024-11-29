import React from 'react';
import { useEffect } from "react";
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';

// Logs new movie data to the console
function MovieItem(props) {
    useEffect(() => {
        console.log("Movie Item:", props.myMovie);
    }, [props.myMovie]); // Only run this effect when the mymovie prop changes
    // Returns a Bootstrap Cards with the movie title as the header, 
    // the poster image in the body, and the year at the footer.
    // "Edit" button added to each movie item. Used to navigate to edit page for specific movie
    return (
        <div>
            <Card>
                <Card.Header>{props.myMovie.title}</Card.Header>
                <Card.Body>
                    <blockquote className="blockquote mb-0">
                        <img src={props.myMovie.poster} alt={props.myMovie.title} />
                        <footer>{props.myMovie.year}</footer>
                    </blockquote>
                    <Link to={"/edit/" + props.myMovie._id} className="btn btn-primary">Edit</Link>
                </Card.Body>
            </Card>
        </div>
    );
}

export default MovieItem; // Exports the component