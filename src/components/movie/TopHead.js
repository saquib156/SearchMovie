import React, { Component } from "react";

class TopHead extends Component {
    render(){
        return(
            <>
                <h1>{this.props.title}</h1>
            </>
        )
    }
}

export default TopHead;