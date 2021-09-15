import React from 'react';

class GitUser extends React.Component {

    render(){
        const { username, profile_pic } = this.props;
        return(
            <>
                <h1>Name : {username}</h1>
                <img src={profile_pic} width="300" height="300" alt="Profile Pic" />
            </>
        )
    }
}

export default GitUser;