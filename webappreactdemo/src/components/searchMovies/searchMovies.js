import React from 'react';
import './searchMovies.css'

const searchMovie = async(e)=> {
    e.preventDefault();
    console.log("User Submit button hits");
    const query='Room'
    const url =`https://api.themoviedb.org/3/movie/550?api_key=<YOUR_API_KEY>&language=en-US&query=${query}&page=1&include_adult=false`;

    try{

       const rawResponse = await fetch(url);
       const jsonData = await rawResponse.json();
       console.log(jsonData);
    }catch(err)
    {
        console.log(err);
    }
}
export default function SearchMovies(){
    return (
        <form className="form" onSubmit={searchMovie}>
        <label className="label" htmlFor="query">Movie Name</label>
        <input className="input" type="text" name="query" placeholder="i.e. I Love You ..."></input>
        <button className="button" type="submit">Search</button>
    </form>
    )
}
