import React from 'react';
import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from "react-router-dom";

// Edit function allows users to edit movie data by clicking "Edit" button
export default function Edit(props) {
    let { id } = useParams(); // Hook to access dynamic parameters of the current route
    const [title, setTitle] = useState("");
    const [year, setYear] = useState("");
    const [poster, setPoster] = useState("");
    const navigate = useNavigate(); // Hook returns the function that enables navigation to different routes programmatically

    // HTTP GET call returns the JSON data (ID) for specific movie
    useEffect(() => {
        axios.get('http://localhost:4000/api/movie/' + id)
            .then((response) => {
                // Set the states
                setTitle(response.data.title);
                setYear(response.data.year);
                setPoster(response.data.poster);
            })
            .catch((error) => {
                console.log(error); // Log the error
            });
    }, [id]);

    // Event handler to submit edited movie data
    const handleSubmit = (event) => {
        event.preventDefault();
        const newMovie = { id, title, year, poster };
        axios.put('http://localhost:4000/api/movie/' + id, newMovie)
            .then((res) => {
                console.log(res.data);
                navigate('/read');
            });
    }
    // Returns a Form with current movie title, poster image, and the year.
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label>Movie Title: </label>
                    <input type="text"
                        className="form-control"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)} />
                </div>
                <div className="form-group">
                    <label>Release Year: </label>
                    <input type="text"
                        className="form-control"
                        value={year}
                        onChange={(e) => setYear(e.target.value)} />
                </div>
                <div className="form-group">
                    <label>Poster URL: </label>
                    <input type="text"
                        className="form-control"
                        value={poster}
                        onChange={(e) => setPoster(e.target.value)} />
                </div>
                <div className="form-group">
                    <input type="submit" value="Edit Movie" className="btn btn-primary" />
                </div>
            </form>
        </div>
    );
}