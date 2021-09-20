import React from 'react';
import ComponentC from './hooks/context/ComponentC';

export const UserContext = React.createContext();
export const EmailContext = React.createContext();

const MainComponent = (props) => {
    return (
        <UserContext.Provider value={"Saquib"}>
            <EmailContext.Provider value={"saquibjamal.jamal156@gmail.com"}>
                <ComponentC />
            </EmailContext.Provider>
        </UserContext.Provider>
    )
}

export default MainComponent;