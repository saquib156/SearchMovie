import React from 'react';
import GitUser from './GitUser';

class FetchData extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            username : '',
            profile_pic : '',
            searchuser : ''
        }
    }

    componentDidMount(){
        this.makeApiCall("saquib156");
    }

    handleSearchInput = (e) => {
        this.setState({
            searchuser: e.target.value,
        });
    }

    handleSearchBtn = (e) => {
        let search = `${this.state.searchuser}`;
        this.makeApiCall(search);
        e.preventDefault();
    }

    makeApiCall(name){
        fetch(`https://api.github.com/users/${name}`)
        .then((response) => {
            console.log("status", response.status);
            if(response.status !== 200) throw response;
            return response.json();
        })
        .then((data) => {
            const { name, avatar_url, login } = data;
            let username = name ? name : login;
            this.setState({
                username: username,
                profile_pic: avatar_url,
            });
            //console.log("data", data);
        })
        .catch((error) => {
            alert("Username not found");
        });
    }

    render() {
        const { username, profile_pic, searchuser } = this.state;
        return (
            <>
                <GitUser username={username} profile_pic={profile_pic}/>
                <input type="text" value={searchuser} onChange={this.handleSearchInput} />
                <button type="button" onClick={this.handleSearchBtn}>Search</button>
            </>
        )
    }
}

export default FetchData;