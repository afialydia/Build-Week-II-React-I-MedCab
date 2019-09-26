import React, {useState} from 'react';
import {Route, Redirect} from 'react-router-dom';
import Auth from "./auth";

export const ProtectedRoute = ({component: Component, ...rest}) => {
//     const [favorites, setFavorites] = useState([])
// favorites={favorites} setFavorites={setFavorites}
    return(
        <Route {...rest} render={
            (props) => {
                if(Auth.isAuthenticated()){
                    return <Component {...props}  />;
                }
                else {
                return <Redirect to={
                    {
                        pathname: '/',
                        state: {
                            from: props.location
                        }
                    }
                } />;
                }       
         }}
         />
    );
};