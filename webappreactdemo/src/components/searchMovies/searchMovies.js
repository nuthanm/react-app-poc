import React from 'react';
import './searchMovies.css'
export default function SearchMovies(){
    return (
        <form className="form">
        <label className="label" htmlFor="query">Movie Name</label>
        <input className="input" type="text" name="query" placeholder="i.e. I Love You ..."></input>
        <button className="button" type="submit">Search</button>
    </form>
    )
}
