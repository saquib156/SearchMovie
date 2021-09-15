import React, { Component } from 'react';
import MovieBlock from './MovieBlock';
import './SearchMovie.css';
import TopHead from './TopHead';

class SearchMovie extends Component {
    constructor(props){
        super(props);
        this.state = {
            movies : [],
            searchmovie : ''
        }

        this.inputRefs = React.createRef();
    }

    omponentDidMount(){
        this.inputRefs.current.focus();
        console.log(this.inputRefs);
    }

    handleSearchInput = (e) => {
        this.setState({
            searchmovie: e.target.value,
        });
    }

    handleSearchBtn = (e) => {
        let search = `${this.state.searchmovie}`;
        this.makeApiCall(search);
        e.preventDefault();
    }

    makeApiCall(movie){
        fetch(`http://www.omdbapi.com/?s=${movie}&apikey=e024338b`)
        .then((response) => {
            console.log("status", response.status);
            if(response.status !== 200) throw response;
            return response.json();
        })
        .then((data) => {
            this.setState({
                movies: data.Search,
            });
            //console.log("data", data);
        })
        .catch((error) => {
            alert("Movie not found");
        });
    }

    render() {
        const { searchmovie, movies } = this.state;
        return (
            <>
                <header className="head-section">
                    <TopHead />
                </header>
                
                <div className="search-form">
                    <input type="text" value={searchmovie} ref={this.inputRefs} onChange={this.handleSearchInput} />
                    <button type="button" onClick={this.handleSearchBtn}>Search</button>
                </div>

                <div className="movie-result">
                    <MovieBlock Movies={movies} />
                </div>
            </>
        )
    }
}

export default SearchMovie;