import React from 'react';

export default function MovieCard({movie})
{
    return(
        <div className="movie">
            <img className="movie--img"
                 src={`https://image.tmdb.org/t/p/w185_and_h278_bestv2/${movie.poster_path}`}
                 alt={movie.title +'poster'}
            />
             <strong className="movie--title">{movie.title}</strong>
             <p><strong className="movie--dates">RELEASE DATE:</strong> <small>{movie.release_date}</small>  <strong>RATING:</strong> <small>{movie.vote_average}</small></p>
             <div className="movie--content">
               <p className="movie--desc">{movie.overview}</p>
            </div>
        </div>
    )
}