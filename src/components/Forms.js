import React, { Component } from 'react';


class Forms extends Component {

    constructor (props){
        super(props);
        this.state = {
            username : "",
            comment : "",
            topics : "",
        };
    }

    //Username Onchange function
    hadlerUsernameChange = (name) => {
        this.setState({
            username: name.target.value,
        });
    }

    //Comment Onchange function
    hadlerCommentChange = (comment) => {
        this.setState({
            comment: comment.target.value,
        });
    }

    //Topics Onchange function
    hadlerTopicsChange = (topics) => {
        this.setState({
            topics: topics.target.value,
        });
    }

    render() {
        return (
            <>
                <div>
                    <label>Username</label>
                    <input 
                    type = "text"
                    value = {this.state.username}
                    onChange = {this.hadlerUsernameChange}
                    />
                </div>
                <div>
                    <label>Comment</label>
                    <input 
                    type = "text"
                    value = {this.state.comment}
                    onChange = {this.hadlerCommentChange}
                    />
                </div>
                <div>
                    <label>Topics</label>
                    <select value = {this.state.topics} onChange = {this.hadlerTopicsChange}>
                        <option value="HTML">HTML</option>
                        <option value="CSS">CSS</option>
                        <option value="Javascript">Javascript</option>
                        <option value="ReactJS">ReactJS</option>
                    </select>
                </div>
                <div>{`Username is: ${this.state.username}`}</div>
                <div>{`Comment is: ${this.state.comment}`}</div>
                <div>{`Topic is: ${this.state.topics}`}</div>
            </>
        )
    }
}

export default Forms;