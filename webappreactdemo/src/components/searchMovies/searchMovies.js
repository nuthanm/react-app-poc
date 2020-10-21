import React, {useState} from 'react';
import MovieCard from './movieCard.js';
import './searchMovies.css'

export default function SearchMovies(){
    const [query, setQuery] = useState('');
    const [movies , setMovies] = useState([]);

const searchMovie = async(e)=> {
    e.preventDefault();
    
    const url =`https://api.themoviedb.org/3/search/movie?api_key=f1e6ac5a0786fdea14b1765125f5c99a&language=en-US&query=${query}&page=1&include_adult=false`;

    try{
       const rawResponse = await fetch(url);
       const jsonData = await rawResponse.json();
       console.log(jsonData);
       setMovies(jsonData.results);
    }catch(err)
    {
        console.log(err);
    }
}
    return (
        <>
            <form className="form" onSubmit={searchMovie}>
                <label className="label" htmlFor="query">Movie Name</label>
                <input className="input" type="text" name="query" 
                    placeholder="i.e. I Love You ..." value={query} onChange={(e)=> setQuery(e.target.value)}></input>
                <button className="button" type="submit">Search</button>
            </form>
            <div className="movies-list">
                {
                    movies.filter(movie => movie.poster_path).map(movie => (
                        <MovieCard movie={movie} key={movie.id} />
                         
                    ))
                }
            </div>
        </>
    )
}
