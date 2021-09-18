import React, { Component } from 'react';
import MovieBlock from './MovieBlock';
import SearchForm from './SearchForm';
import './SearchMovie.css';
import TopHead from './TopHead';

class SearchMovie extends Component {
    constructor(props){
        super(props);
        this.state = {
            movies : [],
            searchmovie : '',
            err: ''
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

        this.state.err = '';
    }

    handleSearchBtn = (e) => {
        let search = this.state.searchmovie;
        this.makeApiCall(search);
        e.preventDefault();
        
        if(search===''){
            this.setState({
                err: 'Please enter movie name',
            });
        }
    }

    makeApiCall(movie){
        fetch(`http://www.omdbapi.com/?s=${movie}&apikey=e024338b`)
        .then((response) => {
            console.log("status", response.status);
            if(response.status !== 200) throw response;
            return response.json();
        })
        .then((data) => {
            if(data.Search){
                this.setState({
                    movies: data.Search,
                });
            }
            //console.log("data", data);
        })
        .catch((error) => {
            alert("Movie not found");
        });
    }

    render() {
        const { searchmovie, movies, err } = this.state;
        return (
            <>
                <header className="head-section">
                    <TopHead title="Movies" />
                </header>
                
                <SearchForm 
                    searchValue={searchmovie}
                    handleSearchInput={this.handleSearchInput}
                    handleSearchBtn={this.handleSearchBtn}
                    errMsg={err}
                />

                <div className="movie-result">
                    <MovieBlock Movies={movies} />
                </div>
            </>
        )
    }
}

export default SearchMovie;