import React from 'react';

/*class SearchForm extends Component {

    constructor(props){
        super(props);
    }

    render(){
        const { searchInput, handleSearchInput, handleSearchBtn } = this.props;
        return(
            <>
                <div className="search-form">
                    <input type="text" value={searchInput} onChange={handleSearchInput} />
                    <button onClick={handleSearchBtn} >Search</button>
                </div>
            </>
        )
    }
}*/

const SearchForm = (props) => {
    const { searchInput, handleSearchInput, handleSearchBtn } = props;
    return(
        <>
            <div className="search-form">
                <input type="text" value={searchInput} onChange={handleSearchInput} />
                <button onClick={handleSearchBtn} >Search</button>
            </div>
        </>
    )
}

export default SearchForm;