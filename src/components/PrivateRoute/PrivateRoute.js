import React from 'react';
import { Spinner } from 'react-bootstrap';
import { Redirect, Route } from 'react-router';
import useAuth from '../../hooks/useAuth';

const PrivateRoute = ({ children, ...rest }) => {
    const {user, isLoading} = useAuth();

    if(isLoading){
        return <div className="text-center"><Spinner className="mt-4" animation="border" variant="warning" /></div>
    }
    
    return (
        <Route
        {...rest}
        render = { ({location}) => user.email ? children : 
        <Redirect
        to={{
            pathname: "/login",
            state: { from: location }
          }}
        >

        </Redirect>
        }
        >

        </Route>
    );
};

export default PrivateRoute;