import React, { Component } from 'react';
import dummyPoster from './dummy-poster.png';

class MovieBlock extends Component {

    render(){
        const { Movies } = this.props;
        return(
            <>
                {Movies.map((mo) => (
                    <div className="movie-block">
                        { mo.Poster === 'N/A' ? <img src={dummyPoster} width="100%" alt="Movie Poster"></img> : <img src={mo.Poster} width="100%" alt="Movie Poster"></img> }
                        
                        <div className="movie-title"><h5>{mo.Title}</h5></div>
                    </div>
                ))}
                
            </>
        )
    }
}

export default MovieBlock;