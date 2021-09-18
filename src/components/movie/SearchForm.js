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
    const { searchInput, handleSearchInput, handleSearchBtn, errMsg } = props;
    return(
        <>
            <div className="search-form">
                <input type="text" value={searchInput} onChange={handleSearchInput} />
                <button onClick={handleSearchBtn} >Search</button>
                <div className="err">{errMsg}</div>
            </div>
        </>
    )
}

export default SearchForm;