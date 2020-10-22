import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import SearchMovies from "./components/searchMovies/searchMovies.js";
import Header from "./components/header/header.js"
import Footer from "./components/footer/footer.js"
//import App from './App';
//import * as serviceWorker from './serviceWorker';

class Main extends React.Component {
  render() {
    return (
      <>
        <div id="header">
            <Header/>
        </div>
        <div className="container">
            <h1 className="title">Search Any Movie</h1>
            <SearchMovies/>
          
        </div>
        <div id="footer">
            <Footer/>
        </div>
      </>
    );
  };
}

ReactDOM.render(
  <Main /> , document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
//serviceWorker.unregister();
