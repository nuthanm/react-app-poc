import React from 'react';
import './header.css'
import logo from './images/ExploreMovies.png'

export default function Header(){
    return(
            <header>
                <img src={logo} alt="Explore Movies" height="30px" width="30px" /> <span>Explore Movies</span>
            </header>           
     );
}

// ReactDOM.render(<Footer />, document.getElementById('footer'));