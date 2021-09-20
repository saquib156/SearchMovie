import React from 'react';

import { UserContext, EmailContext } from '../../MainComponent';

const ComponentF = (props) => {
    return (
        <UserContext.Consumer>
            {(user) => {
                return ( 
                    <>
                        <h4>Hello, {user}</h4>
                        <EmailContext.Consumer>
                            {(email) => {
                                return <h5>Your Email id is: {email}</h5>;
                            }}
                        </EmailContext.Consumer>
                    </>
                )
            }}
        </UserContext.Consumer>
    )
}

export default ComponentF;